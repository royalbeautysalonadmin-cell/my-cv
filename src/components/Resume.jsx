import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../data/portfolio';

const SUMMARY_POINTS = [
  'Founder of Orbitrix Solutions — a full-service digital agency (web, SEO, AI automation, marketing)',
  'Full-Stack MERN development — React, Node.js, Express, MongoDB',
  'REST API design, authentication (JWT), and scalable backend architecture',
  'C/C++ & Java OOP fundamentals with strong problem-solving skills',
  'DevOps workflow: Linux, Docker, Jenkins, and CI/CD pipelines',
  'WordPress, SEO optimization, and web performance tuning',
];

const CORE = [
  { label: 'Frontend', value: 'React, JavaScript, HTML5, CSS3, Tailwind' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs, JWT' },
  { label: 'Databases', value: 'MongoDB, SQL, Mongoose' },
  { label: 'Languages', value: 'C/C++, Java, JavaScript' },
  { label: 'DevOps', value: 'Linux, Docker, Jenkins, CI/CD, Git' },
  { label: 'Other', value: 'WordPress, SEO, Performance' },
];

export default function Resume() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Resume"
          title="Professional Summary"
          subtitle="A quick snapshot of what I bring to the table. Grab the full CV for the complete picture."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Full-Stack MERN Developer & Founder
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Computer Science student, founder of Orbitrix Solutions, and Full-Stack Developer
              focused on building modern, scalable, SEO-friendly web applications. Comfortable
              across frontend, backend, databases, and deployment, with a strong drive to learn
              and ship quality software.
            </p>

            <ul className="mt-6 space-y-3">
              {SUMMARY_POINTS.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  {p}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn-primary group">
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>
              <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn-ghost">
                <FiEye /> View Online
              </a>
            </div>
          </motion.div>

          {/* Core competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 lg:col-span-2"
          >
            <h3 className="mb-5 font-display text-lg font-semibold text-slate-900">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {CORE.map((c) => (
                <div key={c.label} className="border-b border-slate-200 pb-3 last:border-0">
                  <div className="font-mono text-xs uppercase tracking-wider text-blue-700">
                    {c.label}
                  </div>
                  <div className="mt-1 text-sm text-slate-700">{c.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
