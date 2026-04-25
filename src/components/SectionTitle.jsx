import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-trn-text sm:text-4xl lg:text-5xl">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed text-trn-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
