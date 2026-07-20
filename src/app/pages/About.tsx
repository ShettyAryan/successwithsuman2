import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { CountUp } from '../components/CountUp';
import { ArrowRight, BadgeCheck, Mic, BookOpen, GraduationCap, Trophy, Star } from 'lucide-react';

const heroPortrait =
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784576290/ChatGPT_Image_Jul_21_2026_01_07_37_AM_dcbx1a.png';

const galleryImages = [
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581779/IMG_20170815_101942_xx0ggy.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581775/IMG_20210221_115347__01_eyhilc.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581774/20240713_204138_yqkryz.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581774/IMG_20191009_133019_yue4ow.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581772/SGR3_mqsbzg.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581766/IMG_20190510_131949_ow9tg5.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581762/IMG-20190430-WA0004_cwa3ml.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581758/I_can_coach_1_lbwizv.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581758/0K2A8456_t57vlm.webp',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581753/IMG-20180813-WA0069_wgx92f.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581686/sgr4_wn6ibd.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581688/IMG_20180820_172308_wzogik.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581678/IMG_20230824_155014_lbyiic.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581657/IMG_20170811_184026_jadcim.jpg',
  'https://res.cloudinary.com/dzq2acoyj/image/upload/v1784581655/I_can_coach_2_lrqelf.jpg',
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const timeline = [
  { year: '2006', title: 'Began the journey', body: 'Started in financial services, learning the trade from the ground up, one family at a time.' },
  { year: '2011', title: 'Earned the certifications', body: 'IRDA and AMFI certified, with a focus on protection-first wealth design.' },
  { year: '2017', title: 'Built the MMH Formula', body: 'Distilled 11 years of practice into a three-pillar framework: Money Management, Mindset, Healing.' },
  { year: '2022', title: 'Published the bestseller', body: '"I Will Never Die" hit Amazon shelves. A philosophy of legacy-first wealth, in print.' },
  { year: '2025', title: 'Top 100 Speakers of India', body: 'Recognised among India\'s top voices on personal finance, wealth and money mindset.' },
  { year: 'Today', title: '2,095+ professionals served', body: 'A growing ecosystem of doctors, founders and high-income professionals running on MMH.' },
];

const credentials = [
  { icon: BadgeCheck, label: 'IRDA & AMFI', sub: 'Certified Advisor' },
  { icon: GraduationCap, label: '7,000+ hrs', sub: 'Of training' },
  { icon: Mic, label: 'Top 100', sub: 'Speakers of India' },
  { icon: BookOpen, label: 'Bestselling', sub: 'Author, Amazon' },
  { icon: Trophy, label: '19+ years', sub: 'In the field' },
  { icon: Star, label: '4.4★', sub: 'Trustpilot rating' },
];

const values = [
  { title: 'Strategy first.', body: 'Every recommendation is engineered around your life, never around a commission ladder.' },
  { title: 'Clarity over cleverness.', body: 'No jargon, no theatre. The simplest plan that compounds is the best plan.' },
  { title: 'The whole person.', body: 'Money is mathematics, mindset and memory. I refuse to fix only one of the three.' },
  { title: 'Built to outlive.', body: 'A plan that retires you comfortably is fine. A plan that outlives you is the goal.' },
];

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* HERO , bottom-text editorial overlay */}
      <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#C5C2BE]">
        {/* Mobile: header clearance + subject crop. Desktop: previous scaled framing preserved */}
        <img
          src={heroPortrait}
          alt="Suman Manjrekar"
          className="absolute left-0 right-0 bottom-0 top-16 w-full object-cover object-[80%_18%] sm:inset-0 sm:top-0 sm:object-[65%_35%] sm:scale-[1.25] sm:origin-[65%_38%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 top-16 sm:top-0"
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
            style={{ color: '#FFFFFF' }}
          >
            <span className="w-8 sm:w-10 h-px" style={{ background: 'rgba(255,255,255,0.7)' }} />
            About Suman
          </motion.div>

          <div className="mt-55 md:mt-auto max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] sm:leading-[1]"
              style={{ color: '#0F0B2E' }}
            >
              Personal CFO.<br />
              Wealth Coach.<br />
              <span style={{ color: '#770a7d' }} className="italic">Author.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 sm:mt-10 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl"
              style={{ color: '#FFFFFF' }}
            >
              Nineteen years inside the financial industry taught me one thing: the math is not
              what fails people. The story they tell themselves about money is. So I built a
              framework that fixes both, MMH.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Button href="/contact" size="lg">
                Work With Me <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore the MMH Framework
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14">
          <motion.div className="md:col-span-5" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">My Story</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Why I do this work.
            </h2>
          </motion.div>
          <motion.div className="md:col-span-7 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed" {...fadeUp}>
            <p>
              I started in financial services almost two decades ago, watching brilliant doctors, founders and
              professionals earn beautifully, and still feel quietly anxious about money.
            </p>
            <p>
              The plans on paper looked fine. Yet they kept getting sabotaged, by fear, by old family stories, by a
              quiet belief that wealth was for someone else. The math was solvable. The story was not, until we worked
              on it directly.
            </p>
            <p className="text-ink">
              That is when MMH was born. <span className="text-violet">Money Management for the architecture, Mindset for the operating system, Healing for the wounds underneath.</span> Three pillars, working at once.
            </p>
            <p>
              Today I work as a Personal CFO and Wealth Coach to high-income professionals, doctors and founders, with
              the same belief I started with: making money is the easy part. Keeping it, growing it, protecting it,
              that is where freedom lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY MARQUEE */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 mb-10 md:mb-14">
          <motion.div className="max-w-2xl" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">In The Room</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Moments from the <span className="text-violet">work.</span>
            </h2>
          </motion.div>
        </div>
        <GalleryMarquee />
      </section>

      {/* CREDENTIALS */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-10 md:mb-14 max-w-2xl" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">Credentials</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              The receipts <span className="text-violet">behind the work</span>.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {credentials.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-violet-tint border border-violet-line"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-violet grid place-items-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-ink tracking-tight text-sm sm:text-base truncate">{label}</div>
                  <div className="text-xs text-ink-soft">{sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-10 md:mb-14 max-w-2xl" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">The Journey</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Two decades, in <span className="text-violet">six chapters</span>.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-violet-line md:-translate-x-1/2" />
            <div className="space-y-6 md:space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative grid md:grid-cols-2 md:gap-12 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <div className="font-mono text-xs tracking-widest text-violet">{t.year}</div>
                    <div className="text-2xl tracking-tighter mt-2 mb-2">{t.title}</div>
                    <p className="text-sm text-ink-soft leading-relaxed">{t.body}</p>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-violet ring-4 ring-violet-soft md:-translate-x-1/2" />
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-10 md:mb-14 max-w-2xl" {...fadeUp}>
            <div className="font-mono text-xs tracking-widest text-violet uppercase mb-4">What I Stand For</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter leading-tight">
              Four lines I will <span className="text-violet">not cross</span>.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-violet-line"
              >
                <div className="text-2xl tracking-tighter mb-3">{v.title}</div>
                <p className="text-ink-soft leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="px-5 sm:px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {[
            { to: 2095, suffix: '+', separator: true, l: 'Professionals guided' },
            { to: 19, suffix: '+', l: 'Years of experience' },
            { to: 7000, suffix: '+', separator: true, l: 'Hours of training' },
            { to: 4.4, decimals: 1, suffix: '★', l: 'Trustpilot rating' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-violet-tint border border-violet-line"
            >
              <CountUp
                to={s.to}
                decimals={s.decimals}
                suffix={s.suffix}
                separator={s.separator}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter text-violet-deep block"
              />
              <div className="mt-2 text-ink-soft text-xs sm:text-sm leading-snug">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 md:px-10 py-16 md:py-24">
        <motion.div className="max-w-7xl mx-auto rounded-[2rem] bg-violet text-white p-8 sm:p-12 md:p-20 text-center relative overflow-hidden" {...fadeUp}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-[1.05] max-w-3xl mx-auto text-white">
              Want me as your Personal CFO?
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl mx-auto">
              Book a private strategy call. Walk away with clarity, whether or not we work together.
            </p>
            <div className="mt-10">
              <Button href="https://study.successwithsuman.com/l/f61fd9d4a1" variant="secondary" size="lg" className="!bg-white !text-violet hover:!bg-violet-soft">
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

function GalleryMarquee() {
  const [pausedRow, setPausedRow] = useState<'a' | 'b' | null>(null);
  const mid = Math.ceil(galleryImages.length / 2);
  const rowA = galleryImages.slice(0, mid);
  const rowB = galleryImages.slice(mid);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  const mask =
    'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)';

  return (
    <div className="space-y-4 md:space-y-5">
      <div
        className="overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        onMouseEnter={() => setPausedRow('a')}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div
          className="flex w-max gap-4 md:gap-5 py-1"
          style={{
            animation: 'gallery-marquee 55s linear infinite',
            animationPlayState: pausedRow === 'a' ? 'paused' : 'running',
          }}
        >
          {loopA.map((src, i) => (
            <GalleryMarqueeCard key={`a-${i}`} src={src} index={i % rowA.length} />
          ))}
        </div>
      </div>

      <div
        className="overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        onMouseEnter={() => setPausedRow('b')}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div
          className="flex w-max gap-4 md:gap-5 py-1"
          style={{
            animation: 'gallery-marquee-reverse 65s linear infinite',
            animationPlayState: pausedRow === 'b' ? 'paused' : 'running',
          }}
        >
          {loopB.map((src, i) => (
            <GalleryMarqueeCard key={`b-${i}`} src={src} index={i % rowB.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryMarqueeCard({ src, index }: { src: string; index: number }) {
  return (
    <div className="relative h-44 sm:h-56 md:h-72 w-[14rem] sm:w-[18rem] md:w-[24rem] shrink-0 rounded-2xl overflow-hidden bg-violet-tint border border-violet-line shadow-[0_12px_40px_-20px_rgba(15,11,46,0.25)]">
      <img
        src={src}
        alt={`Gallery moment ${index + 1}`}
        draggable={false}
        className="w-full h-full object-cover select-none"
        loading="lazy"
      />
    </div>
  );
}
