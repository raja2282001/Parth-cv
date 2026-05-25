'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'LEARNVE',
      description: 'Online learning platform similar to Udemy for accessing educational courses with video-based learning and seamless course navigation.',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      link: 'https://learnve.vercel.app/',
      github: '#',
      image: 'LEARNVE',
    },
    {
      id: 2,
      title: 'Openwayz-hazel',
      description: 'Innovative e-commerce platform built with Next.js, offering fast and seamless shopping experience with modern design.',
      tags: ['Next.js', 'React', 'E-commerce', 'Tailwind'],
      link: 'https://openwayz-hazel.vercel.app/',
      github: '#',
      image: 'Openwayz',
    },
    {
      id: 3,
      title: 'TecheinHub Technologies',
      description: 'Frontend development projects using React and Next.js, creating dynamic and responsive web applications.',
      tags: ['React', 'Next.js', 'Frontend', 'Responsive'],
      link: 'https://techein.com/index.html',
      github: '#',
      image: 'TecheinHub',
    },
    {
      id: 4,
      title: 'RNK IT Solutions',
      description: 'MERN stack development with MongoDB, Express.js, React, and Node.js for scalable web applications.',
      tags: ['MERN', 'MongoDB', 'Express', 'Node.js'],
      link: 'https://rnk-frontend.onrender.com/',
      github: '#',
      image: 'RNK-IT',
    },
    {
      id: 5,
      title: 'Arth Infosoft Internship',
      description: 'Full-stack web development experience using MERN stack with focus on robust and scalable applications.',
      tags: ['MERN', 'Frontend', 'Backend', 'Database'],
      link: 'https://drive.google.com/file/d/1EC-Lyq_41_G5jdvDDl2PgtJcPzlpA4Dj/view',
      github: '#',
      image: 'Arth-Info',
    },
    {
      id: 6,
      title: 'Portfolio & More',
      description: 'Collection of various web development projects and experiments showcasing skills in modern web technologies.',
      tags: ['React', 'Next.js', 'Full-Stack', 'Web Dev'],
      link: '#',
      github: 'https://github.com/raja2282001',
      image: 'Projects',
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold text-primary/20 mb-2">
                    {project.image}
                  </div>
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6"
                >
                  <div className="flex gap-3 w-full">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Code2 className="w-4 h-4 mr-2" />
                      Code
                    </Button>
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
