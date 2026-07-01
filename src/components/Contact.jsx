import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../data/portfolio';

const CONTACT_METHODS = [
  { icon: FiMail, label: 'Email', value: PROFILE.email, href: PROFILE.socials.email },
  { icon: FiPhone, label: 'Phone', value: PROFILE.phone, href: PROFILE.socials.phone },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: PROFILE.socials.whatsapp,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/abdulsaboorera-bit',
    href: PROFILE.socials.github,
  },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Abdul Saboor', href: PROFILE.socials.linkedin },
  { icon: FiMapPin, label: 'Location', value: PROFILE.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.message.trim().length < 10) e.message = 'Message is a bit short';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const field = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-4 focus:ring-blue-100 ${
      errors[name] ? 'border-red-400' : 'border-slate-200 focus:border-blue-400'
    }`;

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          subtitle="Have a project, an opportunity, or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6 lg:col-span-2"
          >
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold text-slate-900">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Reach out through any of these channels — I usually reply within a day.
              </p>

              <div className="mt-6 space-y-4">
                {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-slate-400">
                          {label}
                        </div>
                        <div className="truncate text-sm font-medium text-slate-700">
                          {value}
                        </div>
                      </div>
                    </>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl p-1 transition-colors hover:text-blue-700"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 p-1">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Currently available for freelance & full-time roles
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            noValidate
            className="glass-strong space-y-4 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field('name')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field('email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field('message')} resize-none`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary w-full group">
              {sent ? (
                <>
                  <FiCheckCircle /> Opening your email client…
                </>
              ) : (
                <>
                  Send Message
                  <FiSend className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400">
              This form opens your email app with the message pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
