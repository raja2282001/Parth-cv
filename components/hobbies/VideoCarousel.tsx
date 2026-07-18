'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { VideoPlayer } from './VideoPlayer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const videosData = [
  {
    id: 1,
    title: 'Video Editing Reel',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 2,
    title: 'Creative Editing',
    embedUrl: 'https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1',
  },
  {
    id: 3,
    title: 'Motion Design',
    embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1',
  },
  {
    id: 4,
    title: 'Visual Effects',
    embedUrl: 'https://www.youtube.com/embed/ZonvMhT5c6w?autoplay=1',
  },
  {
    id: 5,
    title: 'Professional Edit',
    embedUrl: 'https://www.youtube.com/embed/2Xc3p3kXHv8?autoplay=1',
  },
];

export function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<typeof videosData[0] | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

  const handlePlayVideo = (video: typeof videosData[0], index: number) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
    setIsPlayerOpen(true);
  };

  const handlePreviousVideo = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : videosData.length - 1;
    setSelectedVideo(videosData[newIndex]);
    setCurrentVideoIndex(newIndex);
  };

  const handleNextVideo = () => {
    const newIndex = currentVideoIndex < videosData.length - 1 ? currentVideoIndex + 1 : 0;
    setSelectedVideo(videosData[newIndex]);
    setCurrentVideoIndex(newIndex);
  };

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
          A collection of my video editing work. Click on any video to watch it with autoplay.
        </p>
      </motion.div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {videosData.map((video, index) => (
              <motion.div
                key={video.id}
                className="min-w-full md:min-w-1/2 lg:min-w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <VideoCard
                  title={video.title}
                  onClick={() => handlePlayVideo(video, index)}
                  isViewMore={false}
                />
              </motion.div>
            ))}

            {/* View More Card */}
            <motion.div
              className="min-w-full md:min-w-1/2 lg:min-w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <VideoCard
                title="View More Videos"
                href="https://www.instagram.com/ll_ig__lucifer_ll/"
                isViewMore={true}
              />
            </motion.div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      {/* Info text */}
      <div className="text-center text-sm text-muted-foreground">
        Use arrows to browse videos • Click to play with autoplay enabled
      </div>

      {/* Video Player Modal */}
      <VideoPlayer
        isOpen={isPlayerOpen}
        video={selectedVideo}
        onClose={() => setIsPlayerOpen(false)}
        onPrevious={handlePreviousVideo}
        onNext={handleNextVideo}
        canNavigate={{
          prev: currentVideoIndex > 0 || videosData.length > 1,
          next: currentVideoIndex < videosData.length - 1 || videosData.length > 1,
        }}
      />
    </section>
  );
}
