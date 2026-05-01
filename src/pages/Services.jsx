import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineBeaker,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineCubeTransparent,
  HiOutlineArrowTrendingUp,
  HiOutlineMagnifyingGlass,
  HiOutlineLightBulb,
  HiOutlineBanknotes,
  HiOutlineWrenchScrewdriver,
  HiOutlineUsers,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { useState } from 'react';

/* The three programs — TRN's main entry paths (House-of-Starts style) */
const programs = [
  {
    icon: HiOutlineRocketLaunch,
    tag: 'Launchpad',
    name: 'First Launch Program',
    description:
      'Got a groundbreaking robotics or AI idea but no launchpad? Join First Launch — we turn your vision into a venture from the ground up.',
    perks: [
      '90-day Discovery sprint with TRN partners',
      'Prototyping budget and lab access',
      'Co-founder matching from our network',
      'Stage-gated capital up to seed round',
      'Full IP and entity structuring support',
    ],
    cta: 'Join the Waitlist',
    highlight: false,
  },
  {
    icon: HiOutlineCubeTransparent,
    tag: 'Co-Build',
    name: '3rd Axis Program',
    description:
      'Got the vision and need the right partner to ship it? We co-build your robotics venture — your idea, our execution, shared upside.',
    perks: [
      'Embedded technical co-founder for 12–18 months',
      'Pre-seed capital ($100K–$500K)',
      'Full TRN lab and AI infrastructure access',
      'Trusted Partner Network for prototyping & pilots',
      'Series A intros via our VC network',
    ],
    cta: 'Apply to Co-Build',
    highlight: true,
  },
  {
    icon: HiOutlineArrowTrendingUp,
    tag: 'Scale-Up',
    name: 'CTO Lift-Off',
    description:
      'Shipped 0→1 and ready for the next leap? CTO Lift-Off elevates your leadership team and operations to take you to industry scale.',
    perks: [
      'Senior fractional CTO and operator support',
      'Engineering team scale-up playbook',
      'Series A / B preparation and warm intros',
      'Manufacturing partner introductions',
      'Ongoing access to TRN&rsquo;s full partner network',
    ],
    cta: 'Join the Waitlist',
    highlight: false,
  },
];

/* The 4-stage process — deeper detail than Home */
const stages = [
  {
    step: '01',
    icon: HiOutlineMagnifyingGlass,
    title: 'Discovery',
    duration: '4–8 weeks',
    copy: 'Problem, customer, market, and technical feasibility analysis. We get clear on what we&rsquo;re building, who it&rsquo;s for, and whether the technology can actually deliver — before a single line of code or CAD.',
    deliverables: [
      'Problem-customer-market thesis',
      'Competitive and technical landscape',
      'Risk register with kill criteria',
    ],
  },
  {
    step: '02',
    icon: HiOutlineLightBulb,
    title: 'Design & Validation',
    duration: '8–16 weeks',
    copy: 'Rapid prototyping, pilot testing, and structured customer interviews. We test the riskiest assumptions first — usually hardware-market fit, often regulatory, sometimes both.',
    deliverables: [
      'Working prototype or proof-of-concept',
      'Pilot results from 3+ design partners',
      'Validated unit economics',
    ],
  },
  {
    step: '03',
    icon: HiOutlineRocketLaunch,
    title: 'Invest & Launch',
    duration: '12–24 weeks',
    copy: 'Capital deployment, IP and entity structuring, founder cap-table alignment, and first commercial launch. Incentives get aligned so the whole team rows the same direction.',
    deliverables: [
      'Pre-seed / seed round closed',
      'Cap table, IP, and entity finalized',
      'First paying customer or signed pilot',
    ],
  },
  {
    step: '04',
    icon: HiOutlineArrowTrendingUp,
    title: 'Growth',
    duration: 'Ongoing',
    copy: 'Operating team scale-up, fractional support from TRN partners, full Trusted Partner Network on demand. We stay in the trenches until you ship at industry scale.',
    deliverables: [
      'Core operating team hired',
      'Manufacturing & supply chain locked',
      'Series A and beyond on the runway',
    ],
  },
];

