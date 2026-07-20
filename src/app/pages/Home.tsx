import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowRight, ArrowUpRight, ArrowLeft, Star, Shield, TrendingUp, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { CountUp } from '../components/CountUp';

import heroPortrait from '../../imports/hero_gpt.png';
import sittingPortrait from '../../imports/aboutinner_1.png';
import gallery1 from '../../imports/image-1.png';
import gallery2 from '../../imports/image-2.png';
import gallery3 from '../../imports/image-3.png';
import gallery4 from '../../imports/image-4.png';
import gallery5 from '../../imports/_A740288.JPG';
import newPhoto1 from '../../imports/DSCF9246.jpg';
import newPhoto2 from '../../imports/DSCF9287.jpg';
import newPhoto3 from '../../imports/DSCF9295.jpg';
import { useEffect, useState, useCallback, useRef, type TransitionEvent } from 'react';

import ebook1 from '../../imports/ebook_1.jpeg';
import ebook2 from '../../imports/ebook_2.jpeg';

const aboutCarouselImages = [ newPhoto1, newPhoto2, newPhoto3, gallery1, gallery2, gallery5];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const stats = [
  { to: 19, suffix: '+', label: 'Years guiding wealth' },
  { to: 2095, suffix: '+', separator: true, label: 'Professionals advised' },
  { to: 7000, suffix: '+', separator: true, label: 'Hours of training' },
  { to: 100, prefix: 'Top ', label: 'Speakers of India' },
];

const pains = [
  { n: '01', t: 'Your salary stops when you do, does your wealth?' },
  { n: '02', t: 'Policies you own but cannot explain' },
  { n: '03', t: 'No protection plan if something goes wrong tomorrow' },
  { n: '04', t: 'Investing that feels like guesswork, not a system' },
];

const pillars = [
  {
    n: '01',
    title: 'Bulletproof systems',
    body: 'Wealth strategies designed to protect, multiply and outlive you, not chase returns.',
  },
  {
    n: '02',
    title: 'Personal CFO approach',
    body: 'I track inflows, optimise allocations, and decide like a CFO would for a business.',
  },
  {
    n: '03',
    title: 'Real-world clarity',
    body: 'No jargon. Frameworks built from 7,000+ training hours and 19+ years of practice.',
  },
  {
    n: '04',
    title: 'Built to compound',
    body: 'Repeatable systems so your wealth grows even when you are not watching it.',
  },
];

