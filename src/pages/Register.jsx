import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineCubeTransparent,
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineChevronDown,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';

const programs = [
  '3rd Axis Program — Co-Build',
  'First Launch Program — Launchpad',
  'CTO Lift-Off — Scale-Up',
  'Not sure yet — let\u2019s talk',
];

const focusAreas = [
  'Autonomous Mobility',
  'Manipulation & Grasping',
  'Computer Vision & Perception',
  'Reinforcement Learning',
  'Drones & UAVs',
  'Humanoids',
  'Industrial Automation',
  'Medical Robotics',
  'AI Infrastructure',
  'Other / Multi-disciplinary',
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  ventureName: '',
  program: '',
  focusArea: '',
  message: '',
};

/* Reusable styled select with a custom chevron — keeps visual parity with input-field */
function StyledSelect({ value, onChange, children }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="input-field w-full cursor-pointer appearance-none pr-10"
      >
        {children}
      </select>
      <HiOutlineChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-trn-red"
      />
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2)
      e.fullName = 'Please enter your full name';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[+\d][\d\s\-()]{6,}$/.test(form.phone))
      e.phone = 'Please enter a valid phone number';
    // ventureName is optional — no validation
    if (!form.program) e.program = 'Please select a program';
    if (!form.focusArea) e.focusArea = 'Please pick a focus area';
    if (!form.message.trim() || form.message.trim().length < 30)
      e.message = 'Tell us a bit more — at least 30 characters';
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

    setSubmitting(true);
    // Simulate async submission — replace with real API call
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const dropdownOptionClass = 'bg-trn-card text-trn-text';

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Apply to co-build"
        title="Tell us what you&rsquo;re building."
        highlight="Let&rsquo;s explore co-founding."
        subtitle="Whether you have a prototype, a research paper, or a problem you can&rsquo;t stop thinking about — we want to hear from you. We respond within two business days."
      />

      <section className="section pt-4">
        <div className="container-nx grid gap-10 lg:grid-cols-5">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="card glass-red">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-trn-red shadow-red-glow">
                    <HiOutlineCheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-trn-text">
                    Application received
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-trn-text-secondary">
                    Thanks for applying to The Robotic Nexus. Our partners will review your
                    submission and get back to you within two business days. If we see a fit,
                    we&rsquo;ll set up a 30-minute discovery call.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost mt-6"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <Field
                    label="Full Name"
                    icon={HiOutlineUser}
                    error={errors.fullName}
                  >
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Ada Lovelace"
                      value={form.fullName}
                      onChange={handleChange('fullName')}
                      className="input-field"
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" icon={HiOutlineEnvelope} error={errors.email}>
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="ada@example.com"
                        value={form.email}
                        onChange={handleChange('email')}
                        className="input-field"
                      />
                    </Field>

                    <Field label="Phone Number" icon={HiOutlinePhone} error={errors.phone}>
                      <input
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 99090 41684"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        className="input-field"
                      />
                    </Field>
                  </div>

                  <Field
                    label="Venture / Project Name (optional)"
                    icon={HiOutlineCubeTransparent}
                  >
                    <input
                      type="text"
                      placeholder="Leave blank if you haven't named it yet"
                      value={form.ventureName}
                      onChange={handleChange('ventureName')}
                      className="input-field"
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Program of Interest"
                      icon={HiOutlineRocketLaunch}
                      error={errors.program}
                    >
                      <StyledSelect
                        value={form.program}
                        onChange={handleChange('program')}
                      >
                        <option value="" disabled className={dropdownOptionClass}>
                          Choose a program
                        </option>
                        {programs.map((p) => (
                          <option key={p} value={p} className={dropdownOptionClass}>
                            {p}
                          </option>
                        ))}
                      </StyledSelect>
                    </Field>

                    <Field
                      label="Focus Area"
                      icon={HiOutlineLightBulb}
                      error={errors.focusArea}
                    >
                      <StyledSelect
                        value={form.focusArea}
                        onChange={handleChange('focusArea')}
                      >
                        <option value="" disabled className={dropdownOptionClass}>
                          Pick your domain
                        </option>
                        {focusAreas.map((f) => (
                          <option key={f} value={f} className={dropdownOptionClass}>
                            {f}
                          </option>
                        ))}
                      </StyledSelect>
                    </Field>
                  </div>

                  <Field
                    label="Tell us about your venture"
                    icon={HiOutlineChatBubbleLeftRight}
                    error={errors.message}
                  >
                    <textarea
                      rows={6}
                      placeholder="What are you building? What stage are you at — idea, prototype, pilot, or revenue? What do you need from TRN — capital, co-builders, manufacturing, or something else?"
                      value={form.message}
                      onChange={handleChange('message')}
                      className="input-field resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? 'Submitting…' : 'Submit Application'}
                    {!submitting && <HiOutlineArrowRight className="h-4 w-4" />}
                  </button>

                  <p className="text-center text-xs text-trn-text-secondary">
                    By applying you agree to TRN&rsquo;s code of conduct and partnership terms.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* SIDE PANEL */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="card glass-red">
              <h3 className="text-lg font-semibold text-trn-text">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {[
                  {
                    n: '1',
                    t: 'We review your application',
                    c: 'Our partners read every single submission. Usually within 48 hours.',
                  },
                  {
                    n: '2',
                    t: '30-minute discovery call',
                    c: 'We learn about your venture, your team, and what you need. We answer your questions about co-building.',
                  },
                  {
                    n: '3',
                    t: 'Partnership exploration',
                    c: 'If it&rsquo;s a fit, we begin a two-week deep-dive — checking technical, market, and team alignment before any commitment.',
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-trn-red font-display text-sm font-bold text-white shadow-red-glow">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-trn-text">{s.t}</h4>
                      <p
                        className="mt-1 text-xs leading-relaxed text-trn-text-secondary"
                        dangerouslySetInnerHTML={{ __html: s.c }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card glass-red">
              <h3 className="text-lg font-semibold text-trn-text">Who should apply</h3>
              <p className="mt-2 text-sm leading-relaxed text-trn-text-secondary">
                Founders building in robotics, AI, hardware, or industrial automation.
                Researchers with breakthrough work ready to commercialize. Engineer-founders
                with a prototype and a co-founder. 0→1 startups ready to scale.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-trn-text-secondary">
                If you&rsquo;re not sure whether you&rsquo;re a fit — apply anyway. We&rsquo;ll tell you.
              </p>
            </div>

            <div className="card glass-red">
              <h3 className="text-lg font-semibold text-trn-text">Prefer email?</h3>
              <p className="mt-2 text-sm text-trn-text-secondary">
                Send a note with your venture deck, GitHub, or portfolio link to{' '}
                <a
                  href="mailto:manali@nantatech.com"
                  className="text-trn-red hover:underline"
                >
                  manali@nantatech.com
                </a>
                .
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, icon: Icon, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-trn-text-secondary">
        <Icon className="h-4 w-4 text-trn-red" />
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-trn-red">{error}</span>}
    </label>
  );
}