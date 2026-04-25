import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
} from 'react-icons/hi2';

import PageTransition from '../components/PageTransition.jsx';
import PageHeader from '../components/PageHeader.jsx';

const categories = ['Student', 'Startup', 'University', 'Researcher'];
const interests = [
  'Autonomous Navigation',
  'Manipulation & Grasping',
  'Computer Vision',
  'Reinforcement Learning',
  'Drones & UAVs',
  'Humanoids',
  'Industrial Automation',
  'Medical Robotics',
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  category: '',
  interest: '',
  message: '',
};

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
    if (!form.category) e.category = 'Please select a category';
    if (!form.interest) e.interest = 'Please pick an area of interest';
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = 'Tell us a bit more — at least 20 characters';
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

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Join the Nexus"
        title="Become part of the"
        highlight="robotics vanguard"
        subtitle="Tell us who you are and what you're working on. We'll get back within two business days with next steps."
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
            <div className="card">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-nexus-gradient shadow-neon">
                    <HiOutlineCheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    Application received
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-nexus-textDim">
                    Thanks for applying to Robotic Nexus. Our team will review your
                    submission and reach out within two business days with next steps.
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

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Category"
                      icon={HiOutlineUserGroup}
                      error={errors.category}
                    >
                      <select
                        value={form.category}
                        onChange={handleChange('category')}
                        className="input-field appearance-none"
                      >
                        <option value="">Choose one</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Area of Interest"
                      icon={HiOutlineLightBulb}
                      error={errors.interest}
                    >
                      <select
                        value={form.interest}
                        onChange={handleChange('interest')}
                        className="input-field appearance-none"
                      >
                        <option value="">Pick a focus area</option>
                        {interests.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field
                    label="Tell us about your project"
                    icon={HiOutlineChatBubbleLeftRight}
                    error={errors.message}
                  >
                    <textarea
                      rows={5}
                      placeholder="What are you building, what stage are you at, and what do you need from Nexus?"
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

                  <p className="text-center text-xs text-nexus-textDim">
                    By applying you agree to our code of conduct and membership terms.
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
            <div className="card">
              <h3 className="text-lg font-semibold text-white">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {[
                  {
                    n: '1',
                    t: 'We review your application',
                    c: 'Our team reads every single submission. Usually within 48 hours.',
                  },
                  {
                    n: '2',
                    t: '30-minute intro call',
                    c: 'We learn about your project and answer your questions.',
                  },
                  {
                    n: '3',
                    t: 'Onboarding & lab tour',
                    c: 'If it\'s a fit, we get you set up within a week.',
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-nexus-gradient font-display text-sm font-bold text-white shadow-neon">
                      {s.n}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{s.t}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-nexus-textDim">{s.c}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white">Prefer email?</h3>
              <p className="mt-2 text-sm text-nexus-textDim">
                Send a note with your GitHub, portfolio, or project link to{' '}
                <a
                  href="mailto:manali@nantatech.com"
                  className="text-nexus-neon hover:underline"
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
      <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-nexus-textDim">
        <Icon className="h-4 w-4 text-nexus-neon" />
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-nexus-pink">{error}</span>}
    </label>
  );
}
