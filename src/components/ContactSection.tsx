import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Paperclip } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/haydha',
      icon: <Github className="text-xl w-5 h-5 text-black dark:text-white" />,
      external: true,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhanrazz',
      icon: <Linkedin className="text-xl w-5 h-5 text-black dark:text-white" />,
      external: true,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/kyahikahein',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black dark:text-white">
          <path d="M18.244 2.25h3.308l-7.227 7.688 8.502 11.24H16.17l-5.214-6.817L4.99 21.178H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      external: true,
    },
    {
      name: 'Mail',
      url: 'mailto:dhanraz0213@gmail.com',
      icon: <Mail className="text-xl w-5 h-5 text-black dark:text-white" />,
      external: false,
    },
    {
      name: 'Resume',
      url: '[RESUME_URL]',
      icon: <Paperclip className="text-xl w-5 h-5 text-black dark:text-white" />,
      external: true,
    },
  ];

  return (
    <div className="w-full h-auto mt-6 gap-1 flex flex-col">
      {/* Title */}
      <div className="w-full h-10 px-3 flex items-center">
        <p className="instrument-serif text-3xl text-black dark:text-white">
          Contact
        </p>
      </div>

      {/* Grid of 5 cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="w-full h-full"
          >
            <div className="w-full h-full min-h-14 flex items-center justify-start px-3 gap-2 cursor-pointer hover:bg-white/5 transition-all duration-200 group rounded-md">
              <div className="size-10 rounded-lg flex justify-center items-center bg-white/5 group-hover:bg-white/10 shrink-0">
                {link.icon}
              </div>
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <p className="font-inter text-sm sm:text-[15px] text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {link.name}
                </p>
                <ArrowUpRight className="text-neutral-500 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
