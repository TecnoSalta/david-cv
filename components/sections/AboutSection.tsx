"use client";
import React from "react";
import { motion } from "framer-motion";
import { aboutMe } from "../../lib/data";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            {aboutMe.title}
          </motion.h2>
          <motion.div
            className="prose prose-lg dark:prose-invert mx-auto text-center"
            variants={itemVariants}
          >
            {aboutMe.description.map((paragraph, index) => (
              <p key={index} className="text-lg sm:text-xl leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
