import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Calendar, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
const heroPortrait =
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576887/ChatGPT_Image_Jul_21_2026_01_16_24_AM_ki8e1w.png';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'connect@successwithsuman.com', href: 'mailto:connect@successwithsuman.com' },
  { icon: Phone, label: 'Phone', value: '+91 91313 13128', href: 'tel:+919131313128' },
  { icon: Phone, label: 'Phone (Alt)', value: '+91 91551 35975', href: 'tel:+919155135975' },
  { icon: Calendar, label: 'Book a strategy call', value: 'Book your private session', href: 'https://study.successwithsuman.com/l/f61fd9d4a1' },
  { icon: MapPin, label: 'Location', value: 'India (also serving NRIs)', href: '#' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'Strategy call', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm({ ...form, [key]: value });
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* HERO , bottom-text editorial overlay */}
      <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#EDEBE9]">
        {/* Anchored below fixed header + object-top so her head isn't cropped */}
        <img
          src={heroPortrait}
          alt="Suman Manjrekar"
          className="absolute left-0 right-0 w-full object-cover object-[78%_30%] sm:object-[72%_28%]"
          style={{
            top: '0',
            height: '118%',
            transform: 'translateY(-10%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,11,46,0.12) 0%, transparent 25%, transparent 50%, rgba(15,11,46,0.35) 88%, rgba(15,11,46,0.45) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 min-h-[100vh] flex flex-col pt-32 sm:pt-36 md:pt-40 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
            style={{ color: '#0F0B2E' }}
          >
            <span className="w-10 h-px" style={{ background: 'rgba(15,11,46,0.5)' }} />
            Get In Touch
          </motion.div>

          <div className="mt-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1]"
              style={{ color: '#0F0B2E' }}
            >
              Let's architect<br />
              <span style={{ color: '#770a7d' }} className="italic">your wealth,</span><br />
              on purpose.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 text-base md:text-xl leading-relaxed max-w-2xl"
              style={{ color: '#4A4566' }}
            >
              Tell me a little about where you are and where you want to go. You will hear back
              within one business day, clarity, no scripts, no sales pressure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Button href="https://study.successwithsuman.com/l/f61fd9d4a1" size="lg">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-5 sm:px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <motion.div className="md:col-span-7 p-6 sm:p-10 md:p-12 rounded-[2rem] bg-off-white border border-violet-line" {...fadeUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-violet-soft text-violet grid place-items-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl tracking-tighter mb-3">Message received.</h2>
                <p className="text-ink-soft max-w-md mx-auto">
                  Thank you, {form.name || 'friend'}. I'll personally reply within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="font-mono text-xs tracking-widest text-violet uppercase mb-2">Strategy Call Request</div>
                <h2 className="text-2xl sm:text-3xl tracking-tighter mb-6">A few details to get us started.</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-violet-line focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/10 transition-all"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-violet-line focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/10 transition-all"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-violet-line focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/10 transition-all"
                      placeholder="+91 98XXX XXXXX"
                    />
                  </Field>
                  <Field label="I'm interested in">
                    <select
                      value={form.interest}
                      onChange={(e) => update('interest', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-violet-line focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/10 transition-all appearance-none"
                    >
                      <option>Strategy call (1-2-1)</option>
                      <option>Infinite Wealth Hub</option>
                      <option>Insurance Planning</option>
                      <option>Mutual Funds & Investing</option>
                      <option>Retirement Planning</option>
                      <option>Something else</option>
                    </select>
                  </Field>
                </div>

                <Field label="What would you like to discuss?">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-violet-line focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/10 transition-all resize-none"
                    placeholder="A few lines about your goals, current situation, or questions..."
                  />
                </Field>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet text-white rounded-full hover:bg-violet-deep transition-all shadow-[0_8px_24px_-8px_rgba(91,75,255,0.45)] hover:shadow-[0_12px_30px_-10px_rgba(91,75,255,0.6)]"
                >
                  Send message <ArrowRight className="w-4 h-4" />
                </motion.button>
                <p className="text-xs text-ink-mute">
                  Your details stay private. No newsletters, no third-party sharing.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div className="md:col-span-5 space-y-4" {...fadeUp}>
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-violet-line hover:border-violet transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-soft text-violet grid place-items-center shrink-0 group-hover:bg-violet group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs tracking-widest text-ink-mute uppercase">{label}</div>
                  <div className="text-ink mt-1 break-words">{value}</div>
                </div>
              </motion.a>
            ))}

            <div className="p-6 rounded-2xl bg-ink text-white">
              <div className="font-mono text-xs tracking-widest text-violet-soft uppercase mb-3">Stay Connected</div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Follow along for short, free insights on protection, planning and the MMH Formula.
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/successwithsuman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet text-white grid place-items-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.trustpilot.com/review/successwithsuman.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00B67A] text-white grid place-items-center transition-colors text-xs font-bold">
                  ★
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-ink-soft mb-2">
        {label}{required && <span className="text-violet"> *</span>}
      </span>
      {children}
    </label>
  );
}
