import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-3 flex items-center justify-between font-inter text-xs sm:text-sm text-neutral-500 mt-6 border-t border-neutral-200 dark:border-neutral-800">
      <p>
        Designed & Developed by{' '}
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
          {PERSONAL_INFO.nickName}
        </span>
      </p>
      <p>© 2026 All rights reserved.</p>
    </footer>
  );
};
