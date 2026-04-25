import { motion } from 'framer-motion';
import {
  HiOutlineLightBulb,
  HiOutlineFlag,
  HiOutlineSparkles,
  HiOutlineHeart,
} from 'react-icons/hi2';
import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ParallaxSection from '../components/ParallaxSection.jsx';

const values = [
  {
    icon: HiOutlineLightBulb,
    title: "Build, don't debate",
    copy: 'Ideas matter only when shipped. We back execution, not hype.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Knowledge is power, shared',
    copy: 'We open-source breakthroughs and publish learnings. Everyone benefits.',
  },
  {
    icon: HiOutlineFlag,
    title: 'Bet on timelines that matter',
    copy: "Hardware and AI breakthroughs take time. We invest on the 10-year arc, not the quarterly hype.",
  },
  {
    icon: HiOutlineSparkles,
    title: 'Democratize innovation',
    copy: "Breakthrough capability shouldn't be gate-kept by funding. We make cutting-edge labs and AI accessible to all.",
  },
];

const team = [
  {
    name: 'Dr. Anika Rao',
    role: 'Co-founder · Head of Labs',
    bio: 'Ex-ISRO robotics lead. 12 years designing autonomous systems for extreme environments.',
  },
  {
    name: 'Kabir Menon',
    role: 'Co-founder · Programs',
    bio: 'Two-time robotics founder. Mentored 60+ hardware startups through accelerator programs.',
  },
  {
    name: 'Ishita Varma',
    role: 'Director of R&D',
    bio: 'PhD in reinforcement learning from ETH Zürich. Works on sim-to-real transfer.',
  },
  {
    name: 'Arjun Bhatt',
    role: 'Head of Community',
    bio: 'Former IEEE chapter president. Built developer programs at two hardware unicorns.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'The first lab',
    copy: 'Opened our first shared robotics lab in Bengaluru with 12 founding members.',
  },
  {
    year: '2023',
    title: 'University partnerships',
    copy: 'Signed R&D agreements with IIT Madras, BITS Pilani, and 6 other institutions.',
  },
  {
    year: '2024',
    title: 'Funding Nexus launched',
    copy: 'Closed our first grant pool — $4M deployed across 22 early-stage projects.',
  },
  {
    year: '2026',
    title: 'Global expansion',
    copy: 'Opening nodes in Singapore and Berlin to support cross-border robotics collaboration.',
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About Nexus"
        title="We exist to accelerate
innovation at the"
        highlight="hardware-AI frontier"
        subtitle="We're a collective of builders, researchers, and investors who believe the next generation of impact comes from robots and AI systems working together. We remove every barrier between idea and execution."
      />

      {/* VISION / MISSION */}
      <section className="section pt-4">
        <div className="container-nx grid gap-6 lg:grid-cols-2">
          {[
            {
              tag: 'Vision',
              title: 'Hardware and AI converge to solve real problems',
              copy: 'We imagine a world where the best robotics and AI solutions are built collaboratively—where a student in tier-3 India can build alongside engineers from leading robotics companies, and ideas become systems that ship in the real world.',
            },
            {
              tag: 'Mission',
              title: 'Build the bridge from research to impact',
              copy: 'We remove the barriers between breakthrough ideas and real-world systems. We provide labs, compute, capital, and community—so builders can focus on innovation instead of infrastructure logistics.',
            },
          ].map((item, i) => (
            <ParallaxSection key={item.tag} offset={20 * (i - 1)}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card glass-red card-hover"
              >
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  {item.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-trn-text sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-trn-text-secondary">
                  {item.copy}
                </p>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Why Robotic Nexus"
            title="Principles that guide"
            highlight="every decision we make"
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-trn-border bg-trn-bg text-trn-red">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-trn-text">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-trn-text-secondary">{v.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Our journey"
            title="From one lab to a"
            highlight="global network"
          />

          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-trn-red/50 via-trn-red/30 to-transparent md:block md:left-1/2" />

            <div className="space-y-8 md:space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col gap-5 md:flex-row md:items-center ${
                    i % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2">
                    <div
                      className={`card glass-red card-hover ${
                        i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                      }`}
                    >
                      <div className="font-display text-3xl font-bold gradient-text">
                        {item.year}
                      </div>
                      <h4 className="mt-2 text-lg font-semibold text-trn-text">{item.title}</h4>
                      <p className="mt-2 text-sm text-trn-text-secondary">{item.copy}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <span className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-trn-red bg-trn-bg shadow-[0_0_15px_#dc143c] md:left-1/2 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="The team"
            title="People who've actually"
            highlight="shipped robots"
            subtitle="Our team has spent the last decade building hardware — at research labs, space agencies, and deep-tech startups. We know the traps because we've fallen into them."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover text-center"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-trn-red/60 bg-trn-red font-display text-2xl font-bold text-white shadow-red-glow">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-trn-text">{member.name}</h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-trn-red">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
