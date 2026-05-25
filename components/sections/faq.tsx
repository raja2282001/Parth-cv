'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. I always provide a detailed timeline during the planning phase.',
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer:
        'Yes! I offer comprehensive post-launch support and maintenance packages. This includes bug fixes, updates, performance optimization, and new feature implementation.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'I specialize in modern web technologies including React, Next.js, Node.js, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. I&apos;m always learning new technologies to best serve my clients.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer:
        'Absolutely! I have extensive experience working with legacy systems and existing codebases. I can refactor, optimize, and add new features to any project.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'I offer flexible pricing based on project scope, timeline, and complexity. Options include hourly rates, fixed-price projects, or retainer agreements. Let&apos;s discuss what works best for your project.',
    },
    {
      question: 'How do you ensure project communication?',
      answer:
        'Regular communication is crucial. I provide weekly updates, maintain transparent project tracking, and am always available for questions. We can use your preferred communication tools like Slack, Email, or Video calls.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about my services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.05 * index }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-lg p-6 text-left hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
