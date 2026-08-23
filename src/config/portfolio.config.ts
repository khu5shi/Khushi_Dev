import { Project, SkillCategory, ExperienceItem, WhatsAppInquiryPreset } from '../types/portfolio';

export const portfolioConfig = {
  personal: {
    name: "Khushi Agrawal",
    firstName: "Khushi",
    role: "Full-Stack Software Engineer & Problem Solver",
    tagline: "Building scalable enterprise web systems, high-performance APIs, and data-driven solutions with precision.",
    bio: [
      "I am a passionate Full-Stack Developer specializing in modern TypeScript, Next.js, and scalable Node.js/Express architectures.",
      "With a strong foundation in Data Structures & Algorithms (200+ LeetCode problems solved) and hands-on experience developing production-grade applications, I bridge the gap between robust backend systems and intuitive, human-centered user experiences.",
      "Whether optimizing database queries in MongoDB, architecting real-time WebSocket portals, or crafting responsive interfaces, I focus on clean code, reliability, and business impact."
    ],
    email: "khushi4608@gmail.com",
    whatsappNumber: "7394874292", // Update with your 10-digit WhatsApp number (with 91 country code, no +)
    location: "India",
    availability: {
      status: "Open to opportunities",
      badge: "Open to Work",
    },
  },

  socials: {
    github: "https://github.com/khu5shi",
    githubUsername: "khu5shi",
    leetcode: "https://leetcode.com/u/khus5hi/",
    leetcodeUsername: "khus5hi",
    gfg: "https://www.geeksforgeeks.org/profile/khushixbu1",
    gfgUsername: "khushixbu1",
    linkedin: "https://www.linkedin.com/in/khushi-agrawal-08a21b25a/",
  },

  resume: {
    downloadFileName: "Khushi_Agrawal_Resume.pdf",
    viewUrl: "/resume.pdf",
    driveUrl: "", // Paste your Google Drive link here anytime
    lastUpdated: "August 2026",
  },

  codingStatsFallback: {
    leetcode: {
      totalSolved: 204,
      easySolved: 112,
      totalEasy: 961,
      mediumSolved: 79,
      totalMedium: 2105,
      hardSolved: 13,
      totalHard: 967,
      ranking: 818099,
      acceptanceRate: "66.8%",
    },
    github: {
      publicRepos: 28,
    },
    gfg: {
      score: "750+",
      problemsSolved: "232",
      streak: "92 Days",
    }
  },

  inquiryPresets: [
    {
      id: "hire",
      label: "Job Opportunity / Hiring",
      icon: "Briefcase",
      badge: "Recruitment",
      defaultMessage: "Hi Khushi, I came across your portfolio and would love to discuss an exciting Full-Stack / Software Engineering opportunity at our team."
    },
    {
      id: "project",
      label: "Project Collaboration",
      icon: "Code2",
      badge: "Freelance / Collab",
      defaultMessage: "Hi Khushi, I was impressed by your work on the Enterprise Portal and Amazon Clone. I'd like to discuss building a project together."
    },
    {
      id: "query",
      label: "Technical Query / Discussion",
      icon: "HelpCircle",
      badge: "Tech Chat",
      defaultMessage: "Hi Khushi, I saw your GitHub projects and wanted to ask a quick technical query regarding your architecture."
    },
    {
      id: "coffee",
      label: "Casual Coffee Chat / Networking",
      icon: "Coffee",
      badge: "Networking",
      defaultMessage: "Hi Khushi, just wanted to connect, follow your journey, and say hello!"
    }
  ] as WhatsAppInquiryPreset[],

  projects: [
    {
      id: "eump-portal",
      title: "EUMP — Enterprise User Management Portal",
      subtitle: "Full-Stack Enterprise Access & Team Governance Suite",
      description: "Production-ready enterprise administration platform with end-to-end user lifecycles, role-based access control (RBAC), multi-tenant employee management, project tracking, real-time audit logs, and multilingual capabilities.",
      longDescription: "Engineered with Next.js, Express, TypeScript, and MongoDB. Features secure OTP-driven authentication, WebSocket real-time collaboration with Socket.io, robust permission matrices, and granular audit trail logging for enterprise compliance.",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "RBAC"],
      category: "Full-Stack",
      githubUrl: "https://github.com/khu5shi/EUMP-Enterprise-User-Managment-Portal-",
      liveUrl: "https://github.com/khu5shi/EUMP-Enterprise-User-Managment-Portal-",
      featured: true,
      metrics: ["Real-time Socket.io Sync", "Multi-role RBAC Architecture", "Automated Audit Logging"],
      techStack: ["Next.js", "TypeScript", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    },
    {
      id: "amazon-clone",
      title: "Amazon E-Commerce & Admin Suite",
      subtitle: "Full-Scale E-Commerce Platform with Live Geolocation & Compliance",
      description: "Production-grade e-commerce application featuring dynamic variant switches, OpenStreetMap GPS geolocation, automated 60s email OTP verification, and compliance with the DPDP Act 2023.",
      longDescription: "Built with Next.js 14, TypeScript, Tailwind CSS, Express, and MongoDB. Implements multi-tier admin dashboards, faceted live search, checkout calculations, and data privacy safeguards.",
      tags: ["Next.js 14", "TypeScript", "MongoDB", "Express", "Tailwind CSS", "Geolocation"],
      category: "Full-Stack",
      githubUrl: "https://github.com/khu5shi/Amazon_Clone",
      liveUrl: "https://github.com/khu5shi/Amazon_Clone",
      featured: true,
      metrics: ["Live 60s Email OTP", "OpenStreetMap Geolocation", "DPDP Act 2023 Compliant"],
      techStack: ["Next.js 14", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "mind-care",
      title: "Mind_Care — Mental Health & Wellness Platform",
      subtitle: "Holistic Mental Wellness & Self-Care Ecosystem",
      description: "An open-source mental health platform designed to help users track emotional well-being, access self-help modules, and engage with guided wellness tools.",
      longDescription: "Developed with TypeScript, React, and modular styling. Features interactive mood check-ins, privacy-first data logging, and curated cognitive exercises.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Wellness Tech"],
      category: "Next.js & TypeScript",
      githubUrl: "https://github.com/khu5shi/Mind_Care",
      liveUrl: "https://github.com/khu5shi/Mind_Care",
      featured: true,
      metrics: ["Privacy-First Data Flow", "Interactive Self-Help Modules", "Open-Source Initiative"],
      techStack: ["TypeScript", "React", "Tailwind CSS", "Lucide Icons"],
    },
    {
      id: "lingo-tongue",
      title: "LingoTongue — Fast Universal Translator",
      subtitle: "Cross-Language Communication Bridge",
      description: "Fast and lightweight translation application that bridges language barriers with instantaneous multi-lingual context conversion and speech synthesis capabilities.",
      tags: ["JavaScript", "Web APIs", "Translation", "Modern UI"],
      category: "Web Apps",
      githubUrl: "https://github.com/khu5shi/lingoTounge",
      liveUrl: "https://github.com/khu5shi/lingoTounge",
      featured: false,
      metrics: ["Instant Translation Engine", "Multi-dialect Support"],
      techStack: ["JavaScript", "HTML5", "CSS3", "Translation APIs"],
    },
    {
      id: "loan-approval-ml",
      title: "Loan Approval Prediction Engine",
      subtitle: "Machine Learning Risk Assessment Model",
      description: "Intelligent loan eligibility predictor utilizing Logistic Regression to analyze applicant financial profiles, credit metrics, and repayment risk probabilities.",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis"],
      category: "Machine Learning",
      githubUrl: "https://github.com/khu5shi/loan-approval-prediction-ml",
      liveUrl: "https://github.com/khu5shi/loan-approval-prediction-ml",
      featured: true,
      metrics: ["Predictive Risk Scoring", "High Precision Classification", "Feature Engineering"],
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      id: "greenstagram",
      title: "Greenstagram — Eco-Living Social Network",
      subtitle: "Sustainability & Environmental Awareness Community",
      description: "Community platform dedicated to zero-waste lifestyles, sustainable gardening, upcycling projects, and eco-friendly habit tracking.",
      tags: ["React", "Node.js", "Express", "Community"],
      category: "Web Apps",
      githubUrl: "https://github.com/khu5shi/Greenstagram",
      liveUrl: "https://github.com/khu5shi/Greenstagram",
      featured: false,
      metrics: ["Community Feed", "Eco-tip Sharing Hub"],
      techStack: ["React", "CSS3", "JavaScript", "REST APIs"],
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "Next.js 14", highlight: true },
        { name: "React.js", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML5 & Semantic Web" },
        { name: "CSS3 & Modern Animations" },
        { name: "Responsive UI/UX" },
      ]
    },
    {
      title: "Backend & Systems",
      iconName: "Server",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "RESTful API Design", highlight: true },
        { name: "Socket.io (WebSockets)", highlight: true },
        { name: "Role-Based Access (RBAC)" },
        { name: "JWT & OTP Authentication" },
        { name: "Microservices Architecture" },
        { name: "Server-Side Rendering (SSR)" },
      ]
    },
    {
      title: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MongoDB", highlight: true },
        { name: "Mongoose ODM", highlight: true },
        { name: "SQL & Relational Models" },
        { name: "Data Aggregation Pipelines" },
        { name: "Database Indexing & Query Tuning" },
      ]
    },
    {
      title: "Core CS & Problem Solving",
      iconName: "Cpu",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true },
        { name: "OOPS", highlight: true },
        { name: "DBMS", highlight: true },
        { name: "Operating Systems (OS)", highlight: true },
        { name: "LeetCode (200+ Solved)", highlight: true },
        { name: "GeeksforGeeks (Active)", highlight: true },
        { name: "C++" },
        { name: "Java" },
        { name: "Python", highlight: true },
      ]
    },
    {
      title: "Tools, DevOps & Practices",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", highlight: true },
        { name: "Vite & Modern Bundlers" },
        { name: "Postman API Testing" },
        { name: "Linux CLI & Bash" },
        { name: "Vercel & Cloud Deployment" },
        { name: "Clean Architecture Principles" },
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "edu-1",
      role: "B.Tech in Computer Science and Engineering",
      organization: "KCC Institute of Technology and Management",
      period: "Aug 2022 — May 2026",
      location: "India",
      description: [
        "CGPA 7.89 / 10.0 (DIV I)"
      ],
      type: "Education"
    }
  ] as ExperienceItem[]
};
