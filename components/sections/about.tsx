'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Database, Layout } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  const skills = [
    { icon: Layout, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { icon: Database, title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'MySQL'] },
    { icon: Code, title: 'Tools', items: ['Git', 'Vercel'] },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I am a MERN developer with expertise in designing, developing, and maintaining web applications using MongoDB, Express.js, React, and Node.js.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 2 years of professional experience in web development, I&apos;ve worked on diverse projects at TecheinHub Technologies and RNK IT Solutions. My expertise spans database design, API development, and front-end development, ensuring overall performance and functionality of web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating responsive, performant web applications using the MERN stack and modern frameworks like Next.js. I&apos;m constantly learning and staying updated with the latest technologies and best practices in the industry.
            </p>
            <div className="flex gap-4 flex-wrap pt-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MySQL'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <img
                src="/about-media.jpg"
                alt="About section image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
