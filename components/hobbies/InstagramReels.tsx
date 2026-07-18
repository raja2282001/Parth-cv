'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, X, Volume2, VolumeX } from 'lucide-react';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styling rules
import 'swiper/css';

interface ReelData {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  instagramUrl: string;
  aspectRatio: 'vertical' | 'widescreen';
}

const reels: ReelData[] = [
  // --- ANIME EDITS (Vertical 9:16) ---
  {
    id: 1,
    title: 'Saiyan Spirit Edit',
    description: 'Kinetic aura effects and high-energy power-up transitions',
    videoUrl: '/videos/reel1.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DOC4lTnD8FU/',
    aspectRatio: 'vertical',
  },
  {
    id: 2,
    title: 'Monarch Leveling FX',
    description: 'Dark shadow aesthetics and fluid, hyper-speed slashing motions',
    videoUrl: '/videos/reel2.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DM6yXmJIeKN/',
    aspectRatio: 'vertical',
  },
  {
    id: 3,
    title: 'Slayer Breathing Style',
    description: 'Cinematic color grading paired with elemental sword strike elements',
    videoUrl: '/videos/reel3.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DZY7dsMMqiJ/',
    aspectRatio: 'vertical',
  },
  {
    id: 4,
    title: 'Domain Expansion Motion',
    description: 'Complex visual styling and mind-bending space-warp graphics',
    videoUrl: '/videos/reel4.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DYvrSGXM7rd/',
    aspectRatio: 'vertical',
  },
  {
    id: 5,
    title: 'Ninja Velocity flow',
    description: 'Engaging, fast-paced frame cuts and custom impact frames',
    videoUrl: '/videos/reel5.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DW6hgremrC5/',
    aspectRatio: 'vertical',
  },
  {
    id: 6,
    title: 'Titan Rumble Compositing',
    description: 'Scale-shifting camera shakes and heavy-impact VFX editing',
    videoUrl: '/videos/reel6.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DSRPMCECAKv/',
    aspectRatio: 'vertical',
  },
  {
    id: 7,
    title: 'Cyber Netrunner Directing',
    description: 'Innovative neon glitch effects and dystopian stylistic direction',
    videoUrl: '/videos/reel7.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DFZTOS7IDp-/',
    aspectRatio: 'vertical',
  },

  // --- GAMING EDITS (Widescreen 16:9 / Full YouTube Size) ---
  {
    id: 8,
    title: 'Battle Royale Velocity (PUBG)',
    description: 'Syncing tactical sniper sequences to high-tempo audio beats',
    videoUrl: '/videos/gaming1.mp4', 
    instagramUrl: 'https://www.instagram.com/p/CCtgsbChn0G/',
    aspectRatio: 'widescreen',
  },
  {
    id: 9,
    title: 'Tactical Squad Wipe (PUBG)',
    description: 'Smooth multi-kill tracking and dynamic color correction filters',
    videoUrl: '/videos/gaming2.mp4',
    instagramUrl: 'https://www.instagram.com/p/CGALgAyh7z4/',
    aspectRatio: 'widescreen',
  },
  {
    id: 10,
    title: 'Surprise Drop Sequence (PUBG)',
    description: 'High-impact motion tracking during critical intense vehicle skirmishes',
    videoUrl: '/videos/gaming3.mp4',
    instagramUrl: 'https://www.instagram.com/p/CF1f4O9hBxd/',
    aspectRatio: 'widescreen',
  },
  {
    id: 11,
    title: 'Survival Instinct Edit (PUBG)',
    description: 'Intense crosshair overlays and velocity-mapped clutch gameplay clips',
    videoUrl: '/videos/gaming4.mp4',
    instagramUrl: 'https://www.instagram.com/p/CFhhLA0h2jp/',
    aspectRatio: 'widescreen',
  },
  {
    id: 12,
    title: 'Frontline Warfare Flow (COD)',
    description: 'Widescreen sequence highlighting weapon mastery and lightning fast target shifts',
    videoUrl: '/videos/gaming5.mp4',
    instagramUrl: 'https://www.instagram.com/tv/CE28fIWhQ0Y/',
    aspectRatio: 'widescreen',
  },
];

