'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  thumbnail?: string;
  title: string;
  href: string;
  isViewMore?: boolean;
}

export function VideoCard({ thumbnail, title, href, isViewMore = false }: VideoCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 block"
    >
      <div className="relative aspect-[9/16] bg-card/50 overflow-hidden flex items-center justify-center">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
          {!isViewMore ? (
            <>
              <div className="p-3 rounded-full bg-primary text-primary-foreground">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <p className="text-sm font-medium text-center text-foreground">
                {title}
              </p>
            </>
          ) : (
            <>
              <div className="p-3 rounded-full bg-primary text-primary-foreground">
                <ExternalLink className="w-6 h-6" />
              </div>
              <p className="text-lg font-bold text-center text-foreground">
                {title}
              </p>
              <p className="text-xs text-muted-foreground text-center">
                Visit my Instagram profile
              </p>
            </>
          )}
        </div>
      </div>
    </motion.a>
  );
}
