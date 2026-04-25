import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineCpuChip,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineUsers,
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HeroBg3D from '../components/HeroBg3D.jsx';
import ParallaxSection from '../components/ParallaxSection.jsx';

const offerings = [
  {
    icon: HiOutlineBeaker,
    title: 'Hardware Workbench',
    description:
      'Industrial-grade robotics hardware ready to use. Motion capture, ROS 2 environments, rapid prototyping—step in and build immediately.',
    tags: ['ROS 2', 'Hardware', 'Simulation'],
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Technical Expertise',
    description:
      "Weekly 1:1 sessions with roboticists and AI researchers who've shipped real systems. Architecture reviews. Career guidance. Real feedback.",
    tags: ['1:1', 'Reviews', 'Career'],
  },
  {
    icon: HiOutlineBanknotes,
    title: 'Innovation Capital',
    description:
      'Grants, pre-seed funding, and access to robotics-focused investors. We back ideas. We back builders. We help you scale.',
    tags: ['Grants', 'VC Network'],
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Go-to-Market Acceleration',
    description:
      'From prototype to pilot to scale. Legal, compliance, procurement support tailored for robotics and AI ventures.',
    tags: ['Incubation', 'Pilots'],
  },
  {
    icon: HiOutlineCpuChip,
    title: 'AI & Simulation Infrastructure',
    description:
      'GPU clusters, Isaac Sim environments, and pre-built AI pipelines. Train policies faster. Iterate smarter. Ship sooner.',
    tags: ['GPU', 'Isaac Sim'],
  },
  {
    icon: HiOutlineUsers,
    title: 'The Nexus Network',
    description:
      '2,000+ builders, researchers, and founders shipping real systems. Collaborate. Learn. Scale. Monthly demos. Real accountability.',
    tags: ['Community', 'Events'],
  },
];

const benefits = [
  {
    icon: HiOutlineBolt,
    title: 'No friction',
    copy: 'Stop building infrastructure. Walk in with everything ready—labs, compute, mentors. Start shipping on day one.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Built-in wisdom',
    copy: "Access patterns from teams who've already shipped at scale. Avoid the million-dollar architecture mistakes.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'The Nexus advantage',
    copy: 'Collide with the smartest builders in robotics and AI. Find co-founders, customers, investors—all in one place.',
  },
];

const stats = [
  { value: '120+', label: 'Active Projects' },
  { value: '38', label: 'Partner Universities' },
  { value: '2,000+', label: 'Members' },
  { value: '$14M', label: 'Funding Facilitated' },
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
              Build intelligent systems, not just robots
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-16 text-3xl font-bold leading-[1.08] text-trn-text sm:text-5xl lg:text-6xl
                         text-glow"
            >
              Where robotics meets AI —
              <br />
              <span className="gradient-text">from hardware to software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-trn-text-secondary sm:text-xl"
            >
              Nexus is where hardware builders and AI researchers converge. We provide the labs, compute, and capital to build end-to-end intelligent systems that ship in the real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/register" className="btn-primary">
                Join Nexus <HiOutlineArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Services
              </Link>
            </motion.div>

            <motion.div
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
            </motion.div>
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
                About Nexus
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl lg:text-6xl">
                We build intelligent systems
                <br />
                <span className="gradient-text">with builders</span>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-trn-text-secondary">
                We started Nexus because building robots and AI systems is too isolated. Most breakthrough ideas die in labs—not because the tech was wrong, but because builders were disconnected from compute, capital, and expertise.
              </p>
              <p className="mt-4 text-base leading-relaxed text-trn-text-secondary">
                We fix that. We're not just a service provider. We're your technology partner. We collaborate, we invest, we scale. From your first prototype to multi-unit pilots—we're with you every step.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-ghost">
                  Our Story
                </Link>
                <Link to="/services" className="btn-ghost">
                  What We Offer
                </Link>
              </div>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={-30}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="card glass-red relative overflow-hidden p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-trn-red/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-trn-red/10 blur-3xl" />

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-trn-text-secondary">
                      Nexus/OS
                    </span>
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-trn-red shadow-[0_0_8px_rgba(229,9,20,0.6)]" />
                      <span className="h-2 w-2 rounded-full bg-white opacity-40" />
                      <span className="h-2 w-2 rounded-full bg-trn-red opacity-60" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['status', 'LAB_ONLINE', 'text-trn-red'],
                      ['project', 'swarm_slam_v3', 'text-trn-text'],
                      ['mentor', 'Dr. Anika Rao', 'text-trn-text'],
                      ['runtime', 'ros2_humble', 'text-trn-text'],
                      ['next_review', '2026-04-18 10:00', 'text-trn-red'],
                    ].map(([k, v, cls]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between rounded-lg border border-trn-border bg-trn-bg/60 px-4 py-3 font-mono text-xs"
                      >
                        <span className="text-trn-text-muted">{k}</span>
                        <span className={cls}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-trn-red/40 bg-trn-red/10 p-4">
                    <p className="font-mono text-xs text-trn-text-secondary">
                      <span className="text-trn-red">$</span> nexus deploy swarm_slam_v3
                      --target=lab-03
                    </p>
                    <p className="mt-2 font-mono text-xs text-white">
                      ✓ 12 nodes online · policy converged · ready to ship
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="What we build together"
            title="Hardware. Software. Impact."
            highlight="All in one place"
            subtitle="From robotics labs to AI compute, from technical mentorship to capital—everything your next breakthrough needs."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <ServiceCard key={o.title} {...o} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Why Nexus"
            title="The unfair advantage for"
            highlight="builders at scale"
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
                Let's build together
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl lg:text-6xl">
                Your next breakthrough
                <br />
                <span className="gradient-text">starts here</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-trn-text-secondary">
                Whether you're a student with a bold idea or a startup with a vision—we invest in builders who move the industry forward. Apply to join us.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/register" className="btn-primary">
                  Apply for Membership <HiOutlineArrowRight className="h-5 w-5" />
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
