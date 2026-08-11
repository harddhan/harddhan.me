import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Trophy,
  Video,
  UserCheck,
  Music,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TOP_TENS_DATA } from '../data/portfolioData';

interface TopTensPageProps {
  onBack: () => void;
}

const PlatformIcon: React.FC<{ link?: string }> = ({ link }) => {
  if (!link) return null;

  if (link.includes('youtube')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-red-500 transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <span className="text-[10px] font-mono hidden sm:inline">YouTube</span>
      </span>
    );
  }

  if (link.includes('twitch')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-purple-500 transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M11.571 4.714h1.715v5.143h-1.715zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
        </svg>
        <span className="text-[10px] font-mono hidden sm:inline">Twitch</span>
      </span>
    );
  }

  if (link.includes('spotify')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.48-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.281 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.2-.42-.18-.6.18-1.2.78-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span className="text-[10px] font-mono hidden sm:inline">Spotify</span>
      </span>
    );
  }

  if (link.includes('twitter') || link.includes('x.com')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <span className="text-[10px] font-mono hidden sm:inline">X</span>
      </span>
    );
  }

  if (link.includes('wikipedia')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        <span className="font-serif font-bold text-xs">W</span>
        <span className="text-[10px] font-mono hidden sm:inline">Wiki</span>
      </span>
    );
  }

  if (link.includes('github')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <span className="text-[10px] font-mono hidden sm:inline">GitHub</span>
      </span>
    );
  }

  if (link.includes('kick')) {
    return (
      <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-green-500 transition-colors">
        <span className="font-black text-xs text-green-500">K</span>
        <span className="text-[10px] font-mono hidden sm:inline">Kick</span>
      </span>
    );
  }

  return null;
};

export const TopTensPage: React.FC<TopTensPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: Trophy },
    { id: 'creators', label: 'Creators', icon: Video },
    { id: 'streamers', label: 'Streamers', icon: UserCheck },
    { id: 'songs', label: 'Songs', icon: Music },
  ];

  const displayedCategories =
    activeTab === 'all'
      ? TOP_TENS_DATA
      : TOP_TENS_DATA.filter((cat) => cat.id === activeTab);

  return (
    <div className="w-full flex flex-col font-inter animate-fadeIn pb-8">
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

      {/* Header */}
      <div className="flex flex-col gap-2 pb-6">
        <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
          Top 10's
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          My personal top 10 rankings across creators, streamers, and music.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black border-transparent font-semibold shadow-xs'
                    : 'bg-neutral-100 dark:bg-[#161515] text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-[#272727] hover:text-black dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              {/* Category Header (No bottom border line) */}
              <div className="pb-1">
                <h2 className="instrument-serif text-2xl sm:text-3xl text-black dark:text-white">
                  {category.title}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {category.description}
                </p>
              </div>

              {/* Single Column Clean List (No card background, no divider lines) */}
              <div className="flex flex-col gap-1 pt-1">
                {category.items.map((item) => {
                  const ContentWrapper = item.link ? 'a' : 'div';
                  const linkProps = item.link
                    ? {
                        href: item.link,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {};

                  return (
                    <motion.div
                      key={item.rank}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10px' }}
                      transition={{ duration: 0.25, delay: ((item.rank - 1) % 10) * 0.03 }}
                    >
                      <ContentWrapper
                        {...linkProps}
                        className="group flex items-center justify-between gap-3 py-2 px-2 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70 rounded-lg transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Numerical Rank */}
                          <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 dark:text-neutral-500 w-6 shrink-0 text-left">
                            #{item.rank}
                          </span>

                          {/* Bigger Avatar / Photo / Cover */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200/80 dark:border-neutral-700/80 bg-neutral-200 dark:bg-neutral-800">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>

                          {/* Bigger Name & Subtitle */}
                          <div className="flex flex-col min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 truncate group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
                              {item.name}
                            </h3>
                            {item.subtitle && (
                              <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                                {item.subtitle}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Platform Icon + External Link */}
                        <div className="flex items-center gap-2 shrink-0">
                          <PlatformIcon link={item.link} />
                          {item.link && (
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </ContentWrapper>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};


