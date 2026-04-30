import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import TRNLogo from './TRNLogo.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'border-trn-red/40 bg-trn-bg/90 backdrop-blur-xl shadow-red-glow'
          : 'border-trn-red/20'
      }`}
    >
      <div className="container-nx flex h-20 items-center justify-between">
        <TRNLogo />

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `link-underline text-sm font-medium transition-colors ${
                  isActive ? 'text-trn-red' : 'text-trn-text-secondary hover:text-trn-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/register" className="btn-primary">
            Apply
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-trn-red/40 bg-trn-card/60
                     text-trn-text transition hover:border-trn-red hover:bg-trn-card/80 md:hidden"
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt4 className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-trn-red/30 bg-trn-surface/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-nx flex flex-col gap-1 py-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-trn-red/20 text-trn-red'
                        : 'text-trn-text-secondary hover:bg-trn-red/10 hover:text-trn-text'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/register" className="btn-primary mt-4 w-full">
                Apply to Co-Build
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}