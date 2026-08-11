import React from 'react';
import { Linkedin, Github, Mail, Paperclip } from 'lucide-react';
import { LazyImage } from './LazyImage';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-5 font-sans">
      {/* Name & Social Header with Avatar on the Left */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="relative shrink-0 rounded-full w-14 h-14 sm:w-16 sm:h-16 border-2 border-black dark:border-white overflow-hidden shadow-sm">
            {PERSONAL_INFO.avatar.endsWith('.mp4') ? (
              <video
                src={PERSONAL_INFO.avatar}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <LazyImage
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full rounded-full object-cover"
                wrapperClassName="w-full h-full rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="instrument-serif text-3xl sm:text-4xl text-black dark:text-white font-normal leading-tight">
              {PERSONAL_INFO.name}, 21
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              Electronics student & curious builder
            </p>
          </div>
        </div>

        {/* Contacts / Social Links directly below Name */}
        <div className="flex items-center gap-1.5 flex-wrap text-neutral-500 dark:text-neutral-400">
          <a
            href="https://x.com/kyahikahein"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
            aria-label="X (Twitter)"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 7.688 8.502 11.24H16.17l-5.214-6.817L4.99 21.178H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dhanrazz"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/harddhan"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com/@kyahikahein"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            aria-label="YouTube"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-all cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/user/312a32c2qg4g2u"
            target="_blank"
            rel="noopener noreferrer"
            title="Spotify"
            aria-label="Spotify"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.36-.18-.6.36-1.02 1.02-1.2 4.2-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.36z"/>
            </svg>
          </a>
          <a
            href="mailto:dhanraz0213@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            aria-label="Email"
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span
            title="Will attach ASAP"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 cursor-default select-none ml-1"
          >
            <Paperclip className="w-3.5 h-3.5" />
            <span>Resume (Attaching ASAP)</span>
          </span>
        </div>

        {/* Spotify Status directly below contacts - No Background */}
        <div className="flex items-center gap-2 mt-1 text-xs font-mono text-neutral-700 dark:text-neutral-300 w-fit overflow-hidden truncate">
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-[#1DB954]">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.841c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.78-.42-.6-.18-.78-.78-.6-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
          </svg>
          <span className="truncate">
            <span className="text-neutral-400 dark:text-neutral-500">Spotify —</span>{' '}
            <strong className="font-semibold text-neutral-600 dark:text-neutral-400">Offline</strong>
          </span>
        </div>
      </div>

      {/* Bio Text Bulleted List matching image reference layout */}
      <ul className="list-disc pl-5 space-y-3.5 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed font-sans mt-2">
        <li className="pl-1">
          Curious <strong className="font-semibold text-black dark:text-white underline decoration-neutral-400 dark:decoration-neutral-500 underline-offset-4">engineering student</strong> who builds slowly and learns deeply. I turn random ideas into projects and obsess over the details that make technology feel right.
        </li>
        <li className="pl-1">
          I’ve worked on <strong className="font-semibold text-black dark:text-white underline decoration-neutral-400 dark:decoration-neutral-500 underline-offset-4">hardware experiments, web projects, basic programming</strong>, and the fundamentals I’m still strengthening. Mostly with <strong className="font-semibold text-black dark:text-white underline decoration-neutral-400 dark:decoration-neutral-500 underline-offset-4">Python, C++, 8085, 8051, electronics</strong>, or whatever helps me understand how things work.
        </li>
        <li className="pl-1">
          Integrated <strong className="font-semibold text-black dark:text-white underline decoration-neutral-400 dark:decoration-neutral-500 underline-offset-4">M.Tech student in IoT</strong>. Learning through projects, mistakes, and more backlogs than I’d like to admit. When I’m not building, I’m usually <strong className="font-semibold text-black dark:text-white underline decoration-neutral-400 dark:decoration-neutral-500 underline-offset-4">gaming, listening to rock music</strong>, staring at whiteboards, or disappearing into topics most people never think about.
        </li>
      </ul>
    </div>
  );
};
