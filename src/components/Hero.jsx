import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { PROFILE, STATS } from '../data/portfolio';

const FLOAT_TAGS = ['React', 'Node.js', 'MongoDB', 'Docker', 'Express', 'Linux'];
const TYPED_WORDS = [
  'React interfaces.',
  'Node.js REST APIs.',
  'MERN platforms.',
  'Docker + CI/CD pipelines.',
  'SEO-ready web apps.',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// --- Terminal-style typewriter ----------------------------------------------
function useTypewriter(words, { type = 85, del = 40, pause = 1500 } = {}) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setText(words[0]);
      return;
    }
    const word = words[wordIdx % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    } else {
      t = setTimeout(
        () => setText(word.substring(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? del : type
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, type, del, pause]);

  return text;
}

// --- Portrait with a clean professional frame + floating cards --------------
function Portrait() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative mx-auto w-[17rem] sm:w-[19rem] lg:w-[21rem]">
      {/* clean framed photo */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
        <div className="overflow-hidden rounded-[1.4rem]">
          <div className="aspect-[4/5] w-full bg-surface-100">
            {!errored ? (
              <img
                src={PROFILE.photo}
                alt={`${PROFILE.name} — ${PROFILE.title}`}
                onError={() => setErrored(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <span className="font-display text-6xl font-bold neon-text">AS</span>
                <span className="font-mono text-[10px] text-slate-400">add photo</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* floating experience card */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong absolute -left-6 bottom-12 hidden rounded-2xl px-4 py-3 sm:block"
      >
        <div className="font-display text-2xl font-bold text-slate-900">2+ yrs</div>
        <div className="text-xs text-slate-500">Building software</div>
      </motion.div>

      {/* status pill */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong absolute -right-3 top-8 flex items-center gap-2 rounded-full px-3.5 py-2"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-slate-700">Open to work</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(TYPED_WORDS);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 lg:pt-24"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      </div>

      <div className="container-max relative z-10 px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div variants={item} className="mb-6 inline-flex">
              <span className="chip font-mono text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Founder @ {PROFILE.company}
              </span>
            </motion.div>

            <motion.p variants={item} className="mb-3 font-mono text-sm text-slate-500">
              {'<'}
              <span className="text-violet-600">hello_world</span> {'/>'} — I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl"
            >
              {PROFILE.name.split(' ')[0]}{' '}
              <span className="text-blue-700">{PROFILE.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-4 font-display text-2xl font-semibold text-slate-700 sm:text-3xl"
            >
              {PROFILE.title}
            </motion.h2>

            {/* Typewriter line */}
            <motion.div
              variants={item}
              className="mt-3 flex flex-wrap items-center gap-x-1 font-mono text-xs text-slate-500 sm:text-sm"
            >
              <span className="text-emerald-600">~/abdul $</span>
              <span className="text-slate-700">building</span>
              <span className="font-semibold text-blue-700">{typed}</span>
              <span className="inline-block h-4 w-[2px] animate-pulse bg-blue-600 align-middle" />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              {PROFILE.intro}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {FLOAT_TAGS.map((t) => (
                <span key={t} className="chip font-mono">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => go('projects')} className="btn-primary group">
                View Projects
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn-ghost group">
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <button onClick={() => go('contact')} className="btn-ghost">
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-7 flex items-center gap-4">
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
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition-all hover:-translate-y-1 hover:text-blue-600 hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-first flex justify-center lg:order-last"
          >
            <Portrait />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="glass rounded-2xl p-4 text-center"
            >
              <div className="font-display text-3xl font-bold neon-text">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 hover:text-blue-600 sm:flex"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <HiArrowDown className="animate-bounce" />
      </motion.button>
    </section>
  );
}
