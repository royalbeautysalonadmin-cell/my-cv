import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../data/portfolio';

const PILLARS = [
  {
    icon: FiCode,
    title: 'Frontend',
    text: 'Responsive, accessible React interfaces with clean, reusable components.',
    color: 'text-blue-600',
  },
  {
    icon: FiServer,
    title: 'Backend',
    text: 'Secure Node.js & Express REST APIs with solid architecture.',
    color: 'text-blue-600',
  },
  {
    icon: FiDatabase,
    title: 'Databases',
    text: 'MongoDB & SQL schema design tuned for performance and integrity.',
    color: 'text-blue-600',
  },
  {
    icon: FiCloud,
    title: 'DevOps',
    text: 'Docker, Linux, Jenkins & CI/CD to ship reliably and repeatably.',
    color: 'text-blue-600',
  },
];

function Avatar() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="gradient-border relative overflow-hidden rounded-[2rem] p-2 shadow-xl">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-surface-100">
          {!errored ? (
            <img
              src={PROFILE.photoAlt}
              alt={`${PROFILE.name} — ${PROFILE.title}`}
              loading="lazy"
              onError={() => setErrored(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <span className="font-display text-7xl font-bold neon-text">AS</span>
              <span className="font-mono text-xs text-slate-400">
                add /public/profile-2.jpg
              </span>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="glass-strong absolute -bottom-4 -right-3 flex items-center gap-2 rounded-2xl px-4 py-3"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-slate-700">Open to work</span>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into full-stack products"
          subtitle="A Computer Science student, startup founder, and Full-Stack Developer who loves building modern, efficient web applications end to end."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <Avatar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-slate-700">
              I&apos;m <span className="font-semibold text-slate-900">{PROFILE.name}</span>, a
              passionate Computer Science student, founder of{' '}
              <span className="font-semibold text-blue-700">Orbitrix Solutions</span>, and a{' '}
              <span className="text-blue-700">Full-Stack MERN Developer</span>. I enjoy creating
              modern web applications, solving programming problems, and constantly learning new
              technologies to build efficient software solutions.
            </p>
            <p className="leading-relaxed text-slate-600">
              I work comfortably across the entire stack — from designing polished, responsive
              React interfaces to architecting Node.js and Express back ends, modeling data in
              MongoDB and SQL, and shipping everything through Docker, Linux, and CI/CD
              pipelines. I care about clean code, performance, SEO, and great user experience.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass group rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <p.icon className={`mb-2 text-2xl ${p.color}`} />
                  <h3 className="font-display font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
