'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Share2 } from 'lucide-react';

interface ReelData {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  instagramUrl: string;
}

const reels: ReelData[] = [
  {
    id: 1,
    title: 'Cinematic Edit',
    description: 'Professional cinematic video editing',
    videoUrl: '/videos/reel1.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DOC4lTnD8FU/',
  },
  {
    id: 2,
    title: 'Smooth Transitions',
    description: 'Dynamic transition effects',
    videoUrl: '/videos/reel2.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DM6yXmJIeKN/',
  },
  {
    id: 3,
    title: 'Color Grading',
    description: 'Advanced color correction techniques',
    videoUrl: '/videos/reel3.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DZY7dsMMqiJ/',
  },
  {
    id: 4,
    title: 'Motion Graphics',
    description: 'Creative motion design',
    videoUrl: '/videos/reel4.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DYvrSGXM7rd/',
  },
  {
    id: 5,
    title: 'Social Content',
    description: 'Engaging short-form content',
    videoUrl: '/videos/reel5.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DW6hgremrC5/',
  },
  {
    id: 6,
    title: 'Visual Effects',
    description: 'Professional VFX editing',
    videoUrl: '/videos/reel6.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DM6yXmJIeKN/',
  },
];

interface ReelCardProps {
  reel: ReelData;
  index: number;
}

function ReelCard({ reel, index }: ReelCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (!isHovered && videoRef.current && isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isHovered, isPlaying]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 transition-all duration-300 group-hover:border-primary/50">
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm" />

        {/* Video Container */}
        <div className="relative aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
          >
            <source src={reel.videoUrl} type="video/mp4" />
          </video>

          {/* Play Icon Overlay */}
          <motion.div
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none"
          >
            <div className="p-4 rounded-full bg-primary/90 text-white">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </motion.div>
        </div>

        {/* Content Overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
        >
          <h3 className="text-lg font-bold text-white text-center mb-2">
            {reel.title}
          </h3>
          <p className="text-sm text-white/80 text-center mb-4">
            {reel.description}
          </p>
        </motion.div>

        {/* Instagram Button */}
        <motion.a
          href={reel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4 z-10 p-3 rounded-full bg-primary/90 hover:bg-primary text-white transition-colors duration-300 group-hover:pointer-events-auto pointer-events-none group-hover:pointer-events-auto"
        >
          <Share2 className="w-5 h-5" />
        </motion.a>

        {/* Watch on Instagram Badge */}
        <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/40 backdrop-blur-sm group-hover:pointer-events-auto pointer-events-none text-white text-xs font-medium">
          @reels
        </div>
      </div>
    </motion.div>
  );
}

export function InstagramReels() {
  return (
    <section id="video-editing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Video Editing Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional Video Editing & Motion Graphics
          </p>
          <p className="text-base text-muted-foreground/80 max-w-3xl mx-auto mt-3">
            A collection of my latest Instagram Reels showcasing video editing, motion graphics, cinematic edits, transitions, color grading, and social media content creation.
          </p>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://www.instagram.com/ll_ig__lucifer_ll/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Share2 className="w-5 h-5" />
            View More on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
