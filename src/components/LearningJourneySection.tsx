import React from 'react';
import { motion } from 'motion/react';
import { Milestone, CheckCircle2, Loader2, Compass, ArrowDown } from 'lucide-react';
import { JOURNEY_DATA } from '../data/portfolioData';

export const LearningJourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-900"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400 mb-3"
        >
          <Milestone className="w-3.5 h-3.5" />
          <span>Timeline & Milestones</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="journey-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
        >
          My Learning Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-lg mx-auto"
        >
          Step-by-step path from first-year university beginnings toward building real-world artificial intelligence capabilities.
        </motion.p>
      </div>

      {/* Visual Timeline in Exact Order */}
      <div className="relative max-w-3xl mx-auto">
        {/* Continuous Center Track Line */}
        <div
          className="absolute left-6 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-slate-800"
          aria-hidden="true"
        />

        <div className="space-y-8 relative">
          {JOURNEY_DATA.map((step, index) => {
            const isEven = index % 2 === 0;
            const isCompleted = step.status === 'Completed';
            const isInProgress = step.status === 'In Progress';

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`journey-step-${step.stepNumber}`}
                className="relative flex items-center"
              >
                {/* Mobile view and Desktop grid alignment */}
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Left column (Desktop only, for even steps) */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'pr-10 text-right' : 'order-last pl-10 text-left'}`}>
                    <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 shadow-lg hover:border-slate-700 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[11px] font-mono text-cyan-400/90 font-semibold uppercase">
                          Step 0{step.stepNumber}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                            isCompleted
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : isInProgress
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit',sans-serif] mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-md ${
                        isCompleted
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-emerald-500/20'
                          : isInProgress
                          ? 'bg-cyan-950 border-cyan-400 text-cyan-300 shadow-cyan-500/30 animate-pulse'
                          : 'bg-slate-900 border-slate-700 text-slate-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : isInProgress ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Compass className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Mobile & Opposite Content */}
                  <div className="pl-14 sm:hidden w-full">
                    <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                          Step 0{step.stepNumber}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                            isCompleted
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : isInProgress
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white font-['Outfit',sans-serif] mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for desktop symmetry */}
                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'order-last' : 'order-first'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Downward growth conclusion indicator */}
      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <div className="w-8 h-8 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
          <ArrowDown className="w-4 h-4" />
        </div>
        <span className="text-xs text-slate-400 font-medium tracking-wide">
          Continuous Growth &bull; Next Milestones in Progress
        </span>
      </div>
    </section>
  );
};
