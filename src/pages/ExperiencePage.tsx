import React from 'react';
import { ArrowLeft, Briefcase, Calendar, Building, Award, CheckCircle2, Paperclip } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperiencePageProps {
  onBack: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onBack }) => {
  return (
    <div className="w-full flex flex-col font-inter animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-4 pb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-black dark:hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
              Work & Experience
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              Professional journey, key engineering milestones, product leadership, and technical accomplishments.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1JfmppwzYOa5vCN2NDizOxJGApbFgN4E8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-md shadow-xs hover:opacity-90 transition-opacity shrink-0"
          >
            <Paperclip className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="py-8 flex flex-col gap-8 relative">
        <div className="absolute left-3.5 top-10 bottom-10 w-[2px] bg-neutral-800 pointer-events-none" />

        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="flex gap-4 relative pl-8">
            <div className="absolute left-2 top-1.5 size-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0F0E0E] ring-4 ring-emerald-500/20 z-10" />

            <div className="flex flex-col gap-2 w-full p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    @ {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded w-fit border border-emerald-500/20">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                {exp.description}
              </p>

              {/* Skills and highlights */}
              <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-dashed border-neutral-300 dark:border-[#272727] bg-white dark:bg-black/30 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
