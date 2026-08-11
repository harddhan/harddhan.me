import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

export const LetsConnectSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/harddhan',
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhanrazz',
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: 'Twitter / X',
      url: 'https://x.com/kyahikahein',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 7.688 8.502 11.24H16.17l-5.214-6.817L4.99 21.178H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@kyahikahein',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-red-500">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/312a32c2qg4g2u',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1DB954]">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-.1.2-.36-.18-.6.36-1.02 1.02-1.2 4.2-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.36z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-2 mt-4 font-sans">
      <div className="flex flex-col gap-1">
        <h2 className="instrument-serif text-2xl sm:text-3xl text-black dark:text-white font-normal">
          Let's Connect
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Always open to discussing hardware, software, new project ideas, or just talking about games and music.
        </p>
      </div>

      {/* Social Links Row */}
      <div className="flex flex-wrap gap-2.5 mt-1">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-sm"
          >
            {social.icon}
            <span>{social.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        ))}
      </div>
    </div>
  );
};

