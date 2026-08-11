import React, { useState, useEffect, useRef } from 'react';
import { Camera, Video, Sparkles, X, Check } from 'lucide-react';
import { LazyImage } from './LazyImage';

interface PhotoClip {
  id: string;
  src: string;
  duration?: string;
  timestamp: string;
}

export const PhotoBooth: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>('grayscale(100%) contrast(115%)');
  const [showEffects, setShowEffects] = useState<boolean>(false);
  const [flash, setFlash] = useState<boolean>(false);

  // Default sample clips for the filmstrip as seen in screenshot
  const [clips, setClips] = useState<PhotoClip[]>([
    {
      id: 'clip-1',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      duration: '00:20',
      timestamp: '1'
    },
    {
      id: 'clip-2',
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      duration: '00:10',
      timestamp: '2'
    },
    {
      id: 'clip-3',
      src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
      duration: '00:48',
      timestamp: '3'
    }
  ]);

  const [selectedClip, setSelectedClip] = useState<string | null>(null);

  // Filter options
  const filterOptions = [
    { label: 'B&W Classic', filter: 'grayscale(100%) contrast(115%)' },
    { label: 'Noir', filter: 'grayscale(100%) contrast(150%) brightness(90%)' },
    { label: 'Vintage', filter: 'sepia(60%) contrast(110%) brightness(95%)' },
    { label: 'Cyber', filter: 'hue-rotate(180deg) contrast(120%)' },
    { label: 'Normal', filter: 'none' }
  ];

  useEffect(() => {
    let currentStream: MediaStream | null = null;

    async function initCamera() {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }
          });
          currentStream = mediaStream;
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        } else {
          setCameraError(true);
        }
      } catch (err) {
        console.log('Camera access not granted or unavailable, using fallback', err);
        setCameraError(true);
      }
    }

    initCamera();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takeSnap = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);

    if (videoRef.current && !cameraError) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.filter = activeFilter;
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');

        const newClip: PhotoClip = {
          id: `snap-${Date.now()}`,
          src: dataUrl,
          duration: '00:05',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setClips((prev) => [newClip, ...prev]);
        setSelectedClip(dataUrl);
      }
    } else {
      // Fallback snap
      const fallbackImgs = [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80'
      ];
      const randomImg = fallbackImgs[Math.floor(Math.random() * fallbackImgs.length)];
      const newClip: PhotoClip = {
        id: `snap-${Date.now()}`,
        src: randomImg,
        duration: '00:05',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setClips((prev) => [newClip, ...prev]);
      setSelectedClip(randomImg);
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto md:ml-auto flex flex-col font-mono text-xs">
      {/* Title Label */}
      <div className="text-[11px] font-mono text-neutral-400 mb-1.5 flex items-center justify-between px-1">
        <span>Photo Booth</span>
        {stream && <span className="flex items-center gap-1 text-[10px] text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE</span>}
      </div>

      {/* Outer Card Container */}
      <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-[#0c0c0e] shadow-2xl flex flex-col">
        {/* Flash Effect Overlay */}
        {flash && <div className="absolute inset-0 bg-white z-40 transition-opacity duration-200" />}

        {/* Camera Display Window */}
        <div className="relative w-full aspect-[4/3] bg-neutral-950 overflow-hidden flex items-center justify-center">
          {selectedClip ? (
            <div className="relative w-full h-full">
              <img
                src={selectedClip}
                alt="Selected photo"
                className="w-full h-full object-cover"
                style={{ filter: activeFilter }}
              />
              <button
                onClick={() => setSelectedClip(null)}
                className="absolute top-2 right-2 p-1.5 bg-black/70 hover:bg-black rounded-full text-white transition-colors"
                title="Return to live view"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : stream && !cameraError ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover transform scale-x-[-1]"
              style={{ filter: activeFilter }}
            />
          ) : (
            <div className="relative w-full h-full bg-neutral-900 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
                alt="Photo Booth Preview"
                className="w-full h-full object-cover opacity-90"
                style={{ filter: activeFilter }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                <p className="text-[10px] text-neutral-400">Click shutter to capture snap</p>
              </div>
            </div>
          )}
        </div>

        {/* Filmstrip Clips Reel */}
        <div className="w-full bg-[#111114] border-t border-neutral-800/80 px-2 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <div className="p-1 text-neutral-500 shrink-0">
            <Video className="w-3.5 h-3.5 text-neutral-400" />
          </div>

          <div className="flex items-center gap-1.5 min-w-0 flex-1 overflow-x-auto scrollbar-none py-0.5">
            {clips.map((clip) => (
              <button
                key={clip.id}
                onClick={() => setSelectedClip(clip.src)}
                className={`relative group shrink-0 w-12 h-10 rounded border overflow-hidden transition-all ${
                  selectedClip === clip.src
                    ? 'border-white scale-105 shadow-md'
                    : 'border-neutral-700/80 hover:border-neutral-400'
                }`}
              >
                <LazyImage
                  src={clip.src}
                  alt="Clip thumbnail"
                  className="w-full h-full object-cover grayscale brightness-90"
                  wrapperClassName="w-full h-full"
                />
                {clip.duration && (
                  <span className="absolute bottom-0.5 right-0.5 text-[8px] bg-black/80 text-white px-0.5 rounded font-mono">
                    {clip.duration}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="w-full bg-[#08080a] border-t border-neutral-800 px-3 py-2.5 flex items-center justify-between">
          {/* Left Icon */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedClip(null)}
              className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Camera view"
            >
              <Video className="w-4 h-4" />
            </button>
          </div>

          {/* Center Circular Shutter Button */}
          <button
            onClick={takeSnap}
            className="group relative p-1 rounded-full border-2 border-white hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer"
            title="Take Photo"
          >
            <div className="w-6 h-6 rounded-full bg-white group-hover:bg-neutral-200 transition-colors" />
          </button>

          {/* Right Effects Button */}
          <div className="relative">
            <button
              onClick={() => setShowEffects(!showEffects)}
              className="px-2.5 py-1 rounded border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-[10px] font-mono flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Effects</span>
            </button>

            {/* Effects Dropdown Menu */}
            {showEffects && (
              <div className="absolute right-0 bottom-full mb-2 w-36 bg-[#16161a] border border-neutral-700 rounded-lg shadow-xl p-1 z-50 flex flex-col gap-0.5">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => {
                      setActiveFilter(opt.filter);
                      setShowEffects(false);
                    }}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded text-[10px] font-mono transition-colors text-left ${
                      activeFilter === opt.filter
                        ? 'bg-neutral-800 text-white font-semibold'
                        : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {activeFilter === opt.filter && <Check className="w-3 h-3 text-emerald-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
