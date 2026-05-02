import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineCpuChip,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineHandRaised,
  HiOutlineCurrencyDollar,
  HiOutlinePresentationChartLine,
  HiOutlineMagnifyingGlass,
  HiOutlineLightBulb,
  HiOutlineArrowTrendingUp,
  HiOutlineSparkles,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HeroBg3D from '../components/HeroBg3D.jsx';
import ParallaxSection from '../components/ParallaxSection.jsx';

/* The three roles TRN plays — Fund · Investor · Co-Builder */
const roles = [
  {
    icon: HiOutlineCurrencyDollar,
    label: 'Fund',
    copy: 'We deploy capital from idea to scale — pre-seed, seed, and bridge rounds tailored for hardware-heavy robotics ventures.',
  },
  {
    icon: HiOutlinePresentationChartLine,
    label: 'Investor',
    copy: 'We bring a network of robotics-focused VCs, strategic LPs, and corporate partners ready to fuel your next round.',
  },
  {
    icon: HiOutlineHandRaised,
    label: 'Co-Builder',
    copy: 'We embed as technical co-founders — building the prototype, hiring the team, shipping the first units beside you.',
  },
];

/* What TRN brings to every venture */
const offerings = [
  {
    icon: HiOutlineBeaker,
    title: 'Robotics Lab Access',
    description:
      'Industrial-grade hardware bay, motion capture, ROS 2 environments, and rapid prototyping equipment. Build real systems — not just slide decks.',
    tags: ['ROS 2', 'Prototyping', 'Hardware'],
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AI & Simulation Stack',
    description:
      'GPU clusters, Isaac Sim and Gazebo environments, and pre-built ML pipelines. Train policies, validate edge cases, ship intelligent systems faster.',
    tags: ['GPU', 'Isaac Sim', 'ML Ops'],
  },
  {
    icon: HiOutlineBanknotes,
    title: 'Venture Capital',
    description:
      'Pre-seed and seed checks from our own studio fund, plus warm intros to robotics-focused VCs and strategic corporate investors when you scale.',
    tags: ['Pre-seed', 'Seed', 'VC Network'],
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Embedded Co-Founders',
    description:
      'Senior roboticists, AI researchers, and operators who plug into your team — not as advisors, but as co-builders shipping alongside you.',
    tags: ['Technical', 'Operators', 'Hands-on'],
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Trusted Partner Network',
    description:
      'Pre-vetted suppliers, contract manufacturers, system integrators, legal, IP counsel, and pilot customers ready to de-risk your biggest assumptions.',
    tags: ['Manufacturers', 'Pilots', 'Suppliers'],
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Go-to-Market Engine',
    description:
      'From first pilot deployment to multi-unit rollouts. We open doors, structure procurement, and help you land enterprise customers.',
    tags: ['Pilots', 'Procurement', 'Sales'],
  },
];

/* The 4-stage venture-building process */
const processStages = [
  {
    step: '01',
    icon: HiOutlineMagnifyingGlass,
    title: 'Discovery',
    copy: 'We dig into the problem, the customer, the competitive landscape, and the technical feasibility. Identify real opportunity — and real risk — before a single line of code or CAD.',
  },
  {
    step: '02',
    icon: HiOutlineLightBulb,
    title: 'Design & Validation',
    copy: 'Rapid prototyping, pilot tests, and rigorous experimentation. We validate problem-solution fit and hardware-market fit before pouring capital in.',
  },
  {
    step: '03',
    icon: HiOutlineRocketLaunch,
    title: 'Invest & Launch',
    copy: 'Capital deployment, IP and entity structuring, founder alignment, and first commercial launch. We align incentives so the whole team rows the same direction.',
  },
  {
    step: '04',
    icon: HiOutlineArrowTrendingUp,
    title: 'Growth',
    copy: 'A core operating team, fractional co-founder support, and full access to the TRN Trusted Partner Network. We stay in the trenches as you scale.',
  },
];

