'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ThumbnailCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export function ThumbnailCard({ src, alt, onClick }: ThumbnailCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary w-full bg-card/30"
      aria-label={`View ${alt}`}
    >
      <div className="relative w-full overflow-hidden aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </motion.button>
  );
}