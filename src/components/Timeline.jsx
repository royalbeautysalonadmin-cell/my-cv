import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { TIMELINE } from '../data/portfolio';
import { TechIcon } from '../utils/icons';

function TimelineNode({ item, index }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex items-center md:min-h-[9rem]">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className={`w-full md:w-[calc(50%-2.5rem)] ${
          isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
        }`}
      >
        <div className="glass group rounded-2xl p-6 transition-shadow hover:shadow-lg">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700">
            {item.year}
          </span>
          <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          <div
            className={`mt-4 flex flex-wrap gap-1.5 ${
              isLeft ? 'md:justify-end' : ''
            }`}
          >
            {item.tags.map((t) => (
              <span key={t} className="chip font-mono !text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute left-4 top-6 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <div className="gradient-border flex h-12 w-12 items-center justify-center rounded-xl text-xl text-blue-600 shadow-md">
          <TechIcon name={item.icon} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="journey" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Experience"
          title="My Learning Journey"
          subtitle="From programming fundamentals to full-stack development and DevOps — a continuous path of growth."
        />

        <div ref={ref} className="relative mt-16 space-y-10 md:space-y-4">
          {/* Vertical track */}
          <div className="absolute bottom-0 left-[1.4rem] top-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[1.4rem] top-0 w-0.5 origin-top bg-blue-600 md:left-1/2 md:-translate-x-1/2"
          />

          {TIMELINE.map((item, i) => (
            <div key={item.title} className="pl-14 md:pl-0">
              <TimelineNode item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
