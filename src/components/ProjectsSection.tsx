import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Calculator, Vote, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (type: string) => {
    if (type === 'grade-calculator') {
      return <Calculator className="w-5 h-5 text-cyan-400" />;
    }
    return <Vote className="w-5 h-5 text-violet-400" />;
  };

  return (
    <section
      id="projects"
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
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Hands-on Builds</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="projects-heading"
          className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-xl mx-auto"
        >
          Beginner-level academic and self-study projects highlighting foundational programming logic, application flow, and user interaction.
        </motion.p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            id={`project-card-${project.id}`}
            className="group flex flex-col justify-between bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl hover:shadow-cyan-500/5 relative overflow-hidden"
          >
            {/* Top decorative gradient accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 ${
                project.type === 'grade-calculator'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-400'
                  : 'bg-gradient-to-r from-violet-500 to-purple-400'
              }`}
            />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                {/* Technology / Category Badge */}
                <span
                  id={`project-category-${project.id}`}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                >
                  {project.category}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  Links Can Be Added Later
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  {getProjectIcon(project.type)}
                </div>
                <h3
                  id={`project-title-${project.id}`}
                  className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-cyan-300 transition-colors"
                >
                  {project.title}
                </h3>
              </div>

              {/* Short Description */}
              <p
                id={`project-desc-${project.id}`}
                className="text-sm text-slate-300 leading-relaxed font-normal mb-6"
              >
                {project.description}
              </p>

              {/* Concepts / Highlights Preview */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Core Highlights:
                </span>
                <ul className="text-xs text-slate-400 space-y-1">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section with "View Project" Button */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Student development project
              </span>

              <button
                id={`btn-view-project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 hover:border-cyan-400 transition-all duration-200 shadow-sm"
              >
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Status Note as specified */}
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Click &ldquo;View Project&rdquo; to test the interactive in-browser simulation. Project code repositories will be connected as commits are pushed.
        </p>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
