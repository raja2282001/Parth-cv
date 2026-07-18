'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  title: string;
  href: string;
  isViewMore?: boolean;
}

export function VideoCard({ title, href, isViewMore = false }: VideoCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 block w-full"
    >
      <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden flex items-center justify-center">
        {/* Background gradient pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-6 text-center">
          {!isViewMore ? (
            <>
              <div className="p-4 rounded-full bg-primary/80 group-hover:bg-primary text-primary-foreground transition-colors duration-300">
                <Play className="w-8 h-8 fill-current" />
              </div>
              <p className="text-sm font-medium text-foreground line-clamp-2">
                {title}
              </p>
              <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to watch
              </p>
            </>
          ) : (
            <>
              <div className="p-4 rounded-full bg-primary/80 group-hover:bg-primary text-primary-foreground transition-colors duration-300">
                <ExternalLink className="w-8 h-8" />
              </div>
              <p className="text-lg font-bold text-foreground">
                {title}
              </p>
              <p className="text-xs text-muted-foreground">
                Visit Instagram
              </p>
            </>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.a>
  );
}
