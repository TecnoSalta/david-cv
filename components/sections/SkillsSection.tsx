"use client";
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const colorClasses = {
  blue: {
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  purple: {
    text: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  green: {
    text: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  orange: {
    text: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
};

const SkillsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            {skills.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.categories.map((category) => {
              const colors =
                colorClasses[category.color as keyof typeof colorClasses] ||
                colorClasses.blue;
              return (
                <motion.div key={category.title} variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className={`text-2xl ${colors.text}`}>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className={`${colors.bg} border-transparent hover:bg-primary/80`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
