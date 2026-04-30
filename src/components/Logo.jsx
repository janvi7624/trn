import { Link } from 'react-router-dom';
import TRNImage from './TRN.png';

export default function TRNLogo({ compact = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div
        className="relative h-12 w-12 overflow-hidden rounded-xl border border-trn-red/50
                   shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all group-hover:shadow-red-glow-lg
                   group-hover:border-trn-red/80 flex items-center justify-center bg-black/50"
      >
        <img
          src={TRNImage}
          alt="The Robotic Nexus"
          className="h-10 w-10 object-contain"
        />
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-wider text-trn-text">
            The Robotic <span className="gradient-text">Nexus</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-trn-text-secondary">
            Venture Studio
          </span>
        </div>
      )}
    </Link>
  );
}