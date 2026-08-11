import React from 'react';
import { ArrowLeft, Globe, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { LazyImage } from '../components/LazyImage';

interface ProjectsPageProps {
  onBack: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  const filteredProjects = PROJECTS;

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

        <div className="flex flex-col gap-1">
          <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
            Projects & Work
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A comprehensive gallery of web applications, tools, design experiments, and open-source software built with modern stacks.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-full rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Media Preview Box */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-52 rounded-lg overflow-hidden bg-neutral-900 group"
              >
                <div className={`w-full h-full ${project.gradient} opacity-95 group-hover:opacity-100 transition-opacity`} />
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  wrapperClassName="absolute right-3 bottom-3 w-4/5 h-36 rounded-lg shadow-xl border-2 border-black/10 dark:border-white/20 overflow-hidden"
                />
              </a>

              {/* Text Info */}
              <div className="mt-4 flex flex-col gap-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    {project.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags and Links Footer */}
            <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-dotted border-neutral-300 dark:border-[#272727] bg-white dark:bg-black/40 text-neutral-600 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1">
                {project.liveUrl !== '[GITHUB_URL]' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl !== '[GITHUB_URL]' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
