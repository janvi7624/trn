import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-50" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="container-nx relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mx-auto"
        >
          <span className="eyebrow-dot" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl font-bold leading-tight text-trn-text sm:text-5xl lg:text-6xl"
        >
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-trn-text-secondary sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
