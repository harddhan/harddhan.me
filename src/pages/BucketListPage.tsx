import React from 'react';
import { ArrowLeft, Square, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { BUCKET_LIST_SECTIONS } from '../data/portfolioData';

interface BucketListPageProps {
  onBack: () => void;
}

export const BucketListPage: React.FC<BucketListPageProps> = ({ onBack }) => {
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
          Bucket List
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A personal list of 100 goals, technical milestones, and life experiences.
        </p>
      </div>

      {/* List Sections */}
      <div className="flex flex-col gap-8 pt-2">
        {BUCKET_LIST_SECTIONS.map((sec) => (
          <div key={sec.category} className="flex flex-col gap-3">
            {/* Section Category Title */}
            <h2 className="instrument-serif text-xl sm:text-2xl text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2">
              {sec.category}
            </h2>

            {/* Items List */}
            <div className="flex flex-col gap-2.5 pt-1">
              {sec.items.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10px' }}
                  transition={{ duration: 0.25, delay: (index % 10) * 0.03 }}
                  className="flex items-start gap-3 text-sm leading-snug py-0.5"
                >
                  {/* Square Box */}
                  <div className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-500">
                    {item.completed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                    )}
                  </div>

                  {/* Numerical bullet + Title */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 w-6 shrink-0">
                      {item.number}.
                    </span>
                    <span
                      className={`${
                        item.completed
                          ? 'line-through text-neutral-400 dark:text-neutral-500'
                          : 'text-neutral-800 dark:text-neutral-200'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
