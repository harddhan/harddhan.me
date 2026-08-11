import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { BOOKS } from '../data/portfolioData';
import { LazyImage } from '../components/LazyImage';

interface BooksPageProps {
  onBack: () => void;
}

export const BooksPage: React.FC<BooksPageProps> = ({ onBack }) => {
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

      {/* Hero Header matching screenshot layout */}
      <div className="flex flex-col gap-2 pb-6">
        <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
          Favourite Books
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A showcase of books that left an impact on my thinking.
        </p>
      </div>

      {/* Book Cover Cards Grid (Matching screenshot: 3 columns layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6 py-8">
        {BOOKS.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 14, x: 6 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.22, delay: idx * 0.03, ease: 'easeOut' }}
            onClick={() => {
              if (book.searchUrl) {
                window.open(book.searchUrl, '_blank', 'noopener,noreferrer');
              }
            }}
            className="group relative flex flex-col cursor-pointer transition-all duration-300"
          >
            {/* Book Cover Frame */}
            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-1.5 transition-all duration-300 border border-neutral-200 dark:border-[#2c2b2b] bg-neutral-900">
              {book.coverUrl ? (
                <LazyImage
                  src={book.coverUrl}
                  alt={book.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  wrapperClassName="w-full h-full"
                />
              ) : null}

              {/* Typographic Cover Fallback inside cover frame */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-br from-neutral-800 to-neutral-950 text-white opacity-95 group-hover:opacity-100 transition-opacity pointer-events-none -z-10">
                <div>
                  <h3 className="instrument-serif text-xl sm:text-2xl mt-2 leading-tight">
                    {book.title}
                  </h3>
                </div>
                <p className="text-xs font-mono text-neutral-400">
                  by {book.author}
                </p>
              </div>

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-white">
                <p className="text-xs font-semibold leading-tight">{book.title}</p>
                <p className="text-[10px] text-neutral-300 font-mono">by {book.author}</p>
              </div>
            </div>

            {/* Book Metadata below card */}
            <div className="mt-2.5 flex flex-col">
              <h3 className="font-semibold text-sm text-black dark:text-white group-hover:underline truncate">
                {book.title}
              </h3>
              <p className="text-xs text-neutral-500 font-mono">
                {book.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

