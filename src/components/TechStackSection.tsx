import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

interface TechStackSectionProps {
  onViewAllClick?: () => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ onViewAllClick }) => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Design' | 'Tools'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'] as const;

  const filteredItems = filter === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === filter);

  return (
    <div className="w-full min-h-[220px] mt-9 px-3 font-inter">
      {/* Header and Filter Controls */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 h-auto sm:h-12 pb-2 md:pb-0">
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-baseline gap-2">
            <p className="instrument-serif text-3xl text-black dark:text-white">
              Tech Stack
            </p>
            <span className="text-[10px] font-mono text-neutral-500 select-none">
              <span className="hidden lg:inline">( hover to inspect )</span>
              <span className="inline lg:hidden">( tap to inspect )</span>
            </span>
          </div>

          {onViewAllClick && (
            <button
              onClick={onViewAllClick}
              className="flex gap-1 items-center group cursor-pointer px-2 py-1 focus:outline-none"
            >
              <p className="font-inter text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                View page
              </p>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          )}
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-black/10 text-black dark:bg-white/10 dark:text-white font-bold scale-102 border-neutral-300 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-black/5 dark:hover:bg-white/5 border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Badges Row */}
      <div className="flex flex-wrap gap-2 mt-4 w-full items-start pb-6 min-h-[120px]">
        {filteredItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-[#272727] rounded-sm bg-neutral-50 dark:bg-white/2 hover:bg-neutral-100 dark:hover:bg-white/5 flex w-auto h-7 items-center gap-1.5 pl-2 pr-3 cursor-pointer transition-all duration-100 border-dashed">
              <span
                className="w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125"
                style={{ backgroundColor: item.color }}
              />
              <p className="font-inter text-[11px] sm:text-sm font-medium">
                {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
