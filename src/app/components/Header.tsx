import { Link, NavLink } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/masterclass', label: 'Masterclass' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-violet-line"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-16 md:h-[4.5rem] flex items-center justify-between gap-3">
        <Link
          to="/"
          className="min-w-0 truncate text-base sm:text-xl md:text-2xl tracking-tighter text-ink hover:text-violet transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
        >
          Success with Suman
        </Link>

        <nav className="hidden lg:flex items-center gap-8 shrink-0">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-violet' : 'text-ink-soft hover:text-ink'}`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-block">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://study.successwithsuman.com/l/f61fd9d4a1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex group items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-violet text-white rounded-full hover:bg-violet-deep transition-all hover:shadow-[0_8px_24px_-8px_rgba(91,75,255,0.6)] hover:-translate-y-0.5 text-xs md:text-sm"
          >
            Book a Strategy Call
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute left-0 right-0 top-full border-t border-violet-line bg-white shadow-lg max-h-[min(28rem,calc(100dvh-4rem))] overflow-y-auto"
          >
            <nav className="px-5 sm:px-6 py-6 flex flex-col gap-2 max-w-7xl mx-auto">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base ${isActive ? 'bg-violet-soft text-violet-deep' : 'text-ink hover:bg-off-white'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="https://study.successwithsuman.com/l/f61fd9d4a1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3.5 bg-violet text-white rounded-full text-center"
              >
                Book a Strategy Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
