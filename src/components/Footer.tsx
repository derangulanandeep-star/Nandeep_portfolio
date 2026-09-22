import React from 'react';
import { ArrowUp, Github, Linkedin, Terminal, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-900 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-['Outfit',sans-serif] font-bold text-sm text-white tracking-wide">
              NANDEEP
            </span>
            <p className="text-[11px] text-slate-400">
              Aspiring AI Engineer &bull; First-Year B.Tech CSE
            </p>
          </div>
        </div>

        {/* Center note */}
        <div className="text-xs text-slate-400 flex items-center gap-1.5">
          <span>Crafted with curiosity</span>
          <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
          <span>&bull; Open for learning</span>
        </div>

        {/* Right side social links and back to top */}
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
