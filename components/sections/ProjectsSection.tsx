"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects, icons } from "../../lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectsSection = () => {
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            {projects.title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.projects.map((project, index) => (
              <motion.div
                key={index}
                className={index < 3 ? "md:col-span-2 lg:col-span-1" : ""}
                variants={itemVariants}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg sm:text-xl leading-tight">
                        {project.title}
                        {project.isFeatured && (
                          <Badge className="ml-2 bg-blue-600 text-primary-foreground hover:bg-primary/80">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">
                        Technical Challenges:
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {project.challenges}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs font-semibold"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <icons.Github className="w-4 h-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
