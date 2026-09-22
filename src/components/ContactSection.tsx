import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, Send, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400 mb-3"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="contact-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="contact-intro-text"
          className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          I&apos;m always interested in connecting with fellow students, developers, and tech enthusiasts. Feel free to reach out or connect on social media!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Profile Badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* LinkedIn Card */}
          <a
            id="contact-linkedin-card"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all duration-200 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400/40 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors font-['Outfit',sans-serif]">
                    Connect on LinkedIn
                  </h3>
                  <span className="text-xs text-slate-400 block truncate max-w-[200px] sm:max-w-xs">
                    in/derangula-nandeep-nandeep
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            id="contact-github-card"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-600 transition-all duration-200 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:bg-slate-800 group-hover:border-slate-500 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit',sans-serif]">
                    Explore on GitHub
                  </h3>
                  <span className="text-xs text-slate-400 block truncate max-w-[200px] sm:max-w-xs">
                    github.com/derangulanandeep-star
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
          </a>

          {/* Email Copy Card */}
          <div
            id="contact-email-card"
            className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit',sans-serif]">
                    Email Address
                  </h3>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-xs text-cyan-300 hover:underline block"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                id="btn-copy-email"
                className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {copiedEmail && (
              <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                <Check className="w-3 h-3" /> Email copied to clipboard!
              </p>
            )}
          </div>
        </motion.div>

        {/* Right Column: Direct Message Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              Send a Quick Message
            </h3>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, {formState.name}. Nandeep appreciates your interest and will get back to you at {formState.email}.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormState({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g., Alex Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g., alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Share advice, discuss technology, or connect about projects..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                id="btn-submit-contact"
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/10 transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
                <span>Send Note to Nandeep</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
