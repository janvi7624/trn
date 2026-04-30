import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import TRNLogo from './TRNLogo.jsx';

const sections = [
  {
    title: 'Explore',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Programs' },
      { to: '/register', label: 'Apply' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { to: '/services', label: '3rd Axis Program' },
      { to: '/services', label: 'First Launch Program' },
      { to: '/services', label: 'CTO Lift-Off' },
      { to: '/services', label: 'Trusted Partner Network' },
    ],
  },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-trn-red/40 bg-trn-surface/60">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-trn-red to-transparent opacity-40" />

      <div className="container-nx grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <TRNLogo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-trn-text-secondary">
            The Robotic Nexus is a venture studio for robotics, AI, hardware, and
            automation. We co-build ventures with founders — sharing capital,
            expertise, and the long-arc commitment to ship at scale.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-trn-border bg-trn-card/60
                           text-trn-text-secondary transition hover:border-trn-red hover:text-trn-red hover:shadow-red-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-trn-red">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-trn-text-secondary transition hover:text-trn-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-trn-red">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-trn-text-secondary">
            <li>
              <a
                href="mailto:manali@nantatech.com"
                className="transition hover:text-trn-red"
              >
                manali@nantatech.com
              </a>
            </li>
            <li>
              <a href="tel:+919909041684" className="transition hover:text-trn-red">
                +91 99090 41684
              </a>
            </li>
            <li className="leading-relaxed">
              204 to 207, 2nd Floor, “F” Block, Shivalik Sharda Harmony, Above
              Chelvies Coffee, Panjarapole Crossroads, Ambawadi, Ahmedabad — 380015
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-trn-red/30">
        <div className="container-nx flex flex-col items-center justify-between gap-3 py-6 text-xs text-trn-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} The Robotic Nexus. All rights reserved.</p>
          <p className="font-display tracking-[0.2em]">
            <span className="gradient-text">CO-BUILDING</span> ROBOTICS VENTURES
          </p>
        </div>
      </div>
    </footer>
  );
}