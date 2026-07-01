import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  '$ initializing portfolio...',
  '$ loading react • node • mongo',
  '$ spinning up docker containers',
  '$ compiling experience ✓',
];

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;
    let raf;

    const tick = (now) => {
      const p = Math.min(100, ((now - start) / duration) * 100);
      setProgress(p);
      setLine(Math.min(BOOT_LINES.length - 1, Math.floor((p / 100) * BOOT_LINES.length)));
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => onDone?.(), 650);
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4f7fc]"
        >
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-80" />

          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 animate-pulse-ring rounded-2xl border border-blue-400/50" />
            <div className="gradient-border flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg">
              <span className="font-mono text-3xl font-bold neon-text">AS</span>
            </div>
          </motion.div>

          {/* Terminal line */}
          <div className="mb-6 h-6 font-mono text-sm text-slate-500">
            <span className="text-emerald-600">{BOOT_LINES[line]}</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-blue-500 align-middle" />
          </div>

          {/* Progress bar */}
          <div className="relative h-1.5 w-64 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-blue-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-slate-500">
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
