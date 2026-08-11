import React, { useState } from 'react';
import { Globe, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { LazyImage } from './LazyImage';

interface ProjectsSectionProps {
  onViewAllClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewAllClick }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <div className="w-full mt-8 font-sans">
      {/* Title */}
      <div className="flex px-1 items-center w-full h-10 justify-between mb-3">
        <h2 className="instrument-serif text-2xl sm:text-3xl text-black dark:text-white font-normal">
          Projects
        </h2>
      </div>

      {/* Projects List - Formatted in the same way as Most Recent Posts */}
      <div className="flex flex-col gap-6 w-full">
        {displayedProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-2 rounded-xl transition-colors hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50"
            >
              {/* Project Image Thumbnail */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-36 h-28 sm:h-24 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden shrink-0 bg-neutral-100 dark:bg-neutral-900 shadow-sm block relative group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors"
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  wrapperClassName="w-full h-full"
                />
              </a>

              {/* Project Details */}
              <div className="flex flex-col justify-center min-w-0 flex-1 w-full">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5"
                  >
                    <h3 className="instrument-serif text-xl sm:text-2xl text-black dark:text-white font-normal leading-snug group-hover/link:underline decoration-neutral-400">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-neutral-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>

                  {/* Action Icons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all text-neutral-500 hover:text-black dark:hover:text-white"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all text-neutral-500 hover:text-black dark:hover:text-white"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                  {project.subtitle}
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-[15px] leading-relaxed line-clamp-2 mt-1.5">
                  {project.description}
                </p>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-1.5 items-center mt-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-neutral-200/70 dark:bg-neutral-800/80 rounded text-neutral-700 dark:text-neutral-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center px-1 mt-6">
        <button
          onClick={onViewAllClick || (() => setShowAll(!showAll))}
          className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          {showAll ? 'Less' : 'show all projects →'}
        </button>
      </div>
    </div>
  );
};