const testimonials = [
  {
    name: "Dr. Suresh Kumar",
    role: "Cardiologist · Mumbai",
    quote:
      "I interacted with ms. Suman when she explained on the topic of financial planning and Wealth management very clearly and in detail. I feel any busy person with no time for DIY will benefit enormously from the structured plans an advice she offers.",
  },
  {
    name: "Bharati Kolluri",
    role: "Tech Director · Bengaluru",
    quote:
      "It's a wonderful experience listening to her and learning from her. She is blessed soul with such positive vibes.. please don't miss any of her sessions be it manifestation money or meditation you gonna miss a golden opportunity. Best wishes and more power to do. Stay blessed Suman ji.",
  },
  {
    name: "Rashmi Gajaralwar",
    role: "Homemaker· Pune",
    quote:
      "She made us understand the need of connecting with our loved ones who are no more with us and let go of any grudges or ill thoughts we harboured about them. Accept their gifts and be thankful to them and the universe and cut off the negative ties for an enriched life.",
  },
];

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* HERO , bottom-text editorial overlay */}
      <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#E8E4DC]">
        {/* Anchored below fixed header + object-top so her head isn't cropped */}
        <img
          src={heroPortrait}
          alt="Suman Manjrekar"
          className="absolute left-0 right-0 bottom-0 top-16 md:top-[4.5rem] w-full object-cover object-[75%_0%] sm:object-[center_0%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 top-16 md:top-[4.5rem]"
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
            className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.3em] uppercase"
            style={{ color: '#0F0B2E' }}
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-px" style={{ background: 'rgba(15,11,46,0.5)' }} />
              Personal CFO · Wealth Coach
            </div>
            
          </motion.div>

          <div className="mt-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1]"
              style={{ color: '#0F0B2E' }}
            >
              You built the career.<br />
              <span style={{ color: '#770a7d' }} className="italic">Now build the wealth</span><br />
              that outlives it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 text-base md:text-xl leading-relaxed max-w-2xl"
              style={{ color: '#4A4566' }}
            >
              I work as your Personal CFO, building bulletproof wealth systems for high-income
              professionals and doctors, designed to protect, multiply and outlive your earnings.
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
              <Button
                href="/masterclass"
                variant="secondary"
                size="lg"
              >
                Explore Masterclass
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS , clean typographic row */}
      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-violet-line border border-violet-line rounded-3xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white px-6 md:px-8 py-10 md:py-14"
              >
                <CountUp
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  separator={s.separator}
                  className="text-4xl md:text-6xl tracking-tighter text-ink block"
                />
                <div className="mt-4 font-mono text-[10px] tracking-[0.25em] text-ink-mute uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SUMAN , title + video */}
      <section className="relative overflow-hidden bg-white px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div aria-hidden className="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-violet-tint blur-3xl opacity-60" />
        <div aria-hidden className="absolute -bottom-40 -left-32 w-[24rem] h-[24rem] rounded-full bg-violet-soft blur-3xl opacity-50" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
          >
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-violet" />
              Why Suman
              <span className="w-10 h-px bg-violet" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-[1.05] text-ink">
              Not just an advisor.{' '}
              <span className="text-violet italic">A quiet architect</span> of legacy wealth.
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
              Nineteen years inside the financial industry, 7,000+ training hours, 2,095+
              professionals guided. Hear it in Suman's own words.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,11,46,0.35)] bg-ink"
          >
            <div className="relative aspect-video w-full">
              <img
                src={heroPortrait}
                alt="Suman Manjrekar"
                className="absolute inset-0 w-full h-full object-cover object-[75%_20%] sm:object-[center_20%] opacity-90"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <button
                type="button"
                aria-label="Play video"
                className="absolute inset-0 grid place-items-center group"
              >
                <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
                  <span className="ml-1 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-violet" />
                </span>
              </button>
              <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 text-white">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
                  Watch · 02:14
                </div>
                <div className="mt-2 text-lg md:text-xl tracking-tight">
                  A two-minute introduction from Suman.
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/about" size="lg">
              Read the full story <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Work with Suman
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES , what we do snapshot */}
      <section className="px-5 sm:px-6 md:px-10 py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20" {...fadeUp}>
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
                What We Do
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-ink">
                Three jobs of money. <span className="text-violet">One plan.</span>
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-ink-soft leading-relaxed text-base md:text-lg">
              Every rupee you earn has to do one of three things: protect you, grow for you, or carry
              your legacy forward. We architect all three together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: Shield,
                step: '01',
                title: 'Protect',
                tagline: 'Cover what you cannot afford to lose.',
                items: ['Life Insurance', 'Health Insurance', 'Personal Accident', 'Travel Insurance', 'Mediclaim', 'Income Protection', 'Business Insurance'],
              },
              {
                icon: TrendingUp,
                step: '02',
                title: 'Grow',
                tagline: 'Compound wealth with intent, not noise.',
                items: ['Wealth Creation', 'Investing', 'Mutual Funds', 'Equity & ETFs', 'Bonds & FDs', 'PMS', 'NPS'],
              },
              {
                icon: Compass,
                step: '03',
                title: 'Plan',
                tagline: 'Design the life and legacy you want.',
                items: ["Children's Future", 'Retirement', 'Inheritance', 'Loan Against Security', 'Demat', 'Estate Planning'],
              },
            ].map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl bg-white border border-violet-line p-7 sm:p-8 md:p-9 flex flex-col"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-violet-soft text-violet grid place-items-center">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.3em] text-ink-mute uppercase">
                    {group.step}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl tracking-tighter text-ink mb-3">{group.title}</h3>
                <p className="text-ink-soft leading-relaxed mb-6">{group.tagline}</p>
                <ul className="space-y-2.5 mt-auto pt-6 border-t border-violet-line">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button href="/services" size="lg">
              Explore all services <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM , minimal split */}
      <section className="px-5 sm:px-6 md:px-10 py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div className="md:col-span-5" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              The Real Problem
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-ink">
              Earning more is not the same as <span className="text-violet">building wealth</span>.
            </h2>
            <p className="mt-8 text-ink-soft leading-relaxed text-base md:text-lg max-w-md">
              Most high earners are one bad year away from financial chaos. Income is not a
              system. Strategy is.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            {pains.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-baseline gap-8 py-7 md:py-8 border-b border-violet-line first:border-t"
              >
                <div className="font-mono text-xs tracking-[0.25em] text-violet shrink-0 w-8">
                  {p.n}
                </div>
                <h3 className="text-xl md:text-3xl tracking-tight text-ink">{p.t}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT , single portrait, calm split */}
      <section className="px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div className="md:col-span-5" {...fadeUp}>
            <AboutCarousel />
          </motion.div>

          <motion.div className="md:col-span-7" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              About Suman
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] mb-8">
              I make your money <span className="text-violet">work harder</span> than you do.
            </h2>
            <div className="space-y-5 text-ink-soft leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                Most high-income professionals and doctors are great at earning, but struggle to
                make their wealth grow at the same pace. That is where I step in.
              </p>
              <p>
                I work like your <span className="text-ink">Personal CFO and Wealth Coach</span> ,
                tracking inflows, optimising allocations, and architecting bulletproof systems
                that protect, multiply and outlive you.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-violet-line">
              {[
                { v: 'IRDA', l: '& AMFI Certified' },
                { v: 'Top 100', l: 'Speakers of India' },
                { v: 'Author', l: 'Amazon Bestseller' },
              ].map((c, i) => (
                <div
                  key={c.v}
                  className={`flex flex-col justify-center gap-2 px-4 sm:px-5 md:px-6 py-7 md:py-8 ${
                    i > 0 ? 'border-l border-violet-line' : ''
                  }`}
                >
                  <div className="text-xl md:text-2xl tracking-tight leading-none">{c.v}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-ink-mute uppercase leading-none">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/about" variant="secondary" size="lg">
                Read the full story <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS , clean four-column with quiet portrait */}
      

      {/* BOOKS , bestseller + ebooks */}
      <section className="px-5 sm:px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-14 md:mb-20" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              Books & eBooks
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1]">
              The work, <span className="text-violet">in print.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                cover: 'https://m.media-amazon.com/images/I/611QB2h-2tL._SY466_.jpg',
                tag: 'Debut Book · 2021 · Amazon Bestseller',
                title: 'I Will Never Die',
                body: 'A complete guide to retirement, a must-read for every professional who wants to retire rich with safety and protection. Also covers the common mistakes people make while investing.',
                href: 'https://amzn.in/d/0j7pyzSC',
                cta: 'View on Amazon',
              },
              {
                cover: ebook1,
                tag: "Doctor's Guide · eBook",
                title: 'Healthy Finances, Wealthy Future',
                body: "A Doctor's guide to wealth creation in 10 simple steps. Doctors' careers peak after 35, making it crucial to reclaim lost years. A must-read for every medical professional.",
                href: 'https://study.successwithsuman.com/l/761127c3c3',
                cta: 'Get the Book',
              },
              {
                cover: ebook2,
                tag: 'For Every Working Individual · eBook',
                title: 'The Wealth Blueprint',
                body: 'Every working individual should read this. It decodes the formula for creating wealth and unlocks your inner state to sustain and grow the wealth flow.',
                href: 'https://study.successwithsuman.com/l/4680b1ea47',
                cta: 'Get the Book',
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-off-white rounded-3xl p-6 md:p-8 border border-violet-line flex flex-col"
              >
                <a
                  href={b.href}
                  target={b.href.startsWith('http') ? '_blank' : undefined}
                  rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block aspect-[3/4] rounded-2xl overflow-hidden bg-violet-tint shadow-[0_30px_60px_-20px_rgba(15,11,46,0.3)] mb-6"
                >
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                </a>
                <div className="font-mono text-[10px] tracking-[0.3em] text-violet uppercase mb-3">
                  {b.tag}
                </div>
                <h3 className="text-2xl tracking-tight mb-3 text-ink">{b.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">{b.body}</p>
                <Button href={b.href} variant="secondary" size="lg">
                  {b.cta} <ArrowUpRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS , quiet three-column */}
      <section className="bg-off-white px-5 sm:px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-3xl mb-16 md:mb-20" {...fadeUp}>
            <div className="font-mono text-[11px] tracking-[0.3em] text-violet uppercase mb-5">
              Client Stories
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1]">
              Quiet wealth. <span className="text-violet">Loud results.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-violet-line"
              >
                <div className="flex items-center gap-1 text-violet mb-6">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base md:text-lg text-ink leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>
                <figcaption className="pt-6 border-t border-violet-line">
                  <div className="text-sm">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-ink-mute uppercase mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center" {...fadeUp}>
            <a
              href="https://www.trustpilot.com/review/successwithsuman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-violet-line bg-white hover:border-violet hover:shadow-[0_8px_24px_-8px_rgba(91,75,255,0.25)] transition-all group"
            >
              <span className="flex items-center gap-1.5 text-[#00B67A]">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </span>
              <span className="text-ink-soft text-sm">Read more reviews on</span>
              <span className="text-[#00B67A] font-semibold tracking-tight group-hover:text-[#00965e] transition-colors">Trustpilot</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA , single calm violet block */}
      <section className="px-5 sm:px-6 md:px-10 py-24 md:py-32">
        <motion.div
          className="relative max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-violet text-white px-8 sm:px-14 md:px-24 py-20 md:py-32 text-center"
          {...fadeUp}
        >
          <div aria-hidden className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-deep blur-3xl opacity-40" />
          <div aria-hidden className="absolute -bottom-32 -left-24 w-[24rem] h-[24rem] rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl mx-auto">
            <div className="font-mono text-[11px] tracking-[0.3em] text-white/70 uppercase mb-6 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-white/40" />
              Your Next Move
              <span className="w-10 h-px bg-white/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-[1] text-white">
              Stop working for money.{' '}
              <span className="text-violet-soft italic">Start making money work for you.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/85 leading-relaxed mx-auto max-w-xl">
              Book a private strategy call. Walk away with clarity, whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="https://study.successwithsuman.com/l/f61fd9d4a1"
                size="lg"
                className="!bg-white !text-violet hover:!bg-violet-soft"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="/masterclass"
                variant="secondary"
                size="lg"
                className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10"
              >
                Explore Masterclass
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function AboutCarousel() {
  const total = aboutCarouselImages.length;
  // Clone last at start + first at end for a seamless circular loop
  const slides = [
    aboutCarouselImages[total - 1],
    ...aboutCarouselImages,
    aboutCarouselImages[0],
  ];

  const [position, setPosition] = useState(1); // first real slide
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const jumping = useRef(false);

  const displayIndex = position === 0 ? total - 1 : position === total + 1 ? 0 : position - 1;

  const goTo = useCallback((nextPos: number) => {
    if (jumping.current) return;
    setWithTransition(true);
    setPosition(nextPos);
  }, []);

  const next = useCallback(() => goTo(position + 1), [goTo, position]);
  const prev = useCallback(() => goTo(position - 1), [goTo, position]);

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;

    if (position === total + 1) {
      jumping.current = true;
      setWithTransition(false);
      setPosition(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          jumping.current = false;
        });
      });
    } else if (position === 0) {
      jumping.current = true;
      setWithTransition(false);
      setPosition(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          jumping.current = false;
        });
      });
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setWithTransition(true);
      setPosition((p) => p + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-violet-tint">
        <div
          className="flex h-full will-change-transform"
          style={{
            transform: `translateX(-${position * 100}%)`,
            transition: withTransition
              ? 'transform 0.65s cubic-bezier(0.32, 0.72, 0, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, i) => (
            <img
              key={`${i}-${typeof src === 'string' ? src : i}`}
              src={src}
              alt={`Suman Manjrekar ${displayIndex + 1}`}
              draggable={false}
              className="h-full w-full min-w-full flex-shrink-0 object-cover object-top select-none"
            />
          ))}
        </div>
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-ink grid place-items-center shadow-lg backdrop-blur transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-ink grid place-items-center shadow-lg backdrop-blur transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="absolute left-5 bottom-5 font-mono text-[10px] tracking-[0.3em] text-white uppercase">
          {String(displayIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {aboutCarouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === displayIndex ? 'w-8 bg-violet' : 'w-3 bg-violet-line hover:bg-violet/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
