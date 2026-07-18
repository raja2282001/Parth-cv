'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoPlayerProps {
  isOpen: boolean;
  video: {
    id: number;
    title: string;
    embedUrl: string;
  } | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  canNavigate?: {
    prev: boolean;
    next: boolean;
  };
}

export function VideoPlayer({
  isOpen,
  video,
  onClose,
  onPrevious,
  onNext,
  canNavigate = { prev: false, next: false },
}: VideoPlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Close video player"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Container */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Video Title */}
          <div className="mt-4 text-white text-center">
            <h3 className="text-lg font-semibold">{video.title}</h3>
          </div>

          {/* Navigation Buttons */}
          {(onPrevious || onNext) && (
            <div className="flex justify-center gap-4 mt-6">
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  disabled={!canNavigate.prev}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  disabled={!canNavigate.next}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
