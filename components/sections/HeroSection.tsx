import React from "react";
import { personalInfo, socialLinks, icons } from "../../lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {personalInfo.logo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              {personalInfo.title}
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href={personalInfo.cvUrl}>
                <icons.Download className="w-5 h-5 mr-2" />
                Download CV
              </Link>
            </Button>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button asChild key={link.name} variant="outline" size="icon">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
