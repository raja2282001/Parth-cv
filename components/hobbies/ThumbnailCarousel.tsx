'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles directly into your component workflow
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);

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

  const handleOpenModal = (index: number) => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section className="space-y-6 px-4 max-w-7xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-left"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Thumbnail Design</h3>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          A collection of YouTube thumbnails I&apos;ve created for various content creators and channels.
        </p>
      </motion.div>

      <div className="relative group/carousel w-full">
        {isLoading ? (
          <div className="flex gap-4 md:gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 aspect-video bg-card/50 rounded-xl animate-pulse border border-border"
              />
            ))}
          </div>
        ) : images.length > 0 ? (
          <div className="w-full relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              onSwiper={setSwiperInstance}
              spaceBetween={24}
              slidesPerView={1}
              loop={true} // Creates physical slide clones for an infinite forward loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.swiper-next-btn',
                prevEl: '.swiper-prev-btn',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="w-full rounded-xl overflow-hidden"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="h-full select-none">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="w-full h-full"
                  >
                    <ThumbnailCard
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleOpenModal(index)}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Targets mapped straight to Swiper settings */}
            <button
              className="swiper-prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-background border border-border shadow-md backdrop-blur-sm md:opacity-0 md:group-hover/carousel:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Previous thumbnail"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              className="swiper-next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-background border border-border shadow-md backdrop-blur-sm md:opacity-0 md:group-hover/carousel:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Next thumbnail"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-xl bg-card/20">
            <p className="text-muted-foreground text-sm">No thumbnails found. Add images to /public/thumbnail/</p>
          </div>
        )}
      </div>

      {/* {images.length > 0 && (
        <div className="text-center text-xs md:text-sm text-muted-foreground select-none">
          Click to expand view • Swiper infinite loop active
        </div>
      )} */}

      <ThumbnailModal
        isOpen={isModalOpen}
        images={images}
        currentIndex={selectedIndex}
        onClose={handleCloseModal}
        onPrevious={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        onNext={() => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
}