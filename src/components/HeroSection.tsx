import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Linkedin, Github, Sparkles, BrainCircuit, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { NeuralNetworkBackground } from './NeuralNetworkBackground';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Subtle modern AI-inspired background with interactive neural network canvas */}
      <NeuralNetworkBackground />

      {/* Radial soft ambient glow for high-tech atmosphere */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[540px] sm:h-[540px] bg-gradient-to-tr from-cyan-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="hero-status-pill"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-6 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
          <span>First-Year B.Tech CSE Student &bull; Journey Begun</span>
        </motion.div>

        {/* Primary Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="hero-title"
          className="font-['Outfit',sans-serif] text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-3"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            NANDEEP
          </span>
        </motion.h1>

        {/* Subheading: ASPIRING AI ENGINEER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="hero-subtitle"
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-[1px] w-6 sm:w-12 bg-cyan-500/40"></div>
          <h2 className="font-['Outfit',sans-serif] text-base sm:text-xl lg:text-2xl font-bold tracking-widest text-cyan-400 uppercase">
            ASPIRING AI ENGINEER
          </h2>
          <div className="h-[1px] w-6 sm:w-12 bg-cyan-500/40"></div>
        </motion.div>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="hero-intro-text"
          className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          First-year B.Tech Computer Science Engineering student passionate about Artificial Intelligence, technology, and building useful digital projects.
        </motion.p>

        {/* Two Prominent Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          id="hero-cta-buttons"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8"
        >
          <a
            id="hero-btn-view-projects"
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>View My Projects</span>
          </a>

          <a
            id="hero-btn-connect-me"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>Connect With Me</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
          </a>
        </motion.div>

        {/* GitHub and LinkedIn Icons Below Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          id="hero-social-icons"
          className="flex items-center gap-3 pt-2"
        >
          <span className="text-xs text-slate-500 mr-1 font-medium tracking-wide">
            FIND ME ON
          </span>
          <a
            id="hero-github-icon"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all text-xs font-medium"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>GitHub</span>
          </a>

          <a
            id="hero-linkedin-icon"
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-800/80 text-slate-300 hover:text-sky-300 transition-all text-xs font-medium"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Subtle scroll down indicator */}
        <div className="mt-12 text-slate-500 hover:text-cyan-400 transition-colors">
          <a href="#about" aria-label="Scroll to About Me section" className="inline-flex flex-col items-center gap-1 group">
            <span className="text-[11px] font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
};
