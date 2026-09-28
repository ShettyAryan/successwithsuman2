import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Seo } from './Seo';
import { PageBreadcrumb } from './PageBreadcrumb';
import { buildGraph, organizationNode, breadcrumbNode } from '../lib/schema';

export const legalPages = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
  { path: '/cancellation-refund-policy', label: 'Cancellation & Refund Policy' },
  { path: '/disclosure', label: 'Disclosure' },
  { path: '/earnings-disclaimer', label: 'Earnings Disclaimer' },
] as const;

interface LegalPageLayoutProps {
  title: string;
  breadcrumb: string;
  path: string;
  description: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  breadcrumb,
  path,
  description,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const jsonLd = buildGraph([
    organizationNode,
    breadcrumbNode([
      { name: 'Home', path: '/' },
      { name: breadcrumb, path },
    ]),
  ]);

  return (
    <div className="bg-white overflow-x-hidden min-h-screen flex flex-col">
      <Seo
        title={`${title} | Success with Suman`}
        description={description}
        path={path}
        jsonLd={jsonLd}
      />
      <Header />

      <main className="flex-1 pt-16 md:pt-[4.5rem]">
        <PageBreadcrumb page={breadcrumb} />

        <section className="relative overflow-hidden border-b border-violet-line bg-violet-tint">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(119,10,125,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(119,10,125,0.06) 0%, transparent 55%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-mono text-[13px] sm:text-[15px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-ink-mute flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-violet/40" />
                Legal
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-ink max-w-3xl">
                {title}
              </h1>
              {lastUpdated && (
                <p className="mt-4 text-sm text-ink-mute font-mono tracking-wide">
                  Last updated: {lastUpdated}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 legal-prose"
            >
              {children}
            </motion.article>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-violet-line bg-off-white p-6">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute mb-4">
                  Related policies
                </div>
                <nav className="flex flex-col gap-2">
                  {legalPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className={`text-sm px-3 py-2 rounded-lg transition-colors ${
                        page.path === path
                          ? 'bg-violet-soft text-violet-deep font-medium'
                          : 'text-ink-soft hover:bg-white hover:text-ink'
                      }`}
                    >
                      {page.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
