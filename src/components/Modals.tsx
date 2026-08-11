import React, { useState } from 'react';
import { X, ExternalLink, Send, CheckCircle2, Book, Heart } from 'lucide-react';
import { EXPERIENCES, PROJECTS, BOOKS, FAVORITES } from '../data/portfolioData';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#121111] text-black dark:text-white border border-dashed border-neutral-300 dark:border-[#272727] w-full max-w-lg rounded-xl p-6 relative font-inter shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="instrument-serif text-3xl mb-6">Experience</h3>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-dashed border-neutral-300 dark:border-[#272727] pl-4 relative"
            >
              <span className="absolute -left-[5px] top-1 size-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-neutral-500 block mb-1">
                {exp.period}
              </span>
              <h4 className="text-base font-semibold text-black dark:text-white">
                {exp.role}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                {exp.company}
              </p>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2 py-0.5 rounded border border-dashed border-neutral-300 dark:border-[#272727] bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#121111] text-black dark:text-white border border-dashed border-neutral-300 dark:border-[#272727] w-full max-w-md rounded-xl p-6 relative font-inter shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="instrument-serif text-3xl mb-1">Let's Talk</h3>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
          Send a message directly.
        </p>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
            <h4 className="text-lg font-semibold">Message Sent!</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Thank you for reaching out. We will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="[Your Name]"
                className="w-full bg-neutral-100 dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-neutral-100 dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 mb-1 font-medium">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="[Insert your message here...]"
                className="w-full bg-neutral-100 dark:bg-[#181717] border border-dashed border-neutral-300 dark:border-[#272727] rounded-md px-3 py-2 text-black dark:text-white focus:outline-none focus:border-neutral-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-98 transition-all"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#121111] text-black dark:text-white border border-dashed border-neutral-300 dark:border-[#272727] w-full max-w-2xl max-h-[85vh] overflow-y-auto scrollbar-hide rounded-xl p-6 relative font-inter shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="instrument-serif text-3xl mb-1">All Projects</h3>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
          Archive of projects, experiments, and applications.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-dashed border-neutral-300 dark:border-[#272727] rounded-lg bg-neutral-50 dark:bg-white/2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-base">{project.title}</h4>
                  <span className="text-[10px] text-green-500 font-semibold">• Live</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded border border-dotted border-neutral-300 dark:border-[#272727] text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BooksModal: React.FC<BooksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#121111] text-black dark:text-white border border-dashed border-neutral-300 dark:border-[#272727] w-full max-w-lg max-h-[85vh] overflow-y-auto scrollbar-hide rounded-xl p-6 relative font-inter shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Book className="w-6 h-6 text-emerald-500" />
          <h3 className="instrument-serif text-3xl">Books Shelf</h3>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
          A list of books I'm reading, completed, or planning to read.
        </p>

        <div className="flex flex-col gap-3">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="p-4 border border-dashed border-neutral-300 dark:border-[#272727] rounded-lg bg-neutral-50 dark:bg-white/2 flex flex-col gap-1.5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-sm">{book.title}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">{book.author}</p>
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border border-dashed ${
                    book.status === 'Reading'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400'
                      : book.status === 'Completed'
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                      : 'bg-neutral-500/10 border-neutral-500/40 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {book.status}
                </span>
              </div>

              {book.notes && (
                <p className="text-xs text-neutral-700 dark:text-neutral-300 italic mt-1 leading-relaxed">
                  {book.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#121111] text-black dark:text-white border border-dashed border-neutral-300 dark:border-[#272727] w-full max-w-lg max-h-[85vh] overflow-y-auto scrollbar-hide rounded-xl p-6 relative font-inter shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Heart className="w-6 h-6 text-rose-500" />
          <h3 className="instrument-serif text-3xl">Favorites & Media</h3>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
          A curated collection of my favorite movies, games, TV shows, and songs.
        </p>

        <div className="flex flex-col gap-3">
          {FAVORITES.map((fav) => (
            <div
              key={fav.id}
              className="p-4 border border-dashed border-neutral-300 dark:border-[#272727] rounded-lg bg-neutral-50 dark:bg-white/2 flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm">{fav.title}</h4>
                <span className="text-[10px] font-mono text-neutral-500 px-2 py-0.5 border border-dotted border-neutral-300 dark:border-[#272727] rounded">
                  {fav.category}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                {fav.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
