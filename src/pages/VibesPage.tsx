import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { VibeItem } from '../types';

interface VibesPageProps {
  onBack: () => void;
}

const globPublicVibes = import.meta.glob(
  ['/public/vibes/*.{jpg,jpeg,png,gif,webp,mp4,webm,svg,MOV,mov}', '/vibes/*.{jpg,jpeg,png,gif,webp,mp4,webm,svg,MOV,mov}'],
  { eager: true, import: 'default' }
);

const parseCreationTimestamp = (str: string): number => {
  const waMatch = str.match(/(\d{4})-(\d{2})-(\d{2})\s+at\s+(\d{1,2})\.(\d{2})\.(\d{2})\s*(AM|PM)?/i);
  if (waMatch) {
    let [_, year, month, day, hoursStr, mins, secs, ampm] = waMatch;
    let hours = parseInt(hoursStr, 10);
    if (ampm) {
      if (ampm.toUpperCase() === 'PM' && hours < 12) hours += 12;
      if (ampm.toUpperCase() === 'AM' && hours === 12) hours = 0;
    }
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hours, parseInt(mins), parseInt(secs)).getTime();
  }

  const matchDashed = str.match(/(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/);
  if (matchDashed) {
    const [_, year, month, day, hour, min, sec] = matchDashed;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(min), parseInt(sec)).getTime();
  }

  const matchDigits = str.match(/(\d{4})(\d{2})(\d{2})/);
  if (matchDigits) {
    const [_, year, month, day] = matchDigits;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();
  }

  return 0;
};

const getDiscoveredVibes = (): VibeItem[] => {
  const discovered: VibeItem[] = [];
  const entries = Object.keys(globPublicVibes);

  entries.forEach((filePath, idx) => {
    const rawUrl = globPublicVibes[filePath] as string;
    let finalUrl = rawUrl;
    if (typeof rawUrl === 'string' && rawUrl.startsWith('/public')) {
      finalUrl = rawUrl.replace(/^\/public/, '');
    } else if (filePath.startsWith('/public')) {
      finalUrl = filePath.replace(/^\/public/, '');
    }

    const fileName = filePath.split('/').pop() || `media-${idx}`;
    const cleanTitle = fileName
      .replace(/\.[^/.]+$/, '')
      .replace(/^[0-9]+[_-]/, '')
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const isVideo = /\.(mp4|webm|mov)$/i.test(fileName);

    discovered.push({
      id: `discovered-${fileName}`,
      title: cleanTitle || `Vibe ${idx + 1}`,
      url: finalUrl,
      width: 400,
      height: 300,
      category: 'Vibes',
      mediaType: isVideo ? 'video' : 'image',
    });
  });

  for (let i = discovered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [discovered[i], discovered[j]] = [discovered[j], discovered[i]];
  }

  return discovered;
};

export const VibesPage: React.FC<VibesPageProps> = ({ onBack }) => {
  const allVibes = useMemo(() => {
    return getDiscoveredVibes();
  }, []);

  return (
    <div className="w-full flex flex-col font-sans pb-24 animate-fadeIn">
      <div className="flex flex-col gap-3 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-black dark:hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col gap-1">
          <h1 className="instrument-serif text-4xl sm:text-5xl text-black dark:text-white tracking-tight">
            Vibes
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A collection of images, screenshots, and visual notes from root/vibes.
          </p>
        </div>
      </div>

      {allVibes.length > 0 && (
        <div className="mt-6 w-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 space-y-3">
          {allVibes.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative select-none overflow-hidden rounded-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
            >
              {item.mediaType === 'video' ? (
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain rounded-none block"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-none block"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
