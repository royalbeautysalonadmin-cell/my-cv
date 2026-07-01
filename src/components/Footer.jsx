import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { PROFILE, NAV_LINKS } from '../data/portfolio';

const SOCIALS = [
  { href: PROFILE.socials.github, icon: FiGithub, label: 'GitHub' },
  { href: PROFILE.socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: PROFILE.socials.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
  { href: PROFILE.socials.email, icon: FiMail, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const half = Math.ceil(NAV_LINKS.length / 2);
  const linksA = NAV_LINKS.slice(0, half);
  const linksB = NAV_LINKS.slice(half);

  return (
    <footer className="relative mt-10 border-t border-slate-200 bg-white/60">
      <div className="container-max px-5 py-14 sm:px-8 lg:px-16">
        {/* CTA band */}
        <div className="glass-strong mb-14 flex flex-col items-center justify-between gap-5 rounded-3xl p-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-slate-600">
              Let&apos;s build something modern, fast, and scalable together.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => go('booking')} className="btn-primary group">
              Book a Meeting
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={PROFILE.socials.email} className="btn-ghost">
              Say Hello
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <button onClick={() => go('home')} className="inline-flex items-center gap-2">
              <span className="gradient-border flex h-9 w-9 items-center justify-center rounded-xl">
                <span className="font-mono text-sm font-bold neon-text">AS</span>
              </span>
              <span className="font-display text-lg font-semibold text-slate-900">
                Abdul<span className="text-blue-600">.</span>Saboor
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Founder of Orbitrix Solutions and Full-Stack MERN Developer building modern,
              scalable, and SEO-friendly web applications.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
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

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {linksA.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {linksB.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PROFILE.socials.email}
                  className="flex items-center gap-2.5 text-slate-600 transition-colors hover:text-blue-700"
                >
                  <FiMail className="shrink-0 text-blue-600" /> {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.socials.phone}
                  className="flex items-center gap-2.5 text-slate-600 transition-colors hover:text-blue-700"
                >
                  <FiPhone className="shrink-0 text-blue-600" /> {PROFILE.phone}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-slate-600 transition-colors hover:text-blue-700"
                >
                  <FaWhatsapp className="shrink-0 text-emerald-600" /> Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-600">
                <FiMapPin className="shrink-0 text-blue-600" /> {PROFILE.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-center font-mono text-xs text-slate-500">
            © {year} Abdul Saboor. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-400">
            Built with React, Tailwind &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
