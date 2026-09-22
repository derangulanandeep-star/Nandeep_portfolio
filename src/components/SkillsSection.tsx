import React from 'react';
import { motion } from 'motion/react';
import { Globe, Sparkles, Code2, Binary, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-blue-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-900"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400 mb-3"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Technical Toolkit</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="skills-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-xl mx-auto"
        >
          Current foundational competencies as a first-year undergraduate student, focusing on steady understanding and practical application.
        </motion.p>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            id={`skill-card-${skill.id}`}
            className="group relative bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shadow-inner">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit',sans-serif]">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Level Badge - Authentically Basic / Foundational */}
                <span
                  id={`skill-badge-${skill.id}`}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 whitespace-nowrap"
                >
                  {skill.level}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {skill.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Active Student Focus
              </span>
              <span className="text-[11px] text-slate-500 uppercase font-mono">
                First-Year Base
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note on Student Proficiency */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 max-w-2xl mx-auto flex items-center gap-3 text-xs text-slate-400"
      >
        <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>
          <strong>Authentic Student Scope:</strong> These skills represent first-year coursework and self-directed study, emphasizing conceptual clarity and hands-on beginner projects rather than senior industry claims.
        </span>
      </motion.div>
    </section>
  );
};
