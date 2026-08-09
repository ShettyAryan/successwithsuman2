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
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const routes = ['/', '/about', '/services', '/masterclass', '/contact'];

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
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  try {
    for (const route of routes) {
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
    }
  } finally {
    await browser.close();
    server.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
