import React from 'react';
import { motion } from 'motion/react';
import { AboutSection } from '../components/AboutSection';
import { WritingSection } from '../components/WritingSection';
import { GameQuotesSection } from '../components/GameQuotesSection';
import { LetsConnectSection } from '../components/LetsConnectSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08 }}
      className="flex flex-col gap-10 w-full font-sans"
    >
      {/* 1. Main Intro (Bio, PFP, Spotify, Contacts, Resume) */}
      <motion.div variants={sectionVariants}>
        <AboutSection />
      </motion.div>

      {/* 2. Most Recent Posts (Writing) */}
      <motion.div variants={sectionVariants}>
        <WritingSection onViewAllClick={() => onNavigate('writing')} />
      </motion.div>

      {/* 3. Let's Connect */}
      <motion.div variants={sectionVariants}>
        <LetsConnectSection />
      </motion.div>

      {/* 5. Minimalist Quote Card (Below Let's Connect) */}
      <motion.div variants={sectionVariants}>
        <GameQuotesSection />
      </motion.div>

    </motion.div>
  );
};