/* What every TRN venture gets — the infrastructure stack */
const offerings = [
  {
    icon: HiOutlineBeaker,
    tag: 'Hardware',
    title: 'Hardware Workbench',
    description:
      'Industrial-grade robotics hardware, ready to use the moment you join — no procurement cycles, no purchase orders.',
    features: [
      'Industrial robotic arms (UR5e, Franka, KUKA)',
      'Drone cages with OptiTrack motion capture',
      '3D printing, CNC, and PCB rapid prototyping',
      'Dedicated ROS 2 and Ubuntu workstations',
    ],
  },
  {
    icon: HiOutlineCpuChip,
    tag: 'AI Infrastructure',
    title: 'AI & Simulation Stack',
    description:
      'GPU clusters and pre-built ML pipelines. Train policies, run sim-to-real, and validate edge cases without spinning up your own infra.',
    features: [
      'On-demand GPU clusters (A100, H100)',
      'Isaac Sim and Gazebo environments pre-configured',
      'Pre-built AI training pipelines (RL, CV, sim-to-real)',
      'Curated robotics datasets and benchmarks',
    ],
  },
  {
    icon: HiOutlineBanknotes,
    tag: 'Capital & GTM',
    title: 'Capital & Go-to-Market',
    description:
      'From pre-seed checks to enterprise pilots. We deploy capital and open doors — so you can focus on building the system, not the deck.',
    features: [
      'Pre-seed and seed checks ($100K–$1M)',
      'Legal, IP, compliance, and procurement support',
      'Pilot introductions to enterprise customers',
      'Investor intros to robotics-focused VCs',
    ],
  },
  {
    icon: HiOutlineAcademicCap,
    tag: 'People',
    title: 'Embedded Co-Founders',
    description:
      'Senior operators who plug into your team. Not advisors with a calendar link — co-builders shipping alongside you.',
    features: [
      'Weekly 1:1s with senior roboticists and AI researchers',
      'Architecture reviews from operators who&rsquo;ve shipped',
      'Technical co-founder embedded for 12–18 months',
      'Access to the full TRN Trusted Partner Network',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Apply',
    copy: 'Tell us about your project, your team, and what you\'re trying to build. 10 minutes.',
  },
  {
    step: '02',
    title: 'Interview',
    copy: 'A 30-minute technical conversation with one of our program leads.',
  },
  {
    step: '03',
    title: 'Onboard',
    copy: 'Get lab access, mentor matching, and your first sprint plan within a week.',
  },
  {
    step: '04',
    title: 'Build',
    copy: 'Ship. Iterate. Ask for help. Demo every month to the full Nexus community.',
  },
];

/* Founder profiles — replaces pricing tiers */
const founderProfiles = [
  {
    icon: HiOutlineBeaker,
    name: 'The Researcher',
    fitFor: 'Best fit: First Launch Program',
    description:
      'You&rsquo;ve got a paper, a breakthrough, a working lab demo. Now you need to turn it into a company.',
    signals: [
      'Strong technical foundation (PhD or equivalent)',
      'Validated research or lab-tested concept',
      'Looking for a co-founder, capital, and a path to market',
      'Open to embedding with TRN for 12+ months',
    ],
    highlight: false,
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    name: 'The Engineer-Founder',
    fitFor: 'Best fit: 3rd Axis Program',
    description:
      'You&rsquo;ve got a prototype, a co-founder, and conviction. Now you need capital, manufacturing, and customers.',
    signals: [
      'Working prototype or early pilot deployment',
      '1–3 person founding team in place',
      'Need pre-seed / seed capital + operator support',
      'Ready for 12–18 months of intense co-build',
    ],
    highlight: true,
  },
  {
    icon: HiOutlineUsers,
    name: 'The Operator',
    fitFor: 'Best fit: CTO Lift-Off',
    description:
      'You&rsquo;ve shipped 0→1. You have early customers. Now you need to scale to industry leader.',
    signals: [
      'Active product with paying customers',
      'Series A-ready or recently closed',
      'Need fractional CTO and scaling playbook',
      'Want access to manufacturing & VC network',
    ],
    highlight: false,
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(
    founderProfiles.findIndex((p) => p.highlight)
  );
  return (
    <PageTransition>
      <PageHeader
        eyebrow="How we co-build"
        title="Programs, process, and"
        highlight="everything in between"
        subtitle="Three programs. Four stages. One promise — we co-build robotics ventures with you, from the first prototype to the first thousand units shipped."
      />

      {/* PROGRAMS */}
      <section className="section pt-4">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Our programs"
            title="Three paths into TRN."
            highlight="Pick the one that fits."
            subtitle="Whether you&rsquo;ve got a vision, a prototype, or a scaling startup — there&rsquo;s a venture-building program designed for where you are."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl border p-8 backdrop-blur-sm transition-all ${p.highlight
                    ? 'border-trn-red/60 bg-trn-card/80 shadow-red-glow'
                    : 'border-trn-border bg-trn-card/60 hover:border-trn-red/40'
                  }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-trn-red px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-red-glow">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${p.highlight
                        ? 'bg-trn-red text-white shadow-red-glow'
                        : 'border border-trn-border bg-trn-bg/80 text-trn-red'
                      }`}
                  >
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-trn-border bg-trn-bg/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-trn-text">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">
                  {p.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-sm text-trn-text"
                    >
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-trn-red" />
                      <span dangerouslySetInnerHTML={{ __html: perk }} />
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`mt-8 w-full ${p.highlight ? 'btn-primary' : 'btn-ghost'
                    }`}
                >
                  {p.cta} <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="How it works"
            title="From application to first"
            highlight="shipped prototype"
            subtitle="A simple four-step process. No gatekeeping, no six-month waiting lists."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card card-hover"
              >
                <span className="font-display text-4xl font-bold gradient-text">{p.step}</span>
                <h4 className="mt-3 text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-nexus-textDim">{p.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 4-STAGE PROCESS */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="How we co-build, in 4 stages"
            title="From idea to industry."
            highlight="Stage by stage."
            subtitle="Every TRN venture moves through the same four-stage process. Capital and conviction flow as validation deepens — no founder progresses to the next stage until they&rsquo;ve earned it."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover relative overflow-hidden"
              >
                <span className="absolute right-5 top-5 font-display text-6xl font-bold text-trn-red/15">
                  {stage.step}
                </span>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-trn-red text-white shadow-red-glow">
                      <stage.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-trn-red/40 bg-trn-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-trn-red">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-trn-text">
                    {stage.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-trn-text-secondary"
                    dangerouslySetInnerHTML={{ __html: stage.copy }}
                  />

                  <div className="mt-6 border-t border-trn-border pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-trn-text-muted">
                      Stage deliverables
                    </p>
                    <ul className="mt-3 space-y-2">
                      {stage.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-trn-text"
                        >
                          <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-trn-red" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT EVERY VENTURE GETS — the offerings */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="What every venture gets"
            title="The full venture-building"
            highlight="infrastructure"
            subtitle="Every program comes with the complete TRN stack. No pay-per-feature, no hidden tiers — we give you everything because we&rsquo;re invested in your outcome."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {offerings.map((o, i) => (
              <motion.article
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-trn-border bg-trn-bg/80 text-trn-red shadow-[inset_0_0_20px_rgba(229,9,20,0.15)]">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-trn-border bg-trn-bg/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
                    {o.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-trn-text">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">
                  {o.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {o.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-trn-text"
                    >
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-trn-red" />
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE BUILD WITH — replaces pricing tiers */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Who we build with"
            title="Three kinds of"
            highlight="founders fit TRN"
            subtitle="We don&rsquo;t co-build with everyone. We back founders who are technical, hands-on, and committed to the long arc of hardware. See where you fit."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {founderProfiles.map((profile, i) => {
              const isSelected = selectedIndex === i;
              return (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setSelectedIndex(isSelected ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedIndex(isSelected ? null : i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={`relative cursor-pointer rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-trn-red/60 ${isSelected
                      ? 'border-trn-red bg-trn-card/90 shadow-red-glow scale-[1.02] ring-2 ring-trn-red/40'
                      : 'border-trn-border bg-trn-card/60 hover:border-trn-red/40 hover:scale-[1.01]'
                    }`}
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all ${isSelected
                        ? 'bg-trn-red text-white shadow-red-glow'
                        : 'border border-trn-red/40 bg-trn-red/10 text-trn-red'
                      }`}
                  >
                    <profile.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-trn-text">
                    {profile.name}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-trn-text-secondary"
                    dangerouslySetInnerHTML={{ __html: profile.description }}
                  />

                  <ul className="mt-6 space-y-2.5">
                    {profile.signals.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-trn-text">
                        <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-trn-red" />
                        <span dangerouslySetInnerHTML={{ __html: s }} />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-trn-border pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-trn-red">
                      {profile.fitFor}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/register" className="btn-primary">
              Apply to Co-Build <HiOutlineArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Not sure? Talk to us
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}