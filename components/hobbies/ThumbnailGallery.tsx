'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThumbnailCard } from './ThumbnailCard';
import { ThumbnailModal } from './ThumbnailModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ThumbnailGallery() {
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load images from public/thumbnail directory
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Since Next.js doesn't provide a direct way to read directory contents at runtime,
        // we'll use a dynamic import approach or manually list the images
        const imageFiles = [
          'ChatGPT Image Jul 11, 2026, 06_56_59 PM.png',
          'ChatGPT Image Jul 12, 2026, 05_37_26 PM.png',
          'ChatGPT Image Jul 5, 2026, 07_34_13 PM.png',
          'gemini-watermark-removed (1).png',
        ];

        const loadedImages = imageFiles.map((file) => ({
          src: `/thumbnail/${file}`,
          alt: `YouTube Thumbnail ${imageFiles.indexOf(file) + 1}`,
        }));

        setImages(loadedImages);
      } catch (error) {
        console.error('Failed to load thumbnail images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Thumbnail Design</h3>
        <p className="text-muted-foreground">
          A collection of YouTube thumbnails I've created for various content creators and channels.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-card/50 rounded-xl animate-pulse border border-border"
            />
          ))}
        </div>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.05 * index }}
            >
              <ThumbnailCard
                src={image.src}
                alt={image.alt}
                onClick={() => handleOpenModal(index)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No thumbnails found. Add images to /public/thumbnail/</p>
        </div>
      )}

      <ThumbnailModal
        isOpen={isModalOpen}
        images={images}
        currentIndex={selectedIndex}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}
