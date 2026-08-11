import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GameQuote {
  quote: string;
  character: string;
  source: string;
}

const GAME_QUOTES: GameQuote[] = [
  {
    quote: "In the pursuit of great, we failed to do good.",
    character: "Viktor",
    source: "Arcane",
  },
  {
    quote: "When you're going to change the world, don't ask for permission.",
    character: "Viktor",
    source: "Arcane",
  },
  {
    quote: "I only wanted to leave behind something that mattered.",
    character: "Viktor",
    source: "Arcane",
  },
  {
    quote: "Do you know what it's like to be torn apart and pieced back together wrong?",
    character: "Omen",
    source: "Valorant",
  },
  {
    quote: "I am more than a ghost. I am the shadow that walks.",
    character: "Omen",
    source: "Valorant",
  },
  {
    quote: "Look away... or be consumed.",
    character: "Omen",
    source: "Valorant",
  },
  {
    quote: "We're thieves in a world that don't want us no more.",
    character: "Arthur Morgan",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "Be loyal to what matters.",
    character: "Arthur Morgan",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "I gave you all I had, Jimmy... I did.",
    character: "Arthur Morgan",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "We can't fight change. We can't fight gravity. We can't fight nothing.",
    character: "Dutch van der Linde",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "You don't get to live a bad life and have good things happen to you.",
    character: "John Marston",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "I wish I had acquired wisdom at less of a price.",
    character: "Hosea Matthews",
    source: "Red Dead Redemption 2",
  },
  {
    quote: "I must survive, if only to see what comes next.",
    character: "Cypher",
    source: "Valorant",
  },
  {
    quote: "For secrets to stay secret, they must be buried deep.",
    character: "Cypher",
    source: "Valorant",
  },
  {
    quote: "They're scared of the dark... I am the dark.",
    character: "Fade",
    source: "Valorant",
  },
  {
    quote: "To take a life... it never gets easier. You just get used to the weight.",
    character: "Viper",
    source: "Valorant",
  },
  {
    quote: "You have good taste, my friend.",
    character: "Chamber",
    source: "Valorant",
  },
  {
    quote: "Just remember: if you die, I'll take your stuff.",
    character: "Phoenix",
    source: "Valorant",
  },
  {
    quote: "Don't be sorry, be better.",
    character: "Kratos",
    source: "God of War",
  },
  {
    quote: "A chip in your head, a ticking time bomb. Welcome to Night City.",
    character: "Johnny Silverhand",
    source: "Cyberpunk 2077",
  },
  {
    quote: "Stand in the ashes of a trillion dead souls, and ask the ghosts if honor matters. The silence is your answer.",
    character: "Javik",
    source: "Mass Effect 3",
  },
];

export const GameQuotesSection: React.FC = () => {
  // Start with a random index on page load
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * GAME_QUOTES.length)
  );

  const shuffleQuote = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = Math.floor(Math.random() * GAME_QUOTES.length);
      if (nextIndex === prevIndex) {
        nextIndex = (prevIndex + 1) % GAME_QUOTES.length;
      }
      return nextIndex;
    });
  }, []);

  // Auto-rotate quote every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      shuffleQuote();
    }, 7000);

    return () => clearInterval(timer);
  }, [shuffleQuote, currentIndex]);

  const current = GAME_QUOTES[currentIndex];

  return (
    <div className="w-full mt-6 font-mono">
      <div
        onClick={shuffleQuote}
        title="Click to shuffle quote"
        className="group relative w-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-100/90 dark:bg-[#0c0c0c] border border-neutral-300 dark:border-[#222222] cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-700 transition-all select-none shadow-sm flex items-center gap-4 sm:gap-6 overflow-hidden min-h-[110px]"
      >
        {/* Giant Left Quotation Mark Glyph matching reference screenshot */}
        <div className="shrink-0 text-neutral-300 dark:text-[#252525] group-hover:text-neutral-400 dark:group-hover:text-[#333333] transition-colors">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Animated Quote Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0 py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col gap-2"
            >
              <p className="font-mono italic text-sm sm:text-base text-neutral-900 dark:text-neutral-200 leading-snug tracking-tight">
                "{current.quote}"
              </p>
              <p className="font-mono italic text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 text-right self-end mt-1">
                – {current.character}, {current.source}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

