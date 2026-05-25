'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Zap, BarChart3 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive, modern websites with React, Next.js, and Tailwind CSS.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating beautiful interfaces that work seamlessly across all devices.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and ensuring excellent user experiences.',
    },
    {
      icon: BarChart3,
      title: 'Web Analytics',
      description: 'Implementing tracking and analytics to understand user behavior and growth.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
