import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowRight, ArrowLeft, Shield, TrendingUp, Compass, Landmark, Check, ChevronDown, MessageCircle, Play, Star, ExternalLink } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, type TransitionEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import portraitImg from '../../imports/masterclass_hero.png';
import { CountUp } from '../components/CountUp';

const pains = [
  'High income but no real wealth on the balance sheet.',
  'Random SIPs, mismatched policies, scattered investments.',
  'No clarity on protection, taxes, or succession.',
  'Markets feel like gambling instead of a system.',
];

const services = [
  {
    icon: Shield,
    title: 'Insurance Solutions',
    tag: 'Protect',
    body: 'Term, health and asset protection engineered to ringfence your family, without the noise of agent-driven products.',
    points: ['Custom term cover sizing', 'Health & critical illness audit', 'HUF & nominee structuring'],
  },
  {
    icon: TrendingUp,
    title: 'Mutual Funds',
    tag: 'Multiply',
    body: 'Goal-mapped, AMFI-compliant portfolios that compound quietly. No noise, no churn, just clean asset allocation.',
    points: ['Goal-bucketed portfolios', 'Tax-efficient allocations', 'Quarterly rebalancing'],
  },
  {
    icon: Compass,
    title: 'Financial Planning',
    tag: 'Direct',
    body: 'Your full financial picture in one map: income, expenses, taxes, goals, risks. The CFO view of your life.',
    points: ['Cash flow architecture', 'Goal-based roadmap', 'Annual strategy reviews'],
  },
  {
    icon: Landmark,
    title: 'Pension & Legacy',
    tag: 'Hold',
    body: 'Retirement and succession plans that do not just retire you comfortably, they outlive you.',
    points: ['Pension structuring', 'Estate & succession plan', 'Generational wealth design'],
  },
];

const process = [
  { step: '01', title: 'Discover', body: 'We map your income, goals, risks and current portfolio. No assumptions.' },
  { step: '02', title: 'Design', body: 'I architect your MMH plan, Money Management, Mindset, Healing, across every asset class.' },
  { step: '03', title: 'Deploy', body: 'We execute together: insurance, MFs, pension, succession, all integrated.' },
  { step: '04', title: 'Defend', body: 'Quarterly reviews so your wealth compounds with your life, not against it.' },
];

const faqs = [
  { q: 'Who do you typically work with?', a: 'High-income professionals and doctors who earn well but want their wealth to grow with the same intensity.' },
  { q: 'Are you a product seller or an advisor?', a: 'A strategist. I architect systems. Products are chosen because they fit the system, never because of commissions.' },
  { q: 'What does engagement look like?', a: 'A discovery call, then a custom MMH plan, then ongoing quarterly reviews. You stay in control.' },
  { q: 'Are you certified?', a: 'Yes, IRDA & AMFI certified, with 19+ years of experience and 7,000+ hours of training.' },
  { q: 'Do you work with clients outside India?', a: 'Yes, including NRIs. The frameworks adapt to your jurisdiction and goals.' },
  { q: 'How quickly will I see results?', a: 'Clarity is immediate. Compounding is patient. Most clients feel in control within the first 30 days.' },
];

const whatsappTestimonials = [
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576221/whats_app_testimoney_Pratibha_wtf3vo.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576220/testimony_moses_p3o7oe.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576220/Binal_gratitude_affirmations_tlpwp7.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576219/testimoney_gratitude_pfhij6.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576219/testimony_chhaya_vdwxlv.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576218/Vinitha_vjrink.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576217/Gunjan_hlj0ql.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576217/multi_billionair_wpwzz6.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576217/Darshana_beht3h.jpg',
];

const trustpilotReviews = [
  {
    name: "Dr. Suresh Kuma",
    role: "Verified Review",
    rating: 5,
    date: "June 2026",
    quote:
      "I interacted with ms. Suman when she explained on the topic of financial planning and Wealth management very clearly and in detail. I feel any busy person with no time for DIY will benefit enormously from the structured plans an advice she offers.",
  },
  {
    name: "Bharati Kolluri",
    role: "Verified Review",
    rating: 5,
    date: "2025",
    quote:
      "It's a wonderful experience listening to her and learning from her. She is blessed soul with such positive vibes.. please don't miss any of her sessions be it manifestation money or meditation you gonna miss a golden opportunity. Best wishes and more power to do. Stay blessed Suman ji.",
  },
  {
    name: "Rashmi Gajaralwar",
    role: "Verified Review",
    rating: 5,
    date: "2024",
    quote:
      "She made us understand the need of connecting with our loved ones who are no more with us and let go of any grudges or ill thoughts we harboured about them. Accept their gifts and be thankful to them and the universe and cut off the negative ties for an enriched life.",
  },
];

