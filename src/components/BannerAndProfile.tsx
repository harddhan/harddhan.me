import React from 'react';
import { FileText, Linkedin, Github, Mail, Paperclip } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LazyImage } from './LazyImage';

export const BannerAndProfile: React.FC = () => {
  const roleChars = `${PERSONAL_INFO.title}.`.split('');

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Profile Header Row */}
      <div className="flex flex-row gap-3 sm:gap-7 items-center w-full h-auto sm:h-38 py-3 sm:py-0">
        {/* Avatar Box */}
        <div className="relative ml-3 sm:ml-4 shrink-0 rounded-full w-28 h-28 sm:w-32 sm:h-32 border-2 border-black dark:border-white shadow-sm overflow-hidden">
          <div className="rounded-full size-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
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
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white dark:border-black z-10" title="Active" />
        </div>

        {/* Profile Info Details */}
        <div className="flex flex-col justify-center w-full min-w-0 flex-1 pr-3 sm:pr-0">
          {/* Name */}
          <div className="flex items-center gap-3 flex-wrap">
            <p className="instrument-serif text-[23px] sm:text-4xl text-black dark:text-white leading-none truncate max-w-full">
              {PERSONAL_INFO.name}
            </p>
            <a
              href="/Dhanraj_Rajput_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-neutral-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-100 transition-colors duration-200 hover:bg-neutral-900 focus:outline-none ml-1"
            >
              <FileText className="w-3 h-3" />
              Resume
            </a>
          </div>

          {/* Role Animated Reveal */}
          <div className="font-inter mt-1">
            <span className="flex gap-0.25 overflow-hidden text-xs sm:text-lg font-semibold text-neutral-500 w-auto">
              {roleChars.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 opacity-100"
                  style={{
                    animation: `fadeInChar 0.4s ease-out ${index * 0.05}s forwards`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>

          {/* Location */}
          {PERSONAL_INFO.location && (
            <p className="font-inter text-[9px] sm:text-xs text-neutral-500 font-semibold mt-0.5 truncate max-w-full">
              {PERSONAL_INFO.location}
            </p>
          )}

          {/* Clean Spotify Offline Status */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-neutral-400 w-fit">
            <svg className="w-4 h-4 fill-[#1DB954] shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-1.02-.36-.18-.6.36-1.02 1.02-1.2 4.2-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.36z"/>
            </svg>
            <span className="text-neutral-500 font-medium shrink-0">Spotify —</span>
            <span className="text-neutral-400 dark:text-neutral-500 font-medium">Offline</span>
          </div>

          {/* Contact Icons with NO Border */}
          <div className="flex items-center gap-1 mt-3">
            <a
              href="https://x.com/kyahikahein"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              aria-label="X (Twitter)"
              className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
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
              className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/harddhan"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@kyahikahein"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              aria-label="YouTube"
              className="p-2 rounded-lg text-neutral-500 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
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
              className="p-2 rounded-lg text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
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
              className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="/Dhanraj_Rajput_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume"
              aria-label="Resume"
              className="p-2 rounded-lg text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer border-0"
            >
              <Paperclip className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
