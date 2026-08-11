import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { WRITINGS } from '../data/portfolioData';

interface WritingSectionProps {
  onViewAllClick?: () => void;
}

export const WritingSection: React.FC<WritingSectionProps> = ({ onViewAllClick }) => {
  return (
    <div className="w-full mt-8 font-sans">
      {/* Title */}
      <div className="flex px-1 items-center w-full h-10 justify-between mb-3">
        <h2 className="instrument-serif text-2xl sm:text-3xl text-black dark:text-white font-normal">
          Most recent posts
        </h2>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-1.5 w-full">
        {WRITINGS.map((article) => (
          <a
            key={article.id}
            href={article.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-2 px-2.5 rounded-lg transition-colors hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50"
          >
            <h3 className="instrument-serif text-lg sm:text-xl text-black dark:text-white font-normal leading-snug group-hover:underline decoration-neutral-400 truncate pr-2">
              {article.title}
            </h3>

            {/* Meta details */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-400 dark:text-neutral-500 shrink-0 font-mono">
              <span>{article.date}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{article.readTime}</span>
            </div>
          </a>
        ))}
      </div>

      {onViewAllClick && (
        <div className="flex justify-center px-1 mt-6">
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-4 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            show all post →
          </button>
        </div>
      )}
    </div>
  );
};
