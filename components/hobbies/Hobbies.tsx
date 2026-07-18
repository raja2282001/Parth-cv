'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ThumbnailCarousel } from './ThumbnailCarousel';
import { VideoCarousel } from './VideoCarousel';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Creative Hobbies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Besides software development, I enjoy creating YouTube thumbnails and editing short-form videos for social media.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Thumbnail Carousel Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <ThumbnailCarousel />
          </motion.div>

          {/* Video Carousel Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <VideoCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
