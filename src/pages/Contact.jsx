import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';

const contactInfo = [
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: 'manali@nantatech.com',
    href: 'mailto:manali@nantatech.com',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+91 99090 41684',
    href: 'tel:+919876543210',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Headquarters',
    value: '204 to 207, 2nd Floor, “F” Block, Shivalik Sharda Harmony, Above Chelvies Coffee Panjarapole Crossroads, Ambawadi, Ahmedabad-380015',
  },
  {
    icon: HiOutlineClock,
    label: 'Lab Hours',
    value: 'Mon–Sat · 09:00 – 21:00 IST',
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please add a subject';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Please write a short message (min. 10 characters)';
    return e;
  };

  const handleChange = (key) => (event) => {
    setForm({ ...form, [key]: event.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build"
        highlight="something together"
        subtitle="Questions about the program, partnership ideas, press inquiries — we read everything and respond fast."
      />

      <section className="section pt-4">
        <div className="container-nx grid gap-10 lg:grid-cols-5">
          {/* CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((info) => {
              const Inner = (
                <div className="card card-hover flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-nexus-border bg-nexus-bg text-nexus-neon">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                      {info.label}
                    </h4>
                    <p className="mt-1 text-base font-medium text-white">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {Inner}
                </a>
              ) : (
                <div key={info.label}>{Inner}</div>
              );
            })}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card">
              {sent ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-nexus-gradient shadow-neon">
                    <HiOutlineCheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">Message sent</h3>
                  <p className="mt-3 max-w-md text-sm text-nexus-textDim">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        className="input-field"
                        placeholder="Ada Lovelace"
                      />
                      {errors.name && (
                        <span className="mt-1.5 block text-xs text-nexus-pink">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        className="input-field"
                        placeholder="ada@example.com"
                      />
                      {errors.email && (
                        <span className="mt-1.5 block text-xs text-nexus-pink">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      className="input-field"
                      placeholder="Partnership inquiry"
                    />
                    {errors.subject && (
                      <span className="mt-1.5 block text-xs text-nexus-pink">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={handleChange('message')}
                      className="input-field resize-none"
                      placeholder="Tell us what's on your mind…"
                    />
                    {errors.message && (
                      <span className="mt-1.5 block text-xs text-nexus-pink">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                    {!sending && <HiOutlineArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="section pt-0">
        <div className="container-nx">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-nexus-border bg-nexus-card/70"
          >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nexus-bg via-transparent to-transparent" />

            <div className="relative flex min-h-[360px] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-nexus-gradient shadow-neon">
                <HiOutlineMapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Robotic Nexus HQ
              </h3>
              <p className="max-w-md text-sm text-nexus-textDim">
                3rd Floor, Nexus Tower, 80 Feet Road, Koramangala 4th Block,
                Bengaluru 560095, India
              </p>
              <a
                href="https://maps.google.com/?q=Koramangala+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Open in Google Maps
                <HiOutlineArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
