import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  darkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'haku' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Blog' },
    { id: 'vibes', label: 'Vibes' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center bg-white/90 text-black backdrop-blur-md transition-colors duration-200 dark:bg-black/90 dark:text-white">
      <div className="h-14 items-center flex px-4 sm:px-6 justify-between w-full max-w-[680px] relative gap-4">
        <div className="flex-shrink-0" />

        <div className="hidden md:flex gap-6 items-center ml-auto font-sans text-sm sm:text-base font-medium">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-black dark:text-white font-semibold'
                    : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white rounded-full" />
                )}
              </button>
            );
          })}

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="cursor-pointer h-8 w-8 flex justify-center items-center rounded-md hover:bg-black/5 dark:hover:bg-neutral-800 active:scale-95 transition-all"
            aria-label="Toggle dark/light theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="cursor-pointer h-8 w-8 flex justify-center items-center rounded-md hover:bg-black/5 dark:hover:bg-neutral-800"
            aria-label="Toggle dark/light theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black dark:text-white focus:outline-none p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 border-t border-neutral-200 bg-white px-6 py-4 flex flex-col gap-3 z-50 dark:border-white/10 dark:bg-black">
          {navItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-1 text-base font-sans ${
                  currentTab === item.id
                    ? 'text-black dark:text-white font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
