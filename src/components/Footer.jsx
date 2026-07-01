import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { PROFILE, NAV_LINKS } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-slate-200 px-5 py-12 sm:px-8 lg:px-16">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <button onClick={() => go('home')} className="inline-flex items-center gap-2">
              <span className="gradient-border flex h-9 w-9 items-center justify-center rounded-xl">
                <span className="font-mono text-sm font-bold neon-text">AS</span>
              </span>
              <span className="font-display text-lg font-semibold text-slate-900">
                Abdul<span className="text-blue-600">.</span>Saboor
              </span>
            </button>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Founder of Orbitrix Solutions and Full-Stack MERN Developer building modern,
              scalable, and SEO-friendly web applications.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-sm text-slate-600 transition-colors hover:text-blue-700"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { href: PROFILE.socials.github, icon: FiGithub, label: 'GitHub' },
              { href: PROFILE.socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              { href: PROFILE.socials.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
              { href: PROFILE.socials.email, icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all hover:-translate-y-1 hover:text-blue-600"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-slate-500">
            © {year} Abdul Saboor — Built with React, Tailwind & Three.js
          </p>
          <button
            onClick={() => go('home')}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-slate-600 transition-colors hover:text-blue-700"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