const videoTestimonials = [
  'https://res.cloudinary.com/dzq2acoyj/video/upload/v1784578377/Client_Getting_Breakthrough_of_Limitations_-_Suman_Manjrekar_1080p_ipfr33.mp4',
  'https://res.cloudinary.com/dzq2acoyj/video/upload/v1784578357/I_Tried_Money_Manifestation_Techniques_-_Suman_Manjrekar_1080p_zfifc2.mp4',
  'https://res.cloudinary.com/dzq2acoyj/video/upload/v1784578376/Why_Santosh_Can_t_Stop_Talking_About_This_-_Suman_Manjrekar_1080p_vgy1nh.mp4',
];

const tabs = [
  { id: 'whatsapp' as const, label: 'WhatsApp', icon: MessageCircle },
  { id: 'video' as const, label: 'Video', icon: Play },
  { id: 'trustpilot' as const, label: 'Trustpilot', icon: Star },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function VideoTestimonialCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative aspect-[9/16] max-h-[70vh] md:max-h-none rounded-2xl overflow-hidden bg-ink border border-violet-line shadow-sm mx-auto w-full">
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        aria-label={playing ? `Pause video testimonial ${index + 1}` : `Play video testimonial ${index + 1}`}
        onClick={togglePlay}
        className="absolute inset-0 z-10 grid place-items-center group cursor-pointer"
      >
        {!playing && (
          <span className="w-16 h-16 rounded-full bg-white/95 text-violet grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 fill-current ml-1" />
          </span>
        )}
      </button>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.button
      onClick={() => setOpen(!open)}
      whileHover={{ y: -2 }}
      className="w-full text-left p-6 rounded-2xl bg-white border border-violet-line hover:border-violet transition-colors"
    >
      <div className="flex items-center justify-between gap-6">
        <span className="text-lg">{q}</span>
        <ChevronDown className={`w-5 h-5 text-violet shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-ink-soft leading-relaxed mt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Masterclass() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'video' | 'trustpilot'>('whatsapp');

  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* HERO , bottom-text editorial overlay */}
      <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#E8E4DC]">
        {/* Anchored below fixed header + object-top so her head isn't cropped */}
        <img
          src={portraitImg}
          alt="Suman Manjrekar"
          className="absolute left-0 right-0 bottom-0 top-16 md:top-[4.5rem] w-full object-cover object-[75%_0%] sm:object-[center_0%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 top-16 md:top-[4.5rem]"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,11,46,0.12) 0%, transparent 25%, transparent 55%, rgba(15,11,46,0.35) 90%, rgba(15,11,46,0.45) 100%)',
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
            The Masterclass
          </motion.div>

          <div className="mt-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] sm:leading-[1]"
              style={{ color: '#0F0B2E' }}
            >
              Built around<br />
              <span style={{ color: '#770a7d' }} className="italic">your life stage</span>,<br />
              not a sales script.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 sm:mt-10 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl"
              style={{ color: '#4A4566' }}
            >
              Four pillars. One integrated system. Every move aligned to your MMH plan,
              Money Management, Mindset, Healing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Button href="https://study.successwithsuman.com/l/f61fd9d4a1" size="lg">
                Book Your Seat <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="/"
                variant="secondary"
                size="lg"
              >
                Meet Suman
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS WITH TABS */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">Real Voices</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05]">
              Don't take my word.<br /> Take <span className="text-violet">theirs</span>.
            </h2>
          </motion.div>

          <motion.div className="flex justify-center mb-8 sm:mb-10" {...fadeUp}>
            <div className="inline-flex w-full max-w-md sm:w-auto sm:max-w-none p-1 sm:p-1.5 rounded-full bg-white border border-violet-line">
              {tabs.map(t => {
                const Icon = t.icon;
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className="relative flex-1 sm:flex-none px-3 sm:px-5 md:px-7 py-2.5 rounded-full text-xs sm:text-sm transition-colors"
                  >
                    {active && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 bg-violet rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative inline-flex items-center justify-center gap-1.5 sm:gap-2 ${active ? 'text-white' : 'text-ink-soft hover:text-ink'}`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span className="truncate">{t.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'whatsapp' && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <WhatsAppTestimonialsCarousel />
              </motion.div>
            )}

            {activeTab === 'video' && (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-sm md:max-w-none mx-auto"
              >
                {videoTestimonials.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <VideoTestimonialCard src={src} index={i} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'trustpilot' && (
              <motion.div
                key="trustpilot"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid md:grid-cols-3 gap-5 mb-8">
                  {trustpilotReviews.map((t, i) => (
                    <motion.figure
                      key={t.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="p-7 rounded-2xl bg-white border border-violet-line flex flex-col"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-7 h-7 grid place-items-center ${idx < t.rating ? 'bg-[#00B67A]' : 'bg-ink-mute/20'}`}
                          >
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        ))}
                      </div>
                      <blockquote className="text-ink leading-relaxed flex-1">"{t.quote}"</blockquote>
                      <figcaption className="mt-6 pt-5 border-t border-violet-line flex items-center justify-between">
                        <div>
                          <div className="text-sm">{t.name}</div>
                          <div className="text-xs text-ink-mute">{t.role} · {t.date}</div>
                        </div>
                        <span className="font-mono text-xs tracking-widest text-[#00B67A]">TRUSTPILOT</span>
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.trustpilot.com/review/successwithsuman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#00B67A]/30 bg-white hover:border-[#00B67A] hover:shadow-[0_8px_24px_-8px_rgba(0,182,122,0.3)] transition-all group"
                  >
                    <span className="flex items-center gap-1 text-[#00B67A]">
                      {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                    </span>
                    <span className="text-ink-soft text-sm">Read all reviews on</span>
                    <span className="text-[#00B67A] font-semibold">Trustpilot</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00B67A]" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <motion.div className="md:col-span-5" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">The Real Problem</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Earning more is not the same as <span className="text-violet">building wealth</span>.
            </h2>
          </motion.div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {pains.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-violet-line"
              >
                <span className="text-3xl text-violet">×</span>
                <p className="mt-3 text-ink leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MMH FORMULA */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">The Signature System</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1.05]">
              The <span className="text-violet">MMH</span> Formula
            </h2>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl mx-auto">
              A simple, repeatable framework distilled from 19+ years and 7,000+ training hours.
              Three moves. Infinite compounding.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { letter: 'M', word: 'Money Management', body: 'Tax-aware allocations, cash-flow architecture and bulletproof portfolio design that turns income into lasting wealth.', accent: 'bg-violet text-white' },
              { letter: 'M', word: 'Mindset', body: 'The beliefs and behaviours that quietly govern every rupee. Rebuild them and your numbers follow.', accent: 'bg-violet-soft text-violet-deep' },
              { letter: 'H', word: 'Healing', body: 'Repair the money wounds, fear, guilt, scarcity, so wealth feels safe to build, hold and pass on.', accent: 'bg-ink text-white' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-2xl border border-violet-line bg-white"
              >
                <div className={`w-20 h-20 rounded-2xl ${m.accent} grid place-items-center text-4xl tracking-tighter mb-6`}>
                  {m.letter}
                </div>
                <div className="font-mono text-xs tracking-widest text-ink-mute mb-2">STEP 0{i + 1}</div>
                <h3 className="text-3xl tracking-tighter mb-3">{m.word}</h3>
                <p className="text-ink-soft leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" size="lg">Explore Services <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-14" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">The Four Pillars</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05]">What I help you with.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, tag, body, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group p-7 sm:p-10 rounded-2xl bg-white border border-violet-line hover:border-violet transition-all hover:shadow-[0_20px_50px_-20px_rgba(91,75,255,0.25)]"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-violet-soft text-violet grid place-items-center group-hover:bg-violet group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-violet bg-violet-soft px-3 py-1 rounded-full uppercase">{tag}</span>
                </div>
                <h3 className="text-3xl tracking-tighter mb-3">{title}</h3>
                <p className="text-ink-soft leading-relaxed mb-6">{body}</p>
                <ul className="space-y-2 border-t border-violet-line pt-5">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink">
                      <Check className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-14" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">How We Work</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05]">A four-step path<br />from chaos to clarity.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-white border border-violet-line"
              >
                <div className="font-mono text-xs tracking-widest text-violet">{p.step}</div>
                <div className="text-2xl tracking-tighter mt-3 mb-3">{p.title}</div>
                <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <motion.div className="md:col-span-5" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">The Proof</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              19+ years.<br />2,095+ professionals.<br /><span className="text-violet">One quiet system.</span>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              The MMH Formula isn't theory. It's the playbook thousands of professionals already trust to
              protect, multiply and pass on what they earn.
            </p>
          </motion.div>
          <div className="md:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {[
              { to: 2095, suffix: '+', separator: true, l: 'Professionals guided' },
              { to: 7000, suffix: '+', separator: true, l: 'Hours of training' },
              { to: 19, suffix: '+', l: 'Years of experience' },
              { to: 4.4, decimals: 1, suffix: '★', l: 'Trustpilot rating' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 md:p-8 rounded-2xl bg-violet text-white"
              >
                <CountUp
                  to={s.to}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  separator={s.separator}
                  className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white block"
                />
                <div className="mt-2 text-white/80 text-xs sm:text-sm leading-snug">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">FAQ</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05]">Questions, answered.</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* INFINITE WEALTH HUB */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">Community</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05]">
              Become a part of <span className="text-violet">Infinite Wealth Hub</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-2xl mx-auto">
              A curated community of high-income professionals and doctors building wealth the right way, together. Inside: live sessions, frameworks, accountability, and direct access to Suman.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Infinite Wealth Hub */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="relative p-8 sm:p-10 rounded-3xl border border-violet bg-violet text-white flex flex-col"
            >
              <div className="font-mono text-xs tracking-widest text-white/70 uppercase mb-2">Community Access</div>
              <h3 className="text-3xl tracking-tighter mb-4">Infinite Wealth Hub</h3>
              <ul className="space-y-3 flex-1 border-t border-white/20 pt-6 mt-2 mb-8">
                {[
                  'Live group sessions with Suman',
                  'The full MMH framework, step by step',
                  'Weekly wealth-building insights',
                  'Community of professionals like you',
                  'Templates, tools and portfolio trackers',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white text-violet grid place-items-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://study.successwithsuman.com/l/daec3d3416"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-violet rounded-full hover:bg-violet-soft transition-all font-medium shadow-[0_8px_24px_-8px_rgba(255,255,255,0.4)]"
              >
                Join Infinite Wealth Hub <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 1-2-1 */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-8 sm:p-10 rounded-3xl border border-ink bg-ink text-white flex flex-col"
            >
              <div className="font-mono text-xs tracking-widest text-white/50 uppercase mb-2">Private Advisory</div>
              <h3 className="text-3xl tracking-tighter mb-4 text-white">Work 1-2-1 with Suman</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                For professionals who want a dedicated Personal CFO. Suman works directly with a limited number of clients each year, building fully bespoke MMH wealth plans, reviewing every rupee and every policy.
              </p>
              <ul className="space-y-3 flex-1 border-t border-white/15 pt-6 mt-2 mb-8">
                {[
                  'Fully custom MMH wealth blueprint',
                  'Personal CFO, monthly deep dives',
                  'Insurance, MF, tax and succession',
                  'Priority WhatsApp access',
                  'Quarterly in-depth strategy reviews',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-violet text-white grid place-items-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://study.successwithsuman.com/l/f61fd9d4a1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-violet text-white rounded-full hover:bg-violet-deep transition-all font-medium shadow-[0_8px_24px_-8px_rgba(91,75,255,0.5)]"
              >
                Book a Discovery Call <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <motion.div
          className="max-w-7xl mx-auto rounded-[2rem] bg-ink text-white p-8 sm:p-12 md:p-20 grid md:grid-cols-12 gap-10 items-center relative overflow-hidden"
          {...fadeUp}
        >
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-violet/40 rounded-full blur-3xl" />
          <div className="md:col-span-8 relative">
            <div className="font-mono text-xs tracking-widest text-violet-soft uppercase mb-4">Ready When You Are</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05] text-white">
              Let's architect your wealth, <span className="text-violet-soft">on purpose</span>.
            </h2>
          </div>
          <div className="md:col-span-4 relative flex md:justify-end">
            <Button href="https://study.successwithsuman.com/l/f61fd9d4a1" size="lg" className="!bg-white !text-violet hover:!bg-violet-soft">
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function useCarouselPerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return perView;
}

function WhatsAppTestimonialsCarousel() {
  const total = whatsappTestimonials.length;
  const perView = useCarouselPerView();
  // Triple the list so wrapping always has matching slides on both sides
  const loopSlides = [
    ...whatsappTestimonials,
    ...whatsappTestimonials,
    ...whatsappTestimonials,
  ];

  const [index, setIndex] = useState(total); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    setAnimate(false);
    setIndex(total);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [perView, total]);

  const displayIndex = ((index % total) + total) % total;

  const snapIfNeeded = useCallback(() => {
    const current = indexRef.current;
    if (current >= total * 2) {
      setAnimate(false);
      setIndex(current - total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else if (current < total) {
      setAnimate(false);
      setIndex(current + total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  }, [total]);

  const goTo = useCallback((nextIndex: number) => {
    setAnimate(true);
    setIndex(nextIndex);
  }, []);

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    snapIfNeeded();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${index * (100 / perView)}%)`,
            transition: animate
              ? 'transform 0.65s cubic-bezier(0.32, 0.72, 0, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopSlides.map((src, i) => (
            <div
              key={`${i}-${src}`}
              className="px-2"
              style={{
                flex: `0 0 ${100 / perView}%`,
                maxWidth: `${100 / perView}%`,
              }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-violet-line shadow-sm bg-[#f5c4b5]">
                <img
                  src={src}
                  alt={`WhatsApp testimonial ${(i % total) + 1}`}
                  draggable={false}
                  className="w-full h-full object-contain select-none"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-ink grid place-items-center shadow-lg border border-violet-line transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-ink grid place-items-center shadow-lg border border-violet-line transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {whatsappTestimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(total + i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === displayIndex ? 'w-8 bg-violet' : 'w-3 bg-violet-line hover:bg-violet/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
