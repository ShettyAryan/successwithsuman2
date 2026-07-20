import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import {
  ArrowRight,
  Heart,
  Activity,
  Plane,
  TrendingUp,
  LineChart,
  Crown,
  ShieldAlert,
  Sunrise,
  Baby,
  Briefcase,
  Stethoscope,
  Wallet,
  Banknote,
  Coins,
  PieChart,
  Landmark,
  Layers,
  CreditCard,
} from 'lucide-react';
const heroPortrait =
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784577059/ChatGPT_Image_Jul_21_2026_01_20_43_AM_r23a5q.png';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const whatWeDo = [
  { icon: Heart, label: 'Life Insurance' },
  { icon: Activity, label: 'Health Insurance' },
  { icon: Plane, label: 'Travel Insurance' },
  { icon: TrendingUp, label: 'Wealth Creation' },
  { icon: LineChart, label: 'Investing' },
  { icon: Crown, label: 'Inheritance' },
  { icon: ShieldAlert, label: 'Personal Accident' },
  { icon: Sunrise, label: 'Retirement' },
  { icon: Baby, label: "Children's Future" },
];

const otherServices = [
  {
    icon: Briefcase,
    title: 'Business Insurance',
    body: 'For business executives responsible for the purchase and administration of corporate insurance and self-insurance programs.',
  },
  {
    icon: Stethoscope,
    title: 'Mediclaim',
    body: 'Insurance that takes care of the expenses you incur in the event of hospitalization or domiciliary care.',
  },
  {
    icon: Wallet,
    title: 'Income Protection',
    body: 'Earning wealth can be difficult. Preserving your wealth for long term use can be even more difficult.',
  },
];

const offerings = [
  { icon: Heart, label: 'Insurance', sub: 'Life · Health · Travel · more' },
  { icon: Banknote, label: 'Mutual Funds', sub: 'Equity · Debt · Hybrid' },
  { icon: Coins, label: 'Bonds & FDs', sub: 'Stable income instruments' },
  { icon: PieChart, label: 'PMS', sub: 'Portfolio Management Services' },
  { icon: CreditCard, label: 'Loan Against Security', sub: 'Liquidity without exit' },
  { icon: Landmark, label: 'NPS', sub: 'National Pension Scheme' },
  { icon: Layers, label: 'Demat Accounts', sub: 'Holding & transactions' },
  { icon: TrendingUp, label: 'Equity & ETFs', sub: 'Direct market exposure' },
];

export default function Services() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* HERO , bottom-text editorial overlay */}
      <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#E8E6E4]">
        {/* Anchored below fixed header + object-top so her head isn't cropped */}
        <img
          src={heroPortrait}
          alt="Suman Manjrekar"
          className="absolute left-0 right-0 bottom-0 top-16 md:top-[4.5rem] w-full object-cover object-[80%_12%] sm:object-[72%_10%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 top-16 md:top-[4.5rem]"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,11,46,0.12) 0%, transparent 25%, transparent 50%, rgba(15,11,46,0.35) 88%, rgba(15,11,46,0.45) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 min-h-[100svh] flex flex-col pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase flex items-center gap-3"
            style={{ color: '#0F0B2E' }}
          >
            <span className="w-8 sm:w-10 h-px" style={{ background: 'rgba(15,11,46,0.5)' }} />
            What We Do
          </motion.div>

          <div className="mt-55 md:mt-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] sm:leading-[1]"
              style={{ color: '#0F0B2E' }}
            >
              Services that<br />
              <span style={{ color: '#770a7d' }} className="italic">protect, multiply</span><br />
              and outlive you.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 sm:mt-10 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl"
              style={{ color: '#4A4566' }}
            >
              A complete personal CFO offering, from protection to wealth creation, structured around your
              life stage and long-term goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Button href="https://study.successwithsuman.com/l/f61fd9d4a1" size="lg">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/masterclass" variant="secondary" size="lg">
                Explore Masterclass
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-14 md:mb-20" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.05] sm:leading-[1] text-ink">
              Nine pillars of a <span className="text-violet">complete plan</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-violet-line border border-violet-line rounded-2xl sm:rounded-3xl overflow-hidden">
            {whatWeDo.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 sm:p-7 md:p-10 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-violet-soft text-violet grid place-items-center mb-4 sm:mb-5 group-hover:bg-violet group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-base sm:text-xl md:text-2xl tracking-tight text-ink leading-snug">{label}</div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-ink-mute uppercase mt-2">
                  Pillar · {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-14 md:mb-20" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              Other Services
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-ink">
              Built for the <span className="text-violet">finer details</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {otherServices.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-violet-line"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet text-white grid place-items-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl tracking-tight mb-3">{title}</h3>
                <p className="text-ink-soft leading-relaxed text-sm md:text-base">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20" {...fadeUp}>
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
                Services We Offer
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-ink">
                Every instrument, <span className="text-violet">one strategy.</span>
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-ink-soft leading-relaxed text-base md:text-lg">
              Across protection, growth and liquidity, every product is selected to fit a single, coherent
              wealth architecture.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-violet-line border border-violet-line rounded-2xl sm:rounded-3xl overflow-hidden">
            {offerings.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white p-5 sm:p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-tint text-violet grid place-items-center mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-base sm:text-lg tracking-tight text-ink">{label}</div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-wider sm:tracking-[0.2em] text-ink-mute uppercase mt-2 leading-snug">
                  {sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <motion.div
          className="relative max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-violet text-white px-8 sm:px-14 md:px-24 py-20 md:py-28 text-center"
          {...fadeUp}
        >
          <div aria-hidden className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-deep blur-3xl opacity-40" />
          <div aria-hidden className="absolute -bottom-32 -left-24 w-[24rem] h-[24rem] rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl mx-auto">
            <div className="font-mono text-[11px] tracking-[0.3em] text-white/70 uppercase mb-6 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-white/40" />
              Ready when you are
              <span className="w-10 h-px bg-white/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-white">
              One conversation. <span className="text-violet-soft italic">A complete plan.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/85 leading-relaxed mx-auto max-w-xl">
              Book a private strategy call and walk away with clarity, whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" className="!bg-white !text-violet hover:!bg-violet-soft">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
