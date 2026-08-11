import React, { useState } from 'react';
import { ArrowLeft, Layers, ExternalLink, Code2, Cpu, Wrench, Palette } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

interface TechStackPageProps {
  onBack: () => void;
}

export const TechStackPage: React.FC<TechStackPageProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Design' | 'Tools'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'] as const;

  const filteredItems = filter === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'Backend':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Design':
        return <Palette className="w-4 h-4 text-rose-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-400" />;
    }
  };

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
          <div className="flex items-center gap-2">
            <Layers className="w-8 h-8 text-sky-500" />
            <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
              Tech Stack & Tools
            </h1>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            Technologies, frameworks, databases, and creative tools I utilize day-to-day to ship scalable software and polished user interfaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xs'
                    : 'bg-neutral-100 dark:bg-[#161515] text-neutral-600 dark:text-neutral-400 border-dashed border-neutral-200 dark:border-[#272727] hover:text-black dark:hover:text-white'
                }`}
              >
                {cat} ({cat === 'All' ? TECH_STACK.length : TECH_STACK.filter((t) => t.category === cat).length})
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {filteredItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shadow-xs group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="font-semibold text-base text-black dark:text-white group-hover:underline">
                  {item.name}
                </h3>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-neutral-800/60">
              <span className="flex items-center gap-1.5">
                {getCategoryIcon(item.category)}
                {item.category}
              </span>
              <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                Official Docs →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