interface ReelCardProps {
  reel: ReelData;
  onClick: () => void;
}

function ReelCard({ reel, onClick }: ReelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Observe the parent container layout rather than internal scaled assets 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            if (err.name !== 'AbortError') console.warn('Autoplay failed:', err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 } // Adjusted lower threshold ensures broad viewport detection
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={onClick}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/50 bg-neutral-950 cursor-pointer flex flex-col justify-center"
    >
      {/* Background Subtle Blur Effect for Widescreen cards */}
      {reel.aspectRatio === 'widescreen' && (
        <div className="absolute inset-0 opacity-20 blur-md pointer-events-none scale-110 z-0">
          <video src={reel.videoUrl} muted loop playsInline autoPlay className="w-full h-full object-cover" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-[1px] z-10 pointer-events-none" />

      {/* Dynamic Video Layer sizing inside Swiper Track */}
      <div className={`relative w-full z-0 overflow-hidden flex items-center justify-center bg-black ${
        reel.aspectRatio === 'widescreen' ? 'aspect-[16/9]' : 'h-full w-full'
      }`}>
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted
          loop
          playsInline
          autoPlay
          controls={false}
          preload="auto"
          className="w-full h-full object-cover relative"
        />
      </div>

      {/* Unified Bottom Info Text Card Graphics overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20 pointer-events-none">
        <h3 className="text-lg font-bold text-white text-center mb-1 drop-shadow-md">
          {reel.title}
        </h3>
        <p className="text-xs text-white/80 text-center mb-2 line-clamp-2 max-w-[90%]">
          {reel.description}
        </p>
      </div>

      <div className="absolute top-4 left-4 z-30 p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-semibold pointer-events-none border border-white/5">
        {reel.aspectRatio === 'widescreen' ? '🎬 16:9 Wide' : '📱 9:16 Vertical'}
      </div>
    </div>
  );
}

export function InstagramReels() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeModalReel, setActiveModalReel] = useState<ReelData | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Syncing Swiper actions with video tracking play behaviors
  const handleSwiperVideoSync = (swiper: any) => {
    const container = swiper.el;
    if (!container) return;

    const allVideos = container.querySelectorAll('video');
    allVideos.forEach((video: HTMLVideoElement) => video.pause());

    const visibleSlides = container.querySelectorAll('.swiper-slide-active, .swiper-slide-next');
    visibleSlides.forEach((slide: HTMLElement) => {
      const targetVideo = slide.querySelector('video');
      if (targetVideo) {
        targetVideo.play().catch(() => {});
      }
    });
  };

  const handleOpenModal = (reel: ReelData) => {
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
    setActiveModalReel(reel);
  };

  const handleCloseModal = () => {
    setActiveModalReel(null);
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
      setTimeout(() => handleSwiperVideoSync(swiperInstance), 100);
    }
  };

  return (
    <section id="video-editing" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Motion Graphics & Gaming Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A diverse showcase featuring high-energy anime character keyframing mixed with widescreen, full YouTube-size tactical gaming sequences from PUBG and Call of Duty.
          </p>
        </motion.div>

        <div className="w-full mb-12 relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiperInstance}
            onInit={handleSwiperVideoSync}
            onSlideChange={handleSwiperVideoSync}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full py-4"
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id} className="h-auto select-none">
                <ReelCard reel={reel} onClick={() => handleOpenModal(reel)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center">
          <motion.a
            href="https://www.instagram.com/ll_ig__lucifer_ll/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Share2 className="w-5 h-5" />
            View Full Production Feed
          </motion.a>
        </div>
      </div>

      {/* Pop-up Video Modal Overlay */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full ${
                activeModalReel.aspectRatio === 'widescreen' ? 'max-w-3xl aspect-[16/9]' : 'max-w-md aspect-[9/16]'
              } bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10`}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={activeModalReel.videoUrl}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/10 shadow-lg cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 left-4 z-40 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/10 shadow-lg cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-30 pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-1">
                  {activeModalReel.title}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  {activeModalReel.description}
                </p>
                <a
                  href={activeModalReel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors pointer-events-auto shadow-md"
                >
                  <Share2 className="w-4 h-4" />
                  View Original Post
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}