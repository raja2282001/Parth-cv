'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ThumbnailCard } from './ThumbnailCard';
import { ThumbnailModal } from './ThumbnailModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ThumbnailCarousel() {
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Load images from public/thumbnail directory
  useEffect(() => {
    const loadImages = async () => {
      try {
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

  // Update scroll buttons state
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
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
          A collection of YouTube thumbnails I&apos;ve created for various content creators and channels.
        </p>
      </motion.div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          {isLoading ? (
            <div className="flex gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-1/2 lg:min-w-1/3 aspect-square bg-card/50 rounded-xl animate-pulse border border-border"
                />
              ))}
            </div>
          ) : images.length > 0 ? (
            <div className="flex gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="min-w-full md:min-w-1/2 lg:min-w-1/3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
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
        </div>

        {/* Navigation Buttons */}
        {images.length > 0 && (
          <>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous thumbnail"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next thumbnail"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </>
        )}
      </div>

      {/* Info text */}
      {images.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          Click to view full image • Use arrows to browse more
        </div>
      )}

      <ThumbnailModal
        isOpen={isModalOpen}
        images={images}
        currentIndex={selectedIndex}
        onClose={() => setIsModalOpen(false)}
        onPrevious={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        onNext={() => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
}
