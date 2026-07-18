'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VideoCard } from './VideoCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: 'Video Reel 1',
      href: 'https://www.instagram.com/reel/DOC4lTnD8FU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      thumbnail: 'https://www.instagram.com/reel/DOC4lTnD8FU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 2,
      title: 'Video Reel 2',
      href: 'https://www.instagram.com/reel/DM6yXmJIeKN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      thumbnail: 'https://www.instagram.com/reel/DM6yXmJIeKN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      title: 'Video Reel 3',
      href: 'https://www.instagram.com/reel/DZY7dsMMqiJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      thumbnail: 'https://www.instagram.com/reel/DZY7dsMMqiJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 4,
      title: 'Video Reel 4',
      href: 'https://www.instagram.com/reel/DYvrSGXM7rd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      thumbnail: 'https://www.instagram.com/reel/DYvrSGXM7rd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 5,
      title: 'Video Reel 5',
      href: 'https://www.instagram.com/reel/DW6hgremrC5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      thumbnail: 'https://www.instagram.com/reel/DW6hgremrC5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  return (
    <section className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Video Editing</h3>
        <p className="text-muted-foreground">
          A collection of Instagram Reels showcasing my video editing work.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.05 * index }}
          >
            <VideoCard
              title={video.title}
              href={video.href}
              thumbnail={video.thumbnail}
            />
          </motion.div>
        ))}

        {/* View More Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.25 }}
        >
          <VideoCard
            title="View More Videos"
            href="https://www.instagram.com/ll_ig__lucifer_ll/"
            isViewMore={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
