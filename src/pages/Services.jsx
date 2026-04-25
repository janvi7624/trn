import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineBeaker,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const services = [
  {
    icon: HiOutlineBeaker,
    tag: 'Hardware Workbench',
    title: 'Hardware Workbench',
    description:
      'Industrial-grade robotics hardware ready to use. Motion capture, ROS 2 environments, rapid prototyping—step in and build immediately.',
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
    title: 'AI & Simulation Infrastructure',
    description:
      'GPU clusters, Isaac Sim environments, and pre-built AI pipelines. Train policies faster. Iterate smarter. Ship sooner.',
    features: [
      'On-demand GPU clusters (A100, H100)',
      'Isaac Sim and Gazebo environments pre-configured',
      'Pre-built AI training pipelines (RL, CV)',
      'Curated robotics datasets and benchmarks',
    ],
  },
  {
    icon: HiOutlineRocketLaunch,
    tag: 'Go-to-Market',
    title: 'Go-to-Market Acceleration',
    description:
      'From prototype to pilot to scale. Legal, compliance, procurement support tailored for robotics and AI ventures.',
    features: [
      'Equity-free grants up to $50,000',
      'Legal, compliance, and IP support',
      'Pilot introductions to industry partners',
      'Investor intros to robotics-focused VCs',
    ],
  },
  {
    icon: HiOutlineAcademicCap,
    tag: 'Mentorship',
    title: 'Expert Guidance',
    description:
      "Weekly 1:1s with builders who've shipped products you admire. Architecture reviews, technical depth, career fast-tracking.",
    features: [
      '1:1 sessions with roboticists & AI researchers',
      'Monthly architecture and design reviews',
      'Career guidance and strategic connections',
      'Access to the full mentor network',
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

const plans = [
  {
    name: 'Student',
    price: 'Free',
    description: 'For individual students working on research or personal projects.',
    perks: [
      'Lab access (20 hrs / month)',
      'Community access',
      'Monthly workshops',
      'Open-source dataset access',
    ],
    highlight: false,
  },
  {
    name: 'Startup',
    price: '$499',
    period: '/mo',
    description: 'For early-stage robotics teams building towards their first pilot.',
    perks: [
      'Unlimited lab access',
      'GPU compute (200 hrs / mo)',
      '2 mentor sessions / week',
      'Grant application support',
      'Investor intros',
    ],
    highlight: true,
  },
  {
    name: 'University',
    price: 'Custom',
    description: 'For research labs and institutions running multiple active projects.',
    perks: [
      'Multi-seat lab access',
      'Dedicated program coordinator',
      'Joint R&D grants',
      'Co-branded events',
      'Publication support',
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our Platform"
        title="Everything builders need
to ship intelligent"
        highlight="systems"
        subtitle="From hardware access to AI infrastructure to go-to-market support. Build smarter, faster, together."
      />

      {/* SERVICES GRID */}
      <section className="section pt-4">
        <div className="container-nx grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-nexus-border bg-nexus-bg/80 text-nexus-neon shadow-[inset_0_0_20px_rgba(0,229,255,0.15)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-nexus-border bg-nexus-bg/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nexus-textDim">{s.description}</p>

              <ul className="mt-6 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-nexus-text">
                    <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-nexus-neon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
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

      {/* PLANS */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Membership"
            title="Plans built for"
            highlight="every stage"
            subtitle="Start free as a student. Scale with your team. Custom terms for institutions."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl border p-8 backdrop-blur-sm transition-all ${
                  plan.highlight
                    ? 'border-nexus-neon/60 bg-nexus-card/80 shadow-neon'
                    : 'border-nexus-border bg-nexus-card/60 hover:border-nexus-neon/40'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-nexus-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-neon">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-nexus-textDim">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-nexus-textDim">{plan.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-nexus-text">
                      <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-none text-nexus-neon" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/register"
                  className={`mt-8 w-full ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
                >
                  Get started <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