const benefits = [
  {
    icon: HiOutlineBolt,
    title: 'Frameworks that ship faster',
    copy: 'Tools, templates, and engineering blueprints proven across dozens of robotics ventures. Skip the million-dollar mistakes — use what already works.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'A network that de-risks',
    copy: 'Our Trusted Partner Network — suppliers, integrators, manufacturers, customers — lets us validate the riskiest assumptions in weeks, not quarters.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'A stage-gated process',
    copy: 'Data-driven venture building with clear gates. Capital flows where validation lives. No vibes, no vanity metrics — just measurable progress.',
  },
];

const stats = [
  { value: '40+', label: 'Ventures Co-Built' },
  { value: '$22M', label: 'Capital Deployed' },
  { value: '120+', label: 'Trusted Partners' },
  { value: '12', label: 'Industries Served' },
];

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative overflow-hidden h-screen flex items-center">
        <HeroBg3D />

        <div className="container-nx relative z-10 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mx-auto"
            >
              <span className="eyebrow-dot" />
              Venture builder for robotics, AI & automation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-16 text-3xl font-bold leading-[1.08] text-trn-text sm:text-5xl lg:text-6xl
                         text-glow"
            >
              We don&apos;t just back robotics startups.
              <br />
              <span className="gradient-text">We co-build them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-trn-text-secondary sm:text-xl"
            >
              The Robotic Nexus is a venture studio for robotics, AI, hardware, and automation.
              We share the risk, the vision, and the triumphs — because the best robotics
              companies aren&apos;t built alone, they&apos;re co-built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/register" className="btn-primary">
                Apply to Co-Build <HiOutlineArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-ghost">
                See How We Work
              </Link>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl px-4 py-6 text-center"
                >
                  <div className="font-display text-3xl font-bold text-trn-red sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-trn-text-secondary">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* THREE ROLES — Fund · Investor · Co-Builder */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="How we show up"
            title="We&rsquo;re not just a fund."
            highlight="We co-build."
            subtitle="As a venture builder, we wear three hats at once — capital partner, strategic investor, and embedded co-founder."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {roles.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass card-hover text-center"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-trn-red/40 bg-trn-red/10 text-trn-red">
                  <r.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-trn-text">
                  {r.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">
                  {r.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / INTRO */}
      <section className="section">
        <div className="container-nx grid items-center gap-14 lg:grid-cols-2">
          <ParallaxSection offset={30}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                About The Robotic Nexus
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl lg:text-6xl">
                We&apos;re not a fund.
                <br />
                <span className="gradient-text">We&apos;re your technical co-founder.</span>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-trn-text-secondary">
                TRN is a venture studio for robotics, AI, hardware, and automation. We don&apos;t
                write checks and disappear — we embed engineers, deploy capital, and stay in the
                trenches until your robots ship at scale.
              </p>
              <p className="mt-4 text-base leading-relaxed text-trn-text-secondary">
                When you win, we win. When the prototype doesn&apos;t work, we&apos;re at the
                bench with you. From first CAD sketch to multi-unit pilots — that&apos;s not
                advisory, that&apos;s partnership.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-ghost">
                  Our Story
                </Link>
                <Link to="/services" className="btn-ghost">
                  How We Work
                </Link>
              </div>
            </motion.div>
          </ParallaxSection>
          {/* right section — animated robot visual */}
          <ParallaxSection offset={-30}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative aspect-square w-full max-w-[520px]">
                {/* Ambient glows */}
                <motion.div
                  animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-trn-red/20 blur-3xl"
                />
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-trn-red/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-trn-red/15 blur-3xl" />

                {/* Rotating orbital rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-trn-red/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[8%] rounded-full border border-trn-red/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[18%] rounded-full border border-trn-red/40"
                >
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-trn-red shadow-[0_0_12px_rgba(229,9,20,0.9)]" />
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/80" />
                  <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-trn-red shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
                </motion.div>

                {/* Floating robot — custom SVG */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-[18%] flex items-center justify-center drop-shadow-[0_0_30px_rgba(229,9,20,0.5)]"
                >
                  <svg
                    viewBox="0 0 200 220"
                    className="h-full w-full"
                    aria-label="TRN robot illustration"
                  >
                    <defs>
                      <linearGradient id="trn-body" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                      </linearGradient>
                      <linearGradient id="trn-plate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#262626" />
                        <stop offset="100%" stopColor="#0f0f0f" />
                      </linearGradient>
                      <radialGradient id="trn-eye" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#ff5560" />
                        <stop offset="60%" stopColor="#e50914" />
                        <stop offset="100%" stopColor="#7a050a" />
                      </radialGradient>
                      <filter id="trn-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge>
                          <feMergeNode in="b" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Antenna */}
                    <line x1="100" y1="32" x2="100" y2="14" stroke="#3a3a3a" strokeWidth="2" />
                    <circle cx="100" cy="10" r="5" fill="url(#trn-eye)" filter="url(#trn-glow)">
                      <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Neck */}
                    <rect x="86" y="146" width="28" height="14" rx="3" fill="#1a1a1a" stroke="#2a2a2a" />
                    <line x1="92" y1="153" x2="108" y2="153" stroke="#e50914" strokeWidth="1" opacity="0.7" />

                    {/* Head body */}
                    <rect
                      x="40"
                      y="34"
                      width="120"
                      height="116"
                      rx="22"
                      fill="url(#trn-body)"
                      stroke="#e50914"
                      strokeWidth="1.5"
                      strokeOpacity="0.55"
                    />

                    {/* Top vent details */}
                    <rect x="60" y="44" width="80" height="3" rx="1.5" fill="#e50914" opacity="0.25" />
                    <rect x="68" y="50" width="64" height="2" rx="1" fill="#e50914" opacity="0.18" />

                    {/* Face plate */}
                    <rect
                      x="54"
                      y="62"
                      width="92"
                      height="58"
                      rx="14"
                      fill="url(#trn-plate)"
                      stroke="#e50914"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />

                    {/* Scan line on face plate */}
                    <line x1="54" y1="91" x2="146" y2="91" stroke="#e50914" strokeWidth="0.5" opacity="0.4">
                      <animate
                        attributeName="y1"
                        values="68;114;68"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y2"
                        values="68;114;68"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </line>

                    {/* Eyes */}
                    <g filter="url(#trn-glow)">
                      <circle cx="78" cy="91" r="9" fill="url(#trn-eye)">
                        <animate
                          attributeName="opacity"
                          values="1;0.55;1"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="122" cy="91" r="9" fill="url(#trn-eye)">
                        <animate
                          attributeName="opacity"
                          values="1;0.55;1"
                          dur="2.4s"
                          repeatCount="indefinite"
                          begin="0.3s"
                        />
                      </circle>
                    </g>
                    <circle cx="78" cy="91" r="2.4" fill="#fff" opacity="0.95" />
                    <circle cx="122" cy="91" r="2.4" fill="#fff" opacity="0.95" />

                    {/* Mouth — speaker grille */}
                    <rect
                      x="76"
                      y="128"
                      width="48"
                      height="10"
                      rx="3"
                      fill="#0a0a0a"
                      stroke="#e50914"
                      strokeWidth="0.8"
                      strokeOpacity="0.5"
                    />
                    {[0, 1, 2, 3, 4].map((i) => (
                      <rect
                        key={i}
                        x={80 + i * 9}
                        y="131"
                        width="5"
                        height="4"
                        fill="#e50914"
                        opacity="0.55"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.25;0.75;0.25"
                          dur="1.4s"
                          begin={`${i * 0.15}s`}
                          repeatCount="indefinite"
                        />
                      </rect>
                    ))}

                    {/* Side bolts */}
                    <circle cx="46" cy="92" r="3" fill="#1a1a1a" stroke="#e50914" strokeOpacity="0.5" />
                    <circle cx="154" cy="92" r="3" fill="#1a1a1a" stroke="#e50914" strokeOpacity="0.5" />

                    {/* Chest panel */}
                    <rect
                      x="62"
                      y="166"
                      width="76"
                      height="44"
                      rx="8"
                      fill="url(#trn-body)"
                      stroke="#e50914"
                      strokeOpacity="0.4"
                    />
                    <circle cx="100" cy="188" r="9" fill="#0a0a0a" stroke="#e50914" strokeOpacity="0.7" />
                    <circle cx="100" cy="188" r="4" fill="#e50914">
                      <animate
                        attributeName="opacity"
                        values="0.4;1;0.4"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </motion.div>

                {/* Floating data tags */}
                <Link
                  to="/services#program-first-launch-program"
                  className="absolute left-0 top-[18%]"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-lg border border-trn-red/40 bg-trn-bg/80 px-3 py-2 font-mono text-[11px] text-trn-text shadow-red-glow backdrop-blur transition-colors hover:border-trn-red hover:bg-trn-bg"
                  >
                    <span className="text-trn-red">●</span> First Launch Program
                  </motion.div>
                </Link>
                <Link
                  to="/services#program-3rd-axis-program"
                  className="absolute right-0 top-[42%]"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    className="rounded-lg border border-trn-red/40 bg-trn-bg/80 px-3 py-2 font-mono text-[11px] text-trn-text shadow-red-glow backdrop-blur transition-colors hover:border-trn-red hover:bg-trn-bg"
                  >
                    <span className="text-trn-red">●</span> 3rd Axis Program
                  </motion.div>
                </Link>
                <Link
                  to="/services#program-cto-lift-off"
                  className="absolute bottom-[10%] left-[8%]"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                    className="rounded-lg border border-trn-red/40 bg-trn-bg/80 px-3 py-2 font-mono text-[11px] text-trn-text shadow-red-glow backdrop-blur transition-colors hover:border-trn-red hover:bg-trn-bg"
                  >
                    <span className="text-trn-red">●</span> CTO Lift-Off
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* OFFERINGS — What we bring to every venture */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="What we bring to the table"
            title="Everything a robotics venture needs."
            highlight="All under one roof."
            subtitle="From hardware bays to deployed capital, from embedded co-founders to enterprise pilots — the infrastructure of a robotics company, ready on day one."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <ServiceCard key={o.title} {...o} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS — 4-stage venture building */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="How we co-build"
            title="Four stages."
            highlight="From idea to industry."
            subtitle="A stage-gated venture-building process backed by data, not vibes. Capital and conviction flow where validation lives."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processStages.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover relative overflow-hidden"
              >
                <span className="absolute right-5 top-5 font-display text-5xl font-bold text-trn-red/20">
                  {stage.step}
                </span>
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trn-red text-white shadow-red-glow">
                    <stage.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-trn-text">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">
                    {stage.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — The TRN advantage */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="The TRN advantage"
            title="An unfair advantage for"
            highlight="robotics founders."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <ParallaxSection key={b.title} offset={20 * (i - 1)}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card glass-red card-hover"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trn-red text-white shadow-red-glow">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-trn-text">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">{b.copy}</p>
                </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-nx">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-trn-red/50 bg-trn-card/70 px-8 py-16 text-center
                       backdrop-blur-xl shadow-red-glow sm:px-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-50" />
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

            <div className="relative">
              <span className="eyebrow mx-auto">
                <span className="eyebrow-dot" />
                Let&apos;s co-build
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl lg:text-6xl">
                Big robotics dreams?
                <br />
                <span className="gradient-text">Let&apos;s build them together.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-trn-text-secondary">
                Whether you have a prototype, a research paper, or a problem you can&apos;t stop
                thinking about — if you&apos;re building in robotics, AI, hardware, or
                automation, we want to talk.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/register" className="btn-primary">
                  Apply to Co-Build <HiOutlineArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Talk to the Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}