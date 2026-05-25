'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  const skills = [
    { icon: Layout, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { icon: Database, title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { icon: Code, title: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
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
            A passionate full-stack developer with expertise in building scalable, user-centric web applications using modern technologies.
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
              With over 5 years of experience in web development, I&apos;ve worked on diverse projects ranging from startups to enterprise-scale applications. My journey in tech started with a curiosity about how things work, which evolved into a professional career building beautiful and functional digital products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating responsive, performant web applications that users love. I&apos;m constantly learning and staying updated with the latest technologies and best practices in the industry.
            </p>
            <div className="flex gap-4 flex-wrap pt-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'].map((tech) => (
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
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <Code className="w-32 h-32 text-primary/40" />
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
