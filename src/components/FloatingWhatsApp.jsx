import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { PROFILE } from '../data/portfolio';

// Sticky WhatsApp action button, fixed to the bottom-right on every screen.
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={PROFILE.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2 sm:bottom-6 sm:right-6"
    >
      {/* label (desktop) */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 opacity-0 shadow-lg ring-1 ring-slate-200 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <FaWhatsapp className="relative text-3xl" />
      </span>
    </motion.a>
  );
}
