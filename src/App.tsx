import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WritingPage } from './pages/WritingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { BooksPage } from './pages/BooksPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { BucketListPage } from './pages/BucketListPage';
import { TopTensPage } from './pages/TopTensPage';
import { TechStackPage } from './pages/TechStackPage';
import { ContactPage } from './pages/ContactPage';
import { VibesPage } from './pages/VibesPage';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;

    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.style.colorScheme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: "dhanraz's | home",
      writing: "dhanraz's | writing",
      projects: "dhanraz's | projects",
      experience: "dhanraz's | experience",
      books: "dhanraz's | books",
      favorites: "dhanraz's | favorites",
      'bucket-list': "dhanraz's | bucket list",
      'top-10s': "dhanraz's | top 10s",
      'tech-stack': "dhanraz's | tech stack",
      vibes: "dhanraz's | vibes",
      contact: "dhanraz's | contact",
    };

    const formattedTitle = pageTitles[currentPage] || `dhanraz's | ${currentPage.replace('-', ' ')}`;
    document.title = formattedTitle;
  }, [currentPage]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'writing':
        return <WritingPage onBack={() => handleNavigate('home')} />;
      case 'projects':
        return <ProjectsPage onBack={() => handleNavigate('home')} />;
      case 'experience':
        return <ExperiencePage onBack={() => handleNavigate('home')} />;
      case 'books':
      case 'favorites':
        return <FavoritesPage onBack={() => handleNavigate('home')} />;
      case 'bucket-list':
        return <BucketListPage onBack={() => handleNavigate('home')} />;
      case 'top-10s':
        return <TopTensPage onBack={() => handleNavigate('home')} />;
      case 'tech-stack':
        return <TechStackPage onBack={() => handleNavigate('home')} />;
      case 'vibes':
        return <VibesPage onBack={() => handleNavigate('home')} />;
      case 'contact':
        return <ContactPage onBack={() => handleNavigate('home')} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-black transition-colors duration-200 dark:bg-black dark:text-white overflow-x-hidden font-sans relative">
      <Header
        currentTab={currentPage}
        onTabChange={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="flex flex-col items-center relative min-h-screen w-full pt-12 sm:pt-14">
        <main className={`w-full px-2 sm:px-4 py-4 sm:py-6 min-h-[calc(100vh-56px)] flex flex-col justify-between z-15 mx-auto ${
          currentPage === 'vibes' ? 'max-w-[96%]' : 'max-w-[680px]'
        }`}>
          <div className="flex-1 w-full flex flex-col min-h-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex-1"
              >
                {renderCurrentPage()}
              </motion.div>
            </AnimatePresence>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
