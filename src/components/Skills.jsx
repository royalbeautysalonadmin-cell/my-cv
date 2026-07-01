import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { SKILL_GROUPS } from '../data/portfolio';
import { TechIcon } from '../utils/icons';

function SkillBar({ name, level, icon, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <TechIcon name={icon} className="text-base text-slate-500" />
          {name}
        </span>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-blue-600"
        />
      </div>
    </div>
  );
}

function SkillCard({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-xl"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
          <TechIcon name={group.icon} />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">{group.title}</h3>
          <p className="text-xs text-slate-500">{group.blurb}</p>
        </div>
      </div>

      <div className="space-y-3.5">
        {group.skills.map((s, i) => (
          <SkillBar key={s.name} {...s} delay={i * 0.08} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          subtitle="A versatile toolkit spanning frontend, backend, databases, systems programming, and DevOps."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
