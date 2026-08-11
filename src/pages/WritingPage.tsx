import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { WRITINGS } from '../data/portfolioData';
import { WritingArticle } from '../types';

interface WritingPageProps {
  onBack: () => void;
}

export const WritingPage: React.FC<WritingPageProps> = ({ onBack }) => {
  const [activeArticle, setActiveArticle] = useState<WritingArticle | null>(null);

  return (
    <div className="w-full flex flex-col font-inter animate-fadeIn">
      {/* Page Header */}
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
            Writing & Thoughts
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            Articles, software architecture notes, design system breakdowns, and lessons learned from building web products.
          </p>
        </div>
      </div>

      {/* Articles Grid / List */}
      <div className="flex flex-col gap-2 py-4">
        {WRITINGS.map((article) => (
          <a
            key={article.id}
            href={article.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-3 transition-colors duration-200 cursor-pointer group flex items-center justify-between gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900/60 rounded-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
          >
            <div className="flex flex-col min-w-0 flex-1">
              <h2 className="font-medium text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:underline truncate pr-4">
                {article.title}
              </h2>
              {article.excerpt && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                  {article.excerpt}
                </p>
              )}
            </div>
            <span className="text-xs text-neutral-500 font-mono shrink-0">
              {article.date}
            </span>
          </a>
        ))}
      </div>

      {/* Reader Drawer / Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#111111] text-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl p-6 relative font-inter shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-3">
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="instrument-serif text-3xl sm:text-4xl mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="flex flex-wrap gap-1.5 mb-6 pb-4 border-b border-neutral-800">
              {activeArticle.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-[#272727]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4 font-inter">
              <p className="font-semibold text-base text-black dark:text-white">
                {activeArticle.excerpt}
              </p>
              <p>
                Building modern web applications requires a tight integration between user experience design, fluid micro-interactions, and robust technical infrastructure. Every pixel on screen communicates intent, performance, and craftsmanship.
              </p>
              <p>
                When architecting component systems, we prioritize clarity, composition, and minimal bundle footprint. Using modular design tokens alongside Tailwind CSS allows rapid iteration while keeping the visual output predictable and responsive across device scales.
              </p>
              <p>
                Whether designing complex stateful interfaces or simple informational portfolio cards, attention to rhythm, contrast, and mathematical padding makes the difference between standard AI generation and human-crafted software.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center">
              <span className="text-xs text-neutral-500 font-mono">End of article</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
