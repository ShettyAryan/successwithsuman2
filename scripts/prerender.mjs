// Post-build step: renders each route in a real headless browser (so the
// Seo component's effects, JSON-LD, and full page content actually execute)
// and writes the resulting HTML as a static file. This means crawlers that
// don't run JavaScript (most AI crawlers, and any that don't wait for a
// second render pass) see complete, correct pages instead of an empty
// `<div id="root">`. Runs only at build time — ships nothing to visitors.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

// Prefer a locally installed Chrome (fast, no extra download) and only pull
// in @sparticuz/chromium — a Chromium build with its shared libraries
// statically bundled — when none is found. This is what Vercel's build
// image needs: it has no system Chrome and is missing libnspr4/libnss3/etc,
// which makes a normal `puppeteer`-downloaded Chrome fail to launch there.
async function resolveLaunchOptions() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ].filter(Boolean);

  const localChrome = candidates.find((p) => fs.existsSync(p));
  if (localChrome) {
    return { executablePath: localChrome, headless: true, args: ['--no-sandbox'] };
  }

  const chromium = (await import('@sparticuz/chromium')).default;
  return {
    executablePath: await chromium.executablePath(),
    headless: 'shell',
    args: await puppeteer.defaultArgs({ args: chromium.args, headless: 'shell' }),
  };
}

const routes = [
  '/',
  '/about',
  '/services',
  '/masterclass',
  '/contact',
  '/privacy-policy',
  '/cancellation-refund-policy',
  '/disclosure',
  '/earnings-disclaimer',
  '/terms-of-service',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(distDir, urlPath);

    if (urlPath === '/' || !path.extname(urlPath)) {
      const indexAtPath = path.join(distDir, urlPath, 'index.html');
      filePath = fs.existsSync(indexAtPath) ? indexAtPath : path.join(distDir, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function run() {
  if (!fs.existsSync(distDir)) {
    console.error('dist/ not found — run `vite build` first.');
    process.exit(1);
  }

  const server = await startServer();
  const port = server.address().port;

  // Prerendering is an enhancement, not a requirement — dist/ already holds
  // a working SPA build at this point. If no browser can be launched at all
  // (a hosting platform's build image changes, a dependency breaks, etc.),
  // log it clearly and ship the plain SPA build rather than failing the
  // entire deployment, which is what happened before this fallback existed.
  let browser;
  try {
    const launchOptions = await resolveLaunchOptions();
    console.log(`  using browser: ${launchOptions.executablePath}`);
    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    console.warn('  ! Could not launch a browser for prerendering, shipping the plain SPA build instead.');
    console.warn(`  ! ${err.message}`);
    server.close();
    return;
  }

  try {
    for (const route of routes) {
      try {
        const page = await browser.newPage();
        await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        await page.waitForSelector('script[data-seo-jsonld]', { timeout: 10000 }).catch(() => {
          console.warn(`  ! ${route}: JSON-LD marker never appeared, saving current HTML anyway`);
        });
        const html = await page.content();
        await page.close();

        const outDir = route === '/' ? distDir : path.join(distDir, route);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'index.html'), html);
        console.log(`  ✓ prerendered ${route}`);
      } catch (err) {
        console.warn(`  ! Failed to prerender ${route}, leaving the plain SPA shell for this route.`);
        console.warn(`  ! ${err.message}`);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
}

run().catch((err) => {
  // Should be unreachable (browser launch and per-route errors are already
  // caught above) but if something else goes wrong, don't take the whole
  // deployment down over a prerendering bug.
  console.warn('  ! Prerendering step failed unexpectedly, shipping the plain SPA build instead.');
  console.warn(err);
});
