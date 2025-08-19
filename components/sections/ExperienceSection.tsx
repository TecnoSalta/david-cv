"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience, icons } from "../../lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const ExperienceSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            {experience.title}
          </motion.h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-background"></div>
                  <div className="ml-12 sm:ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <CardTitle className="text-xl sm:text-2xl">{job.title}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <icons.Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{job.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">
                          <job.companyIcon className="w-5 h-5" />
                          {job.company}
                        </div>
                        <CardDescription>{job.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
