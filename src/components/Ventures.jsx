import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBriefcase } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import { VENTURES } from '../data/portfolio';
import { TechIcon } from '../utils/icons';

function VentureCard({ venture, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="glass group relative overflow-hidden rounded-3xl p-8 transition-shadow hover:shadow-2xl"
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
            <TechIcon name={venture.icon} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900">{venture.name}</h3>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              {venture.type}
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-slate-700">
        <FiBriefcase className="text-blue-600" />
        {venture.role}
      </div>

      <p className="relative mt-4 font-display text-lg font-medium text-slate-800">
        {venture.tagline}
      </p>
      <p className="relative mt-3 leading-relaxed text-slate-600">{venture.description}</p>

      <div className="relative mt-6">
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          What we do
        </div>
        <div className="flex flex-wrap gap-2">
          {venture.services.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>

      {venture.link && (
        <a
          href={venture.link}
          target="_blank"
          rel="noreferrer"
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          Visit website
          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </motion.article>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Entrepreneurship"
          title="Ventures & Startups"
          subtitle="Beyond building for others, I found and lead my own ventures — turning ideas into real products and businesses."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {VENTURES.map((v, i) => (
            <VentureCard key={v.id} venture={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
