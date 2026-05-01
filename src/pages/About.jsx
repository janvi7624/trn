import { motion } from 'framer-motion';
import {
  HiOutlineLightBulb,
  HiOutlineFlag,
  HiOutlineHeart,
  HiOutlineHandRaised,
  HiOutlineCurrencyDollar,
  HiOutlinePresentationChartLine,
} from 'react-icons/hi2';
import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ParallaxSection from '../components/ParallaxSection.jsx';

const values = [
  {
    icon: HiOutlineHeart,
    title: 'Skin in the game',
    copy: 'We invest capital, time, and people into every venture. When you fail, we fail. When you win, we win. That&rsquo;s not advisory — that&rsquo;s partnership.',
  },
  {
    icon: HiOutlineHandRaised,
    title: 'Co-founder, not consultant',
    copy: 'We don&rsquo;t hand you a deck and disappear. We&rsquo;re at the workbench, in the boardroom, on the factory floor — building beside you.',
  },
  {
    icon: HiOutlineFlag,
    title: 'Hardware time, not software time',
    copy: 'Robots ship in years, not sprints. We invest on the 10-year arc — patient capital, patient conviction, patient teams.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'De-risk by doing',
    copy: 'No theorizing, no vibes. Ship a prototype, run a pilot, talk to customers. Every assumption gets tested before capital scales it.',
  },
];

/* The three roles TRN plays — Fund · Investor · Co-Builder */
const roles = [
  {
    icon: HiOutlineCurrencyDollar,
    label: 'Fund',
    copy: 'We deploy capital from idea to scale — pre-seed, seed, and bridge rounds tailored for hardware-heavy ventures.',
  },
  {
    icon: HiOutlinePresentationChartLine,
    label: 'Investor',
    copy: 'We bring a network of robotics-focused VCs, strategic LPs, and corporate partners to fuel your next round.',
  },
  {
    icon: HiOutlineHandRaised,
    label: 'Co-Builder',
    copy: 'We embed as technical co-founders — building the prototype, hiring the team, shipping the first units beside you.',
  },
];

const team = [
  {
    name: 'Mayank Jani',
    role: 'MD',
    bio: '',
  },
  {
    name: 'Mansi Jani',
    role: 'Director',
    bio: '',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'The studio is founded',
    copy: 'The Robotic Nexus launches as India&rsquo;s first dedicated robotics venture studio. First check written for an autonomous warehouse startup; two engineers embedded as co-founders.',
  },
  {
    year: '2023',
    title: 'First exits, first lessons',
    copy: 'Two co-built ventures reach Series A. We codify what worked into a repeatable 4-stage process — Discovery, Validation, Invest & Launch, Growth.',
  },
  {
    year: '2024',
    title: 'The Trusted Partner Network forms',
    copy: '80+ suppliers, contract manufacturers, integrators, legal partners, and pilot customers join the network. Prototype in 3 weeks, pilot in 12.',
  },
  {
    year: '2026',
    title: 'Studio Fund II',
    copy: 'Closed $22M in committed capital. Now co-building 40+ ventures across robotics, AI, hardware, and industrial automation.',
  },
];

export default function About() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About The Robotic Nexus"
        title="We share the risk, the vision,"
        highlight="and the triumphs."
        subtitle="TRN is a venture studio for robotics, AI, hardware, and automation. We don&rsquo;t write checks and disappear — we embed as technical co-founders, deploy capital, and stay in the trenches until your robots ship at scale."
      />

      {/* VISION / MISSION */}
      <section className="section pt-4">
        <div className="container-nx grid gap-6 lg:grid-cols-2">
          {[
            {
              tag: 'Vision',
              title: 'Every great robotics venture has a co-builder from day one',
              copy: 'We imagine a world where founders aren&rsquo;t alone — where every breakthrough robotics, AI, and automation company has an embedded technical co-founder, deployed capital, and a trusted partner network from the moment the idea is born.',
            },
            {
              tag: 'Mission',
              title: 'Close the gap between breakthrough and real-world impact',
              copy: 'Most robotics ideas die between the lab and the factory. We close that gap by deploying engineers, capital, and a battle-tested partner network alongside founders — so the best ideas actually ship to customers, at scale.',
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
                <p
                  className="mt-4 text-base leading-relaxed text-trn-text-secondary"
                  dangerouslySetInnerHTML={{ __html: item.copy }}
                />
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </section>

      {/* WHO WE ARE — narrative block */}
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
                Who we are
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl">
                More than a venture studio.
                <br />
                <span className="gradient-text">Your strategic partner in growth.</span>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-trn-text-secondary">
                The Robotic Nexus was born from a simple observation: most robotics
                breakthroughs die in labs — not because the technology was wrong, but because
                builders were disconnected from capital, manufacturing, and go-to-market
                expertise.
              </p>
              <p className="mt-4 text-base leading-relaxed text-trn-text-secondary">
                We exist to fix that. Our approach is hands-on and collaborative — we act as
                co-founders with the ventures we back, integrating into the team to fill the
                gaps a founder shouldn&rsquo;t have to fill alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-trn-text-secondary">
                Over the years we&rsquo;ve evolved from a single-room workshop into a powerhouse
                of talent, capital, and connections. Our belief in the transformative power of
                hardware-AI ventures has fueled every step — from our first check to our 40th.
              </p>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={-30}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="mb-6">
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  How we show up
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-trn-text">
                  Three roles. <span className="gradient-text">One commitment.</span>
                </h3>
              </div>

              {roles.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card glass-red card-hover flex items-start gap-4"
                >
                  <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-trn-red/40 bg-trn-red/10 text-trn-red">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-trn-text">
                      {r.label}
                    </h4>
                    <p
                      className="mt-1.5 text-sm leading-relaxed text-trn-text-secondary"
                      dangerouslySetInnerHTML={{ __html: r.copy }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="What we believe"
            title="Principles that guide"
            highlight="every venture we co-build"
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
                <p
                  className="mt-2 text-sm leading-relaxed text-trn-text-secondary"
                  dangerouslySetInnerHTML={{ __html: v.copy }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      {/* <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="Our story"
            title="From one check to a"
            highlight="venture-building studio"
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
                      <p
                        className="mt-2 text-sm text-trn-text-secondary"
                        dangerouslySetInnerHTML={{ __html: item.copy }}
                      />
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <span className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-trn-red bg-trn-bg shadow-[0_0_15px_#dc143c] md:left-1/2 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* TEAM */}
      <section className="section">
        <div className="container-nx">
          <SectionTitle
            eyebrow="The partners"
            title="Operators who&rsquo;ve actually"
            highlight="shipped robots"
            subtitle="Our partners have spent the last decade founding, funding, and shipping hardware ventures — at research labs, space agencies, and deep-tech startups. We know the traps because we&rsquo;ve fallen into them."
          />
          {/* <div className="mt-16 flex fl justify-center"> */}
          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card glass-red card-hover text-center w-full max-w-xs"
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
                <p
                  className="mt-3 text-sm leading-relaxed text-trn-text-secondary"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              </motion.div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </section>
    </PageTransition>
  );
}