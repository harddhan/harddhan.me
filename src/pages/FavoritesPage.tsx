import React, { useState } from 'react';
import { ArrowLeft, Film, Gamepad2, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { FAVORITES } from '../data/portfolioData';
import { FavoriteItem } from '../types';
import { LazyImage } from '../components/LazyImage';

interface FavoritesPageProps {
  onBack: () => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ onBack }) => {
  const [selectedSubSection, setSelectedSubSection] = useState<string>('All');

  const subSections = ['All', 'Games', 'Movies & TV Shows', 'Books'];

  const getSubSectionIcon = (subSection: string) => {
    switch (subSection) {
      case 'Games':
        return <Gamepad2 className="w-4 h-4 text-amber-400" />;
      case 'Movies & TV Shows':
      case 'Movies':
      case 'TV Shows':
        return <Film className="w-4 h-4 text-rose-400" />;
      case 'Books':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-neutral-400" />;
    }
  };

  const categoriesToDisplay = selectedSubSection === 'All'
    ? ['Games', 'Movies & TV Shows', 'Books']
    : [selectedSubSection];

  const getItemCount = (subSec: string) => {
    if (subSec === 'All') return FAVORITES.length;
    return FAVORITES.filter((item) => item.category === subSec).length;
  };

  return (
    <div className="w-full flex flex-col font-inter">
      {/* Back Button */}
      <div className="pt-2 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-black dark:hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="flex flex-col gap-2 pb-6">
        <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
          Favourite Media
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A showcase of games, movies & TV shows, and books that left a lasting impression. Click any item to read more.
        </p>

        {/* Sub-section Filter Tabs (No Search) */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
          {subSections.map((subSec) => {
            const isActive = selectedSubSection === subSec;
            const count = getItemCount(subSec);
            return (
              <button
                key={subSec}
                onClick={() => setSelectedSubSection(subSec)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xs font-semibold'
                    : 'bg-neutral-100 dark:bg-[#161515] text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-[#272727] hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {subSec !== 'All' && getSubSectionIcon(subSec)}
                <span>{subSec}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-sm ${
                  isActive
                    ? 'bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-sections Grid Layout */}
      <div className="flex flex-col gap-10 py-4">
        {categoriesToDisplay.map((category) => {
          const items = FAVORITES.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category} className="flex flex-col gap-4">
              {/* Sub-section Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <div className="flex items-center gap-2">
                  {getSubSectionIcon(category)}
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 dark:text-neutral-300">
                    {category}
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* Grid of cards - Matching Books nav grid layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
                {items.map((item, idx) => {
                  const sources = item.coverUrls && item.coverUrls.length > 0
                    ? item.coverUrls
                    : ([item.coverUrl, item.backupCoverUrl].filter(Boolean) as string[]);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.22, delay: Math.min((idx % 6) * 0.03, 0.2), ease: 'easeOut' }}
                      onClick={() => {
                        if (item.url) {
                          window.open(item.url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="group relative flex flex-col cursor-pointer transition-all duration-300"
                    >
                      {/* Card Poster Frame (matching Books design) */}
                      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300 border border-neutral-200 dark:border-[#2c2b2b] bg-neutral-900">
                        {sources.length > 0 ? (
                          <LazyImage
                            src={sources}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            wrapperClassName="w-full h-full"
                          />
                        ) : null}

                        {/* Poster Fallback UI inside image container */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-br from-neutral-800 to-neutral-950 text-white opacity-95 group-hover:opacity-100 transition-opacity pointer-events-none -z-10">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                              {getSubSectionIcon(item.category)}
                              {item.category}
                            </span>
                            <h3 className="instrument-serif text-lg sm:text-xl mt-2 leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          {item.creator && (
                            <p className="text-xs font-mono text-neutral-400 truncate">
                              {item.creator}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Below Card Details (matching Books typography) */}
                      <div className="mt-2.5 flex flex-col">
                        <h3 className="font-semibold text-sm text-black dark:text-white group-hover:underline truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-500 font-mono truncate">
                          {item.creator || item.category} {item.year ? `(${item.year})` : ''}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

