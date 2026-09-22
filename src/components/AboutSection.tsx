import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Code, Cpu, BookOpen, Layers, Compass, Rocket } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const interests = [
    { name: 'Artificial Intelligence', icon: Cpu, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
    { name: 'Generative AI', icon: Sparkles, color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
    { name: 'Web Development', icon: Code, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { name: 'Programming', icon: Layers, color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
    { name: 'Building practical projects', icon: Rocket, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { name: 'Learning new technologies', icon: Compass, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  ];

  return (
    <section
      id="about"
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
          <BookOpen className="w-3.5 h-3.5" />
          <span>Profile & Background</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="about-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        >
          About Me
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Bio & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="about-bio-card"
          className="lg:col-span-7 bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                NANDEEP
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                B.Tech &bull; Computer Science Engineering (First Year)
              </p>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
            <p id="about-intro-paragraph">
              Hi! I am <strong className="text-white font-semibold">NANDEEP</strong>, a first-year{' '}
              <span className="text-cyan-300 font-medium">B.Tech Computer Science Engineering</span> student who is beginning an exciting journey toward becoming an <strong className="text-white font-semibold">AI Engineer</strong>.
            </p>

            <p>
              My passion lies in understanding how computational logic and intelligent algorithms can come together to solve meaningful everyday problems. As a first-year student, I am dedicated to establishing strong programming foundations, exploring the mechanics of computing, and turning theoretical ideas into functional code.
            </p>

            <p className="text-slate-400 text-sm">
              I believe in learning by doing—experimenting with beginner-friendly software, exploring modern generative tools, and continuously expanding my technical horizon with genuine curiosity and consistency.
            </p>
          </div>

          {/* Key student badge highlights */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
            <div className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-3.5">
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Academic Program
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                B.Tech — CSE
              </span>
              <span className="text-xs text-cyan-400 font-medium">
                Currently First-Year
              </span>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-3.5">
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Career Horizon
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                Aspiring AI Engineer
              </span>
              <span className="text-xs text-violet-400 font-medium">
                Focus on AI & Software
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right column: Core Interests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="about-interests-card"
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <div className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
            <h3 className="text-base font-bold text-white font-['Outfit',sans-serif] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Areas of Interest & Curiosity
            </h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Subjects and technologies that drive my continuous learning and exploration:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {interests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className={`p-2 rounded-lg border ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Student Mindset Quote Card */}
          <div className="bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-900/40 border border-cyan-500/20 rounded-2xl p-5 text-xs text-slate-300 leading-relaxed shadow-sm">
            <p className="italic text-slate-300">
              &ldquo;Curiosity, disciplined consistency, and a passion for technology are the building blocks of every aspiring engineer.&rdquo;
            </p>
            <div className="mt-3 text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              &mdash; Learning Journey at B.Tech CSE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
