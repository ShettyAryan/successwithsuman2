import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// Question is wrapped h3 > button (WAI-ARIA accordion pattern) so it reads as
// a real heading to screen readers and crawlers, not just clickable text.
// The h3 resets the site's global heading font/weight/tracking back to body
// styles so it renders identically to the plain-text question it replaces.
export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-violet-line hover:border-violet transition-colors overflow-hidden">
      <h3 className="m-0 text-lg font-normal" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: 'normal' }}>
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ y: -2 }}
          aria-expanded={open}
          className="w-full text-left p-6 flex items-center justify-between gap-6"
        >
          <span>{q}</span>
          <ChevronDown className={`w-5 h-5 text-violet shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </motion.button>
      </h3>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-ink-soft leading-relaxed px-6 pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
