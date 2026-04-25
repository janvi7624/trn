import { Link } from 'react-router-dom';

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-nexus-border bg-nexus-card shadow-neon transition-all group-hover:shadow-neonHover">
        <svg viewBox="0 0 64 64" className="h-6 w-6">
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="18" fill="none" stroke="url(#logo-grad)" strokeWidth="3" />
          <circle cx="32" cy="32" r="6" fill="url(#logo-grad)" />
          <line x1="32" y1="6" x2="32" y2="14" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="50" x2="32" y2="58" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="6" y1="32" x2="14" y2="32" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="32" x2="58" y2="32" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-wide text-white">
            Robotic <span className="gradient-text">Nexus</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-nexus-textDim">
            Empowering Innovation
          </span>
        </span>
      )}
    </Link>
  );
}
