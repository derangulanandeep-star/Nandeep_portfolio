import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Sparkles, BookOpen, Brain, Terminal, Globe2, GitPullRequest } from 'lucide-react';
import { FUTURE_GOALS_DATA } from '../data/portfolioData';

export const FutureGoalsSection: React.FC = () => {
  const getGoalIcon = (category: string) => {
    switch (category) {
      case 'Core Logic':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Core AI Language':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'AI & ML':
        return <Brain className="w-4 h-4 text-violet-400" />;
      case 'Generative AI':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Practical Engineering':
        return <Globe2 className="w-4 h-4 text-blue-400" />;
      case 'Community & Collaboration':
        return <GitPullRequest className="w-4 h-4 text-teal-400" />;
      case 'Career Vision':
        return <Target className="w-4 h-4 text-rose-400" />;
      default:
        return <Compass className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="goals"
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
          <Target className="w-3.5 h-3.5" />
          <span>Roadmap & Aspirations</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="goals-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
        >
          Future Goals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-xl mx-auto"
        >
          Key technical and personal milestones I am actively working toward as an aspiring engineer, presented as forward-looking aspirations.
        </motion.p>
      </div>

      {/* Grid of Future Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FUTURE_GOALS_DATA.map((goal, idx) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            id={`future-goal-${goal.id}`}
            className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-cyan-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-colors">
                  {getGoalIcon(goal.category)}
                </div>
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700">
                  {goal.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-['Outfit',sans-serif] mb-2 group-hover:text-cyan-300 transition-colors">
                {goal.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {goal.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Goal #{idx + 1}</span>
              <span className="text-cyan-400/80 uppercase">Future Aspiration</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto"
      >
        <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit',sans-serif] mb-2">
          The Long-Term Vision
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Through continuous study at university, dedicated practice, and steady hands-on development, I aim to bridge foundational computer science with innovative AI solutions.
        </p>
      </motion.div>
    </section>
  );
};
