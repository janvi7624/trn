import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, tags = [], index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="card card-hover glass-red group"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-trn-red/0 via-transparent to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-trn-red/10 group-hover:to-white/5" />

      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-trn-border bg-trn-bg/80 text-trn-red shadow-[inset_0_0_20px_rgba(229,9,20,0.1)] transition-all group-hover:text-white group-hover:shadow-red-glow">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-trn-text">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">{description}</p>

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-trn-border/60 bg-trn-bg/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-trn-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
