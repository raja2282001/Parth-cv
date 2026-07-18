'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';

interface ThumbnailModalProps {
  isOpen: boolean;
  images: Array<{ src: string; alt: string }>;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  autoPlayInterval?: number; // Optional prop to customize timing (defaults to 4000ms)
}

export function ThumbnailModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  autoPlayInterval = 4000,
}: ThumbnailModalProps) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Auto-slide effect
  useEffect(() => {
    if (!isOpen || !isAutoPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      onNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isOpen, isAutoPlaying, currentIndex, onNext, autoPlayInterval, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen media display"
          >
            {/* Top Toolbar Container */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-2">
              {/* Play/Pause Toggle Switch */}
              <button
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 text-xs transition-colors focus:outline-none"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Start slideshow"}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Autoplay On</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Autoplay Paused</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close interactive window"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Core Image Window Frame */}
            <div 
              className="relative w-full max-w-5xl aspect-video bg-black/40 rounded-xl overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle hover warning overlay showing it's paused */}
              {!isAutoPlaying && (
                <div className="absolute top-3 left-3 bg-black/60 pointer-events-none text-[10px] text-white/60 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Playback frozen while hovering
                </div>
              )}
            </div>

            {/* Navigation and Indicator Row */}
            <div className="flex items-center justify-between w-full max-w-5xl mt-4 px-2">
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  onPrevious();
                }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Navigate to previous item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs md:text-sm text-neutral-400 font-medium tabular-nums select-none tracking-wider">
                {currentIndex + 1} / {images.length}
              </span>

              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  onNext();
                }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Navigate to next item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}