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
import { Link } from 'react-router-dom';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';

const HQ_ADDRESS =
  '204 to 207, 2nd Floor, “F” Block, Shivalik Sharda Harmony, Above Chelvies Coffee, Panjarapole Crossroads, Ambawadi, Ahmedabad — 380015';

const HQ_MAPS_URL =
  'https://maps.google.com/?q=Shivalik+Sharda+Harmony+Panjarapole+Ambawadi+Ahmedabad';

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
    href: 'tel:+919909041684',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Studio HQ',
    value: HQ_ADDRESS,
    href: HQ_MAPS_URL,
  },
  {
    icon: HiOutlineClock,
    label: 'Studio Hours',
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
        title="Let&rsquo;s start a"
        highlight="conversation"
        subtitle="Investor inquiries, partnership ideas, press requests, or general questions — we read everything and respond within one business day."
      />

      {/* Founder redirect note */}
      <section className="section pt-0">
        <div className="container-nx">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card glass-red flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-trn-red">
                Founders building robotics or AI?
              </p>
              <p className="mt-2 text-sm text-trn-text-secondary">
                Skip this form — apply directly to one of our co-build programs.
                It&rsquo;s a faster path to the right person on our team.
              </p>
            </div>
            <Link to="/register" className="btn-primary flex-none">
              Apply to Co-Build <HiOutlineArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

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
                <div className="card glass-red card-hover flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-trn-border bg-trn-bg text-trn-red">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
                      {info.label}
                    </h4>
                    <p className="mt-1 text-base font-medium text-trn-text">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block"
                >
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
            <div className="card glass-red">
              {sent ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-trn-red shadow-red-glow">
                    <HiOutlineCheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-trn-text">
                    Message sent
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-trn-text-secondary">
                    Thanks for reaching out to The Robotic Nexus. We&rsquo;ll get back to
                    you within one business day.
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
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
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
                        <span className="mt-1.5 block text-xs text-trn-red">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
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
                        <span className="mt-1.5 block text-xs text-trn-red">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
                      What&rsquo;s this about?
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={handleChange('subject')}
                      className="input-field"
                      placeholder="e.g. Investor inquiry, partnership idea, press request"
                    />
                    {errors.subject && (
                      <span className="mt-1.5 block text-xs text-trn-red">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={handleChange('message')}
                      className="input-field resize-none"
                      placeholder="Tell us what you&rsquo;re thinking. The more context you share, the faster we can route you to the right person."
                    />
                    {errors.message && (
                      <span className="mt-1.5 block text-xs text-trn-red">
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

      {/* HQ / MAP */}
      <section className="section pt-0">
        <div className="container-nx">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-trn-border bg-trn-card/70"
          >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-trn-bg via-transparent to-transparent" />

            <div className="relative flex min-h-[360px] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-trn-red shadow-red-glow">
                <HiOutlineMapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-trn-text sm:text-3xl">
                The Robotic Nexus — Studio HQ
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-trn-text-secondary">
                {HQ_ADDRESS}
              </p>
              <a
                href={HQ_MAPS_URL}
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