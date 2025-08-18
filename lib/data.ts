import {
    Github,
    Linkedin,
    Mail,
    Download,
    Calendar,
    Building,
  } from "lucide-react";

  export const personalInfo = {
    name: "David Mendez",
    title: "Full-Stack & Cloud Solutions Architect",
    summary: "I turn complex problems into scalable, battle-tested software",
    logo: "DM",
    cvUrl: "#", // TODO: Add CV URL
  };

  export const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/saurionx",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/david-sebastian-mendez",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:saurionx2005@gmail.com",
      icon: Mail,
    },
  ];

  export const aboutMe = {
    title: "About Me",
    description: [
      "15-year veteran who architected a 1,000-DAU government platform (MiPieza) handling millions in social-welfare credits, cut cartographic survey time by 40%, and modernized legacy systems for Argentina's Ministry of Early Childhood. Fluent in Android (Kotlin/Java), .NET 7, NodeJS, Angular, Azure Serverless, and SQL/NoSQL.",
      "Passionate about SOLID, DDD, and TDD to deliver zero-downtime releases. I've led teams in delivering complex enterprise solutions, optimized database performance, and architected microservices that handle millions of requests daily. My expertise spans from mobile development to cloud architecture, always focusing on scalable, maintainable solutions.",
      "Based in Salta, Argentina, I'm available for remote work worldwide. When I'm not coding, I enjoy mentoring developers, contributing to open-source projects like FluentValidation and Compose Destinations, and speaking at tech events like GDG Salta.",
    ],
  };

  export const skills = {
    title: "Technical Arsenal",
    categories: [
      {
        title: "Languages",
        color: "blue",
        skills: ["Kotlin", "Java 17", "C# 11", "TypeScript", "Python", "VB.NET"],
      },
      {
        title: "Frontend & Backend",
        color: "purple",
        skills: [
          "Angular 15+",
          "React",
          "RxJS",
          "TailwindCSS",
          "Material UI",
          ".NET 7",
          "NodeJS",
          "NestJS",
          "Express",
          "Azure Functions",
          "REST APIs",
          "GraphQL",
          "Android",
          "Jetpack Compose",
        ],
      },
      {
        title: "Cloud & Data",
        color: "green",
        skills: [
          "Azure Functions",
          "Azure SQL",
          "Azure Storage",
          "Azure DevOps",
          "AWS Lambda",
          "AWS CDK",
          "SQL Server",
          "PostgreSQL",
          "MongoDB",
          "Cosmos DB",
          "Redis",
          "OLAP Cubes",
        ],
      },
      {
        title: "DevOps & Testing",
        color: "orange",
        skills: [
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Terraform",
          "SonarQube",
          "xUnit",
          "JUnit5",
          "Mockito",
          "Postman",
          "Newman",
          "Cypress",
          "Appium",
        ],
      },
    ],
  };

  export const experience = {
    title: "Professional Experience",
    icon: Calendar,
    jobs: [
      {
        title: "System Designer & Software Architect",
        company: "Renabap",
        companyIcon: Building,
        date: "2022 - Present",
        description: "Leading the architecture and development of 'MiPieza' Government Platform - a comprehensive welfare-credit system serving 1,000+ daily users",
        achievements: [
          "Architected end-to-end welfare-credit system: Angular portal + Android data-collection app + Azure serverless back-end",
          "Scaled to 1,000 concurrent users leveraging Azure Functions Premium Plan & SQL Hyperscale",
          "Implemented IdentityServer4 authentication, OWASP top-10 hardening, GDPR & local data-protection compliance",
          "Established GitHub Actions → Azure DevOps → blue-green deployment pipeline achieving zero-downtime releases",
        ],
        technologies: [
          "Angular",
          "Android",
          "Azure Functions",
          "SQL Server",
          "IdentityServer4",
          "GitHub Actions",
        ],
      },
      {
        title: "Mobile & Backend Developer",
        company: "Private Cartographic Survey Firm",
        companyIcon: Building,
        date: "2019 - 2022",
        description: "Modernized legacy survey applications and built scalable backend infrastructure for field data collection",
        achievements: [
          "Re-wrote legacy Android survey app using Kotlin MVVM + Coroutines/Flow + Room offline cache",
          "Built .NET 7 REST API with Entity Framework Core & OpenAPI specs achieving 99.9% uptime on Azure Functions",
          "Optimized map tile streaming reducing data usage by 60% via vector tiles & gzip compression",
          "Cut field survey time by 40% from 5 hours to 3 hours per plot through app optimization",
        ],
        technologies: [
          "Kotlin",
          "MVVM",
          "Coroutines",
          ".NET 7",
          "Entity Framework Core",
          "Azure Functions",
          "Room",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Ministry of Early Childhood (MPI)",
        companyIcon: Building,
        date: "2013 - 2019",
        description: "Led development of web & mobile messaging platform and modernized legacy government systems",
        achievements: [
          "Led 4-person squad delivering web & mobile messaging platform (NodeJS + Angular + MongoDB)",
          "Migrated legacy ASP.NET CPI system to .NET Core + SQL Server Always Encrypted, cut page load time 50%",
          "Introduced Power BI dashboards enabling executives to drill-down KPIs in real-time",
          "Reduced infrastructure cost by 30% and improved uptime to 99.9% through NodeJS micro-services migration",
        ],
        technologies: [
          "NodeJS",
          "Angular",
          "MongoDB",
          ".NET Core",
          "SQL Server",
          "Power BI",
          "ASP.NET",
        ],
      },
      {
        title: "Systems Developer",
        company: "Audio Sport",
        companyIcon: Building,
        date: "2008 - 2010",
        description: "Built comprehensive billing and inventory management system for multi-branch retail operations",
        achievements: [
          "Built AFBSIST billing + barcode stock system for 3-branch retail chain",
          "Automated 100% of inventory management eliminating $30k yearly shrinkage",
          "Implemented real-time stock tracking across multiple locations",
          "Designed custom barcode system for efficient product management",
        ],
        technologies: ["VB.NET", "SQL Server", "Crystal Reports", "Barcode Systems"],
      },
    ],
  };

  export const projects = {
    title: "Featured Projects",
    projects: [
      {
        title: "MiPieza - Government Welfare Platform",
        isFeatured: true,
        description: "End-to-end welfare-credit system serving 1,000+ daily users with Angular portal, Android data-collection app, and Azure serverless backend.",
        challenges: "Architected scalable system using Azure Functions Premium Plan & SQL Hyperscale. Implemented IdentityServer4 authentication, OWASP security hardening, and achieved zero-downtime deployments with blue-green CI/CD pipelines.",
        techStack: ["Angular", "Android", "Azure Functions", "SQL Server", "IdentityServer4", "GitHub Actions"],
        githubUrl: "https://github.com/saurionx",
      },
      {
        title: "Cartographic Survey Mobile App",
        isFeatured: true,
        description: "Modern Android survey application with offline capabilities, reducing field survey time by 40% from 5 hours to 3 hours per plot.",
        challenges: "Re-architected legacy app using Kotlin MVVM + Coroutines/Flow + Room offline cache. Optimized map tile streaming with vector tiles & gzip compression, reducing data usage by 60%.",
        techStack: ["Kotlin", "MVVM", "Coroutines", "Room", "Vector Tiles", ".NET 7 API"],
        githubUrl: "https://github.com/saurionx",
      },
      {
        title: "Ministry Messaging Platform",
        isFeatured: true,
        description: "Web & mobile messaging platform for government communications built with NodeJS microservices architecture.",
        challenges: "Led 4-person team to deliver scalable messaging system. Migrated from legacy ASP.NET to .NET Core with SQL Server Always Encrypted, achieving 50% page load time improvement and 99.9% uptime.",
        techStack: ["NodeJS", "Angular", "MongoDB", ".NET Core", "SQL Server", "Power BI"],
        githubUrl: "https://github.com/saurionx",
      },
      {
        title: "AFBSIST Retail Management System",
        isFeatured: false,
        description: "Comprehensive billing and inventory management system for multi-branch retail operations with barcode integration.",
        challenges: "Built complete POS and inventory system eliminating $30k yearly shrinkage. Implemented real-time stock tracking across 3 branches with custom barcode system for efficient product management.",
        techStack: ["VB.NET", "SQL Server", "Crystal Reports", "Barcode Systems"],
        githubUrl: "https://github.com/saurionx",
      },
      {
        title: "Open Source Contributions",
        isFeatured: false,
        description: "Active contributor to popular open-source projects in the .NET and Android ecosystems.",
        challenges: "Contributing to FluentValidation (C#) for better validation patterns and Compose Destinations (Kotlin) for improved Android navigation. Mentoring 20+ developers through Kotlin Argentina Study Group.",
        techStack: ["C#", "Kotlin", "FluentValidation", "Jetpack Compose"],
        githubUrl: "https://github.com/saurionx",
      },
    ],
  };

  export const icons = {
    Download,
    Github,
    Linkedin,
    Mail,
    Calendar,
    Building,
  };
