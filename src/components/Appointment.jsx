import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiSend,
  FiMail,
  FiPhone,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../data/portfolio';

const SERVICES = [
  'General Consultation',
  'Web Development Project',
  'MERN / Full-Stack App',
  'SEO & Performance',
  'DevOps & Deployment',
  'WordPress Website',
  'Other',
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '07:00 PM',
  '08:00 PM',
];

const HOW_IT_WORKS = [
  'Pick a date, time, and what you need help with.',
  'Submit — the request lands straight in my inbox.',
  "I'll confirm the slot with you over email or WhatsApp.",
];

const todayStr = () => new Date().toISOString().split('T')[0];

export default function Appointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: TIME_SLOTS[0],
    service: SERVICES[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.date) e.date = 'Choose a date';
    if (!form.time) e.time = 'Choose a time';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const summary = () =>
    `Appointment Request\n` +
    `-------------------\n` +
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Phone: ${form.phone || '—'}\n` +
    `Service: ${form.service}\n` +
    `Preferred date: ${form.date}\n` +
    `Preferred time: ${form.time}\n\n` +
    `Message:\n${form.message || '—'}`;

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(
      `Appointment Request — ${form.name} (${form.date} ${form.time})`
    );
    const body = encodeURIComponent(summary());
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const bookOnWhatsApp = () => {
    if (!validate()) return;
    const number = PROFILE.phoneIntl.replace('+', '');
    const text = encodeURIComponent(summary());
    window.open(`https://wa.me/${number}?text=${text}`, '_blank', 'noopener');
  };

  const field = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-4 focus:ring-blue-100 ${
      errors[name] ? 'border-red-400' : 'border-slate-200 focus:border-blue-500'
    }`;

  return (
    <section id="booking" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Book a Meeting"
          title="Schedule an Appointment"
          subtitle="Want to discuss a project or opportunity? Pick a time that works and I'll get back to you to confirm."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="glass-strong rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiCalendar size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  How it works
                </h3>
              </div>
              <ol className="mt-6 space-y-4">
                {HOW_IT_WORKS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm">
                <a
                  href={PROFILE.socials.phone}
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-700"
                >
                  <FiPhone /> {PROFILE.phone}
                </a>
                <a
                  href={PROFILE.socials.email}
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-700"
                >
                  <FiMail /> {PROFILE.email}
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <FiClock className="text-blue-600" />
                Typical response time: within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Booking form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            noValidate
            className="glass-strong space-y-4 rounded-3xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ap-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Full name
                </label>
                <input
                  id="ap-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className={field('name')}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="ap-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="ap-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={field('email')}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ap-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="ap-phone"
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={field('phone')}
                />
              </div>
              <div>
                <label htmlFor="ap-service" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Service
                </label>
                <select
                  id="ap-service"
                  value={form.service}
                  onChange={(e) => set('service', e.target.value)}
                  className={field('service')}
                >
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ap-date" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Preferred date
                </label>
                <input
                  id="ap-date"
                  type="date"
                  min={todayStr()}
                  value={form.date}
                  onChange={(e) => set('date', e.target.value)}
                  className={field('date')}
                />
                {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="ap-time" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Preferred time
                </label>
                <select
                  id="ap-time"
                  value={form.time}
                  onChange={(e) => set('time', e.target.value)}
                  className={field('time')}
                >
                  {TIME_SLOTS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="ap-message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Notes <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="ap-message"
                rows={4}
                placeholder="Anything you'd like me to know beforehand..."
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                className={`${field('message')} resize-none`}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn-primary flex-1 group">
                {sent ? (
                  <>
                    <FiCheckCircle /> Opening your email…
                  </>
                ) : (
                  <>
                    Request Appointment
                    <FiSend className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={bookOnWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-emerald-500 bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                <FaWhatsapp size={18} /> Book on WhatsApp
              </button>
            </div>
            <p className="text-center text-xs text-slate-400">
              Your request is sent straight to {PROFILE.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
