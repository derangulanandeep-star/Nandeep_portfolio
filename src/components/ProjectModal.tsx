import React, { useState } from 'react';
import { X, ExternalLink, Github, Calculator, Vote, Check, RotateCcw, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {project.category}
          </span>
          <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-400">
            {project.statusBadge}
          </span>
        </div>

        <h3 id="modal-title" className="text-2xl font-bold font-['Outfit',sans-serif] text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Notice on Project Links */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300">
            <p className="font-semibold text-cyan-300 mb-1">
              Project Link Status: Direct Repository Link Coming Soon
            </p>
            <p className="text-slate-400">
              This is a first-year student project. The direct repository link can be added here later. You can follow Nandeep&apos;s latest repositories directly on his GitHub profile.
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              Visit Nandeep on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Interactive Simulation / Logic Demo */}
        <div className="border border-slate-800 rounded-xl p-5 bg-slate-950/60 mb-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              {project.type === 'grade-calculator' ? (
                <Calculator className="w-4 h-4 text-cyan-400" />
              ) : (
                <Vote className="w-4 h-4 text-violet-400" />
              )}
              <h4 className="text-sm font-semibold text-white">
                Interactive Logic Preview & Demo
              </h4>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Client Simulation
            </span>
          </div>

          {project.type === 'grade-calculator' ? (
            <GradeCalculatorDemo />
          ) : (
            <VotingSystemDemo />
          )}
        </div>

        {/* Key Features List */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Key Concepts & Logic Demonstrated
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

/* Interactive Student Grade Calculator Demo Component */
const GradeCalculatorDemo: React.FC = () => {
  const [subjects, setSubjects] = useState([
    { name: 'Mathematics I', marks: 88 },
    { name: 'Programming in C', marks: 92 },
    { name: 'Digital Electronics', marks: 80 },
    { name: 'Basic Web Tech', marks: 85 },
  ]);

  const handleMarkChange = (index: number, val: string) => {
    const num = Math.min(100, Math.max(0, parseInt(val, 10) || 0));
    const updated = [...subjects];
    updated[index].marks = num;
    setSubjects(updated);
  };

  const totalMarks = subjects.reduce((sum, s) => sum + s.marks, 0);
  const average = subjects.length ? Math.round(totalMarks / subjects.length) : 0;

  const getGrade = (avg: number) => {
    if (avg >= 90) return { grade: 'A+', gpa: '10.0', color: 'text-emerald-400' };
    if (avg >= 80) return { grade: 'A', gpa: '9.0', color: 'text-teal-400' };
    if (avg >= 70) return { grade: 'B', gpa: '8.0', color: 'text-cyan-400' };
    if (avg >= 60) return { grade: 'C', gpa: '7.0', color: 'text-amber-400' };
    if (avg >= 50) return { grade: 'D', gpa: '6.0', color: 'text-orange-400' };
    return { grade: 'F', gpa: '0.0', color: 'text-red-400' };
  };

  const result = getGrade(average);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {subjects.map((subj, idx) => (
          <div key={idx} className="flex items-center justify-between gap-2 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
            <span className="text-xs text-slate-300 font-medium truncate">
              {subj.name}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <input
                type="number"
                min="0"
                max="100"
                value={subj.marks}
                onChange={(e) => handleMarkChange(idx, e.target.value)}
                className="w-16 px-2 py-1 text-xs text-right bg-slate-950 border border-slate-700 rounded text-cyan-300 focus:outline-none focus:border-cyan-400"
              />
              <span className="text-[11px] text-slate-500">/100</span>
            </div>
          </div>
        ))}
      </div>

      {/* Computed Grade Box */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
            Calculated Result
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-lg font-bold text-white font-['Outfit',sans-serif]">
              {average}% Average
            </span>
            <span className="text-xs text-slate-400">
              (Total: {totalMarks} / 400)
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
            Grade &amp; GPA
          </span>
          <div className="flex items-baseline gap-2 justify-end mt-1">
            <span className={`text-2xl font-black ${result.color} font-['Outfit',sans-serif]`}>
              {result.grade}
            </span>
            <span className="text-xs font-semibold text-slate-300">
              GPA: {result.gpa}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Interactive Voting System Demo Component */
const VotingSystemDemo: React.FC = () => {
  const [candidates, setCandidates] = useState([
    { id: 'c1', name: 'Candidate A (Tech Lead)', votes: 8 },
    { id: 'c2', name: 'Candidate B (Project Lead)', votes: 12 },
    { id: 'c3', name: 'Candidate C (Events Lead)', votes: 5 },
  ]);
  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState<string | null>(null);

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  const handleVote = (id: string) => {
    if (hasVoted) return;
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
    );
    setHasVoted(true);
    setVotedFor(id);
  };

  const handleReset = () => {
    setCandidates([
      { id: 'c1', name: 'Candidate A (Tech Lead)', votes: 8 },
      { id: 'c2', name: 'Candidate B (Project Lead)', votes: 12 },
      { id: 'c3', name: 'Candidate C (Events Lead)', votes: 5 },
    ]);
    setHasVoted(false);
    setVotedFor(null);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2.5">
        {candidates.map((cand) => {
          const percent = totalVotes > 0 ? Math.round((cand.votes / totalVotes) * 100) : 0;
          const isSelected = votedFor === cand.id;

          return (
            <div
              key={cand.id}
              className={`p-3 rounded-lg border transition-all ${
                isSelected
                  ? 'bg-violet-950/40 border-violet-500/60'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-200">
                  {cand.name}
                  {isSelected && (
                    <span className="ml-2 text-[10px] text-violet-400 font-normal">
                      (Your Vote)
                    </span>
                  )}
                </span>
                <span className="font-mono text-slate-300">
                  {cand.votes} votes ({percent}%)
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-violet-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="flex justify-end">
                <button
                  disabled={hasVoted}
                  onClick={() => handleVote(cand.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    hasVoted
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-violet-600 hover:bg-violet-500 text-white transition-colors'
                  }`}
                >
                  {isSelected ? 'Voted' : 'Vote'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
        <span className="text-slate-400">
          Total Valid Votes: <strong className="text-white">{totalVotes}</strong>
        </span>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Simulation
        </button>
      </div>
    </div>
  );
};
