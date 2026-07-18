'use client';

import React from 'react';
import { ThumbnailCarousel } from './ThumbnailCarousel';
import { InstagramReels } from './InstagramReels';

export function HobbiesSection() {
  return (
    <>
      {/* Thumbnail Carousel Section */}
      <ThumbnailCarousel />

      {/* Instagram Reels Video Editing Portfolio */}
      <InstagramReels />
    </>
  );
}
