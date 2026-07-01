import { useMemo, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import { PROJECTS } from '../data/portfolio';

const THUMB_BG = {
  'gradient-1': 'bg-slate-800',
  'gradient-2': 'bg-blue-800',
  'gradient-3': 'bg-slate-900',
  'gradient-4': 'bg-blue-900',
  'gradient-5': 'bg-slate-700',
  'gradient-6': 'bg-blue-700',
};

function TiltCard({ project }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-shadow hover:shadow-2xl"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <div
          className={`absolute inset-0 ${
            THUMB_BG[project.image] || THUMB_BG['gradient-1']
          }`}
        />
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-bold text-white drop-shadow-lg">
            {project.title.split(' ')[0]}
          </span>
        </div>
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <FiStar /> Featured
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-black/25 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip font-mono !text-[11px]">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-violet-700"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <FiExternalLink /> Demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(PROJECTS.map((p) => p.category))],
    []
  );
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of full-stack, DevOps, and web projects I've designed and built."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === c
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'glass text-slate-600 hover:text-slate-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
