import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string | string[];
  fallbackSrc?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  placeholderColor?: string;
  rootMargin?: string;
  timeoutMs?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  wrapperClassName = '',
  placeholderColor,
  rootMargin = '120px',
  timeoutMs = 3500,
  onLoad,
  onError,
  ...restProps
}) => {
  const sources = React.useMemo(() => {
    const list: string[] = [];
    if (Array.isArray(src)) {
      list.push(...src.filter(Boolean));
    } else if (src) {
      list.push(src);
    }
    if (fallbackSrc && !list.includes(fallbackSrc)) {
      list.push(fallbackSrc);
    }
    return list;
  }, [src, fallbackSrc]);

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeSrc = sources[currentSourceIndex];

  useEffect(() => {
    setCurrentSourceIndex(0);
    setIsLoaded(false);
    setHasError(false);
  }, [src, fallbackSrc]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  // Timeout logic: if image takes longer than timeoutMs to load, switch to next source or fail fast
  useEffect(() => {
    if (isInView && !isLoaded && !hasError && activeSrc) {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        if (currentSourceIndex < sources.length - 1) {
          setCurrentSourceIndex((prev) => prev + 1);
        } else {
          setHasError(true);
        }
      }, timeoutMs);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isInView, isLoaded, hasError, activeSrc, currentSourceIndex, sources.length, timeoutMs]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (currentSourceIndex < sources.length - 1) {
      setCurrentSourceIndex((prev) => prev + 1);
    } else {
      setHasError(true);
      if (onError) {
        onError(e);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={placeholderColor ? { backgroundColor: placeholderColor } : undefined}
    >
      {/* Blurred Skeleton/Placeholder overlay shown until image is fully loaded */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-neutral-200/80 dark:bg-neutral-800/80 animate-pulse backdrop-blur-md z-10 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Actual Image loaded lazily via Intersection Observer */}
      {isInView && activeSrc && !hasError && (
        <img
          key={activeSrc}
          src={activeSrc}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`transition-all duration-500 ease-out ${
            isLoaded
              ? 'opacity-100 blur-0 scale-100'
              : 'opacity-0 blur-md scale-105'
          } ${className}`}
          {...restProps}
        />
      )}
    </div>
  );
};
