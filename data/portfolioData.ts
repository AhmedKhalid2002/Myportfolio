export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Dashboards';
  image: string;
  subImages: string[];
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  features: string[];
}

export const portfolioData = {
  profile: {
    name: "Ahmed Khalid",
    roles: ["MERN Stack Developer", "Backend Engineer", "Next.js"],
    bio: "MERN Stack Developer with a proven track record of building scalable full-stack web applications. Experienced in developing production systems, optimizing performance, and integrating secure authentication.",
    cvLink: "#",
    experienceYears: "02+",
    completedProjects: "05+",
    happyClients: "05+",
  },
  education: [
    { degree: "Benha University", major: "Bachelor of Computer Science and Artificial Intelligence", duration: "2020 - 2024" },
  ],
  experience: [
    { role: "Web development instructor", company: "Eyouth", duration: "April 2026 - Present", desc: "Simplifying complex technical concepts and designing structured learning materials for students." },
    { role: "Frontend developer", company: "Sporton", duration: "February 2026 - Present", desc: "Optimizing website performance and page load speeds by 30% through code enhancements." },
    { role: "Full Stack Developer", company: "Freelance", duration: "July 2024 - Present", desc: "Implementing secure JWT authentication and optimizing application performance by 35%." }
  ],
  skillsCategories: {
    frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Shadcn/UI"],
    backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
    database: ["MongoDB", "PostgreSQL", "MySQL", ]
  },
  services: [
    { title: "Frontend Developer", desc: "Building highly interactive, responsive, and pixel-perfect user interfaces using modern frameworks." },
    { title: "Backend Developer", desc: "Designing robust server-side architectures, scalable RESTful APIs, and secure authentication systems." },
    { title: "Full Stack Developer", desc: "Delivering complete end-to-end web applications, uniting seamless frontends with powerful database-backed architectures." }
  ],
  projects: [
    {
      id: "sporton",
      title: "Sporton Platform",
      description: "Multi-connector platform for 800K+ Egyptian athletes.",
      longDescription: "A mono-repo full-stack sports platform designed to help athletes market themselves and connect with brokers, clubs, and brands. Built with a robust architecture for high scalability.",
      category: "Full Stack",
      image: "/projects/sporton.jpg",
      subImages: ["/projects/s1.jpg", "/projects/s2.jpg", "/projects/s3.jpg", "/projects/s4.jpg"],
      tags: ["React.js", "Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
      liveLink: "#",
      githubLink: "#",
      features: ["Mono-repo architecture", "Athlete-to-broker connection system", "Scalable data management"]
    },
    {
      id: "edumatek",
      title: "Edumatek",
      description: "Comprehensive educational platform.",
      longDescription: "A full-stack educational platform featuring course management, user roles, and admin dashboards. Optimized for speed with a 30% improvement in load times.",
      category: "Full Stack",
      image: "/projects/edumatek.jpg",
      subImages: ["/projects/e1.jpg", "/projects/e2.jpg", "/projects/e3.jpg", "/projects/e4.jpg"],
      tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      features: ["JWT Authentication", "Role-based authorization", "Course & Admin management"]
    },
    {
      id: "nursery-system",
      title: "Kinder-Link",
      description: "Nursery management system.",
      longDescription: "Full-stack system for nursery operations including dashboards for students, teachers, and admins, resulting in a 40% reduction in manual record-keeping.",
      category: "Dashboards",
      image: "/projects/kinder.jpg",
      subImages: ["/projects/k1.jpg", "/projects/k2.jpg", "/projects/k3.jpg", "/projects/k4.jpg"],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      features: ["Multi-role dashboards", "Secure authentication", "Database management"]
    }
  ] as Project[]
};

// مصفوفة ربط المهارات بالأيقونات
export const skillIcons: { [key: string]: string } = {
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "WebSockets": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Shadcn/UI": "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
};