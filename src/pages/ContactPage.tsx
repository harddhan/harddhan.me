import React, { useState } from 'react';
import { ArrowLeft, Mail, Github, Linkedin, Paperclip, Send, CheckCircle2, MapPin, MessageSquare, Clock } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  const socialCards = [
    {
      name: 'GitHub',
      handle: '@haydha',
      url: 'https://github.com/haydha',
      icon: <Github className="w-5 h-5 text-black dark:text-white" />,
    },
    {
      name: 'LinkedIn',
      handle: 'dhanrazz',
      url: 'https://www.linkedin.com/in/dhanrazz',
      icon: <Linkedin className="w-5 h-5 text-black dark:text-white" />,
    },
    {
      name: 'Twitter / X',
      handle: '@kyahikahein',
      url: 'https://x.com/kyahikahein',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-black dark:text-white">
          <path d="M18.244 2.25h3.308l-7.227 7.688 8.502 11.24H16.17l-5.214-6.817L4.99 21.178H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      handle: 'dhanraz0213@gmail.com',
      url: 'mailto:dhanraz0213@gmail.com',
      icon: <Mail className="w-5 h-5 text-black dark:text-white" />,
    },
    {
      name: 'Resume',
      handle: 'View Resume',
      url: '[RESUME_URL]',
      icon: <Paperclip className="w-5 h-5 text-black dark:text-white" />,
    },
  ];

  return (
    <div className="w-full flex flex-col font-inter animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-4 pb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-black dark:hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-8 h-8 text-emerald-500" />
            <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white">
              Let's Connect
            </h1>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            Have a project in mind, an engineering query, or just want to chat about design & software? Drop a message below or connect directly on social platforms.
          </p>
        </div>

        {/* Availability Pill */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new projects & roles</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>Typical response: within 24 hours</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {/* Contact Form */}
        <div className="p-6 rounded-xl bg-white/5 flex flex-col gap-4">
          <h2 className="instrument-serif text-2xl text-black dark:text-white">
            Send a Direct Message
          </h2>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs">
                Thank you for reaching out. Your message has been received and I'll get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-semibold text-neutral-500 underline hover:text-black dark:hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-inter">
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="[Your Name]"
                  className="w-full bg-white dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-white dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                  Subject / Inquiry
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="[Project Inquiry / Hello]"
                  className="w-full bg-white dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, timeline, or idea..."
                  className="w-full bg-white dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Submit Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Social Cards & Direct Info */}
        <div className="flex flex-col gap-4">
          <h2 className="instrument-serif text-2xl text-black dark:text-white">
            Direct Channels
          </h2>

          <div className="flex flex-col gap-2.5">
            {socialCards.map((card) => (
              <a
                key={card.name}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-black dark:text-white">
                      {card.name}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono truncate max-w-[200px] sm:max-w-[260px]">
                      {card.handle}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all">
                  Connect →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
