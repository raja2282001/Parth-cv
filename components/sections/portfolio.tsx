'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'KONKANTREASURES',
      description: 'An e-commerce website built with Next.js, offering a seamless shopping experience with fast loading times and server-side rendering. It focuses on showcasing and selling unique products from the Konkan region with a user-friendly interface and secure transaction processes.',
      tags: ['Next.js', 'E-commerce', 'React', 'Server-side Rendering'],
      link: 'https://www.konkantreasures.com/',
      github: '#',
      image: '/projects/konkan-treasures.jpg',
    },
    // {
    //   id: 2,
    //   title: 'eHRPWeb (PRIVATE)',
    //   description: 'An employee insurance management website developed in React.js, designed exclusively for internal use. Provides a desktop-only platform for managing insurance policies and employee benefits efficiently with secure data handling.',
    //   tags: ['React.js', 'Insurance', 'HR Management', 'Desktop'],
    //   link: 'https://payroll.gfmis.guam.gov/',
    //   github: '#',
    //   image: '/projects/ehr-pweb.jpg',
    // },
    {
      id: 5,
      title: 'INDUSTRIAL',
      description: 'An industrial website showcasing modern design and functionality. Built with responsive design principles to ensure accessibility across all devices and platforms.',
      tags: ['Responsive Design', 'Frontend', 'Industrial'],
      link: 'https://raja2282001.github.io/industri/',
      github: '#',
      image: '/projects/industrial.jpg',
    },
    {
      id: 6,
      title: 'RaheeExport',
      description: 'Rahee Export has applied an integrated approach towards building an international agribusiness that has established us as a leading farm-to-fork organization. We bring in-depth knowledge to facilitate agribusiness that improves health, alleviates poverty and promotes economic growth.',
      tags: ['Agribusiness', 'E-commerce', 'Farm-to-Fork', 'Export'],
      link: 'https://raja2282001.github.io/RaheeExport/',
      github: '#',
      image: '/projects/rahee-export.jpg',
    },
    {
      id: 7,
      title: 'Restaurant Website',
      description: 'A responsive restaurant website featuring menu displays, reservations, and online ordering capabilities. Designed with user experience in mind for easy navigation and booking.',
      tags: ['Restaurant', 'Responsive', 'Frontend', 'UI/UX'],
      link: 'https://raja2282001.github.io/restoran-1.0.0/',
      github: '#',
      image: '/projects/restaurant.jpg',
    },
    {
      id: 8,
      title: 'jwellery',
      description: 'An elegant jewelry e-commerce platform showcasing fine jewelry collections. Built with modern design patterns and optimized for product display and secure transactions.',
      tags: ['E-commerce', 'Jewelry', 'React', 'Responsive'],
      link: 'https://raja2282001.github.io/jwellery/',
      github: '#',
      image: '/projects/jewelry.jpg',
    },
    {
      id: 9,
      title: 'Malefashion-Master',
      description: 'A wellness and fashion shop prioritizing customer well-being. Offers a curated selection of health and wellness products, including vitamins, supplements, fitness equipment, and self-care essentials dedicated to helping achieve a healthier lifestyle.',
      tags: ['E-commerce', 'Wellness', 'Fashion', 'Self-care'],
      link: 'https://raja2282001.github.io/malefashion-master/',
      github: '#',
      image: '/projects/malefashion.jpg',
    },
    // {
    //   id: 14,
    //   title: 'E-Comms Project',
    //   description: 'An e-commerce platform built for fast and reliable online shopping. Features a clean, responsive storefront with secure checkout and product discovery designed for modern web users.',
    //   tags: ['E-commerce', 'Next.js', 'React', 'MySQL'],
    //   link: 'https://estore.gutestsite.com/',
    //   github: '#',
    //   image: '/projects/Gsa.png',
    // },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.05 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6"
                >
                  <div className="flex gap-3 w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Code2 className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
