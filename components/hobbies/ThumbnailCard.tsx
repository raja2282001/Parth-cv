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
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
      aria-label={`View ${alt}`}
    >
      <div className="relative w-full overflow-hidden bg-card/50" style={{ aspectRatio: '1' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </motion.button>
  );
}
