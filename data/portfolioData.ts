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
    name: 'Ahmed Khalid Kamal',
    roles: ['MERN Stack Developer', 'React.js', 'Next.js', 'Node.js'],
    bio: 'Full Stack MERN Developer skilled in React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in building scalable web applications, RESTful APIs, responsive interfaces, and secure authentication systems. Focused on performance optimization, clean code, and modern web development practices.',
    cvLink: '/cv/Ahmed_khalid_kamal_Resume.pdf',
    experienceYears: '03+',
    completedProjects: '05+',
    happyClients: '05+',
    myImage: '/img/my-photo3.png',
    myImage2: '/img/my-photo.png',
  },
  education: [
    {
      degree: 'Benha University',
      major:
        'Bachelor of Computer Science and Artificial Intelligence - Information Systems Department (GPA: 3.3/4.0)',
      duration: 'Sep 2020 – Jul 2024',
    },
  ],
  experience: [
    {
      role: 'Web development instructor',
      company: 'Eyouth',
      duration: 'April 2026 – Present',
      desc: 'Increased student engagement and technical understanding by simplifying complex programming concepts. Delivered hands-on web development training sessions focused on JavaScript, React.js, and full-stack development concepts.',
    },
    {
      role: 'Frontend Developer',
      company: 'Sporton',
      duration: 'Feb 2026 – May 2026',
      desc: 'Developed scalable frontend solutions for Egyptian athletes using React.js, Next.js, TypeScript, and Tailwind CSS. Improved page load performance by approximately 30% through frontend optimization and efficient rendering techniques.',
    },
    {
      role: 'Frontend Developer',
      company: 'Web Master',
      duration: 'Jul 2024 – Dec 2024',
      desc: 'Optimized website responsiveness and frontend performance, reducing UI issues. Conducted website performance audits and implemented security improvements to enhance system stability.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      duration: 'Apr 2024 – Present',
      desc: 'Developed and deployed scalable full-stack web applications. Built secure RESTful APIs and implemented JWT authentication and role-based authorization systems. Collaborated directly with clients to gather requirements.',
    },
  ],
  skillsCategories: {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query', // Added from CV
      'Context API', // Added from CV
      'Shadcn/UI',
      'Bootstrap',
      'Framer Motion',
      'Formik', // Added
      'React Hook Form', // Added
      'Zod', // Added
      'Yup', // Added
      'HTML5', // Added
      'CSS3', // Added
    ],
    backend: [
      'Node.js',
      'Express.js',
      'NestJS',
      'RESTful APIs',
      'JWT Authentication',
      'Joi', // Added
      'WebSockets', // Added
      'Class Validator',
    ],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Sequelize'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Axios', 'npm'], // Added npm
  },
  services: [
    {
      title: 'Frontend Developer',
      desc: 'Building highly interactive, responsive, and pixel-perfect user interfaces using modern frameworks like React.js and Next.js.',
    },
    {
      title: 'Backend Developer',
      desc: 'Designing robust server-side architectures, scalable RESTful APIs, and secure authentication systems using Node.js and Express.js.',
    },
    {
      title: 'Full Stack Developer',
      desc: 'Delivering complete end-to-end web applications, uniting seamless frontends with powerful database-backed architectures.',
    },
  ],
  projects: [
    {
      id: 'sporton',
      title: 'Sporton Platform',
      description:
        'Sports Platform connecting athletes with clubs and brokers.',
      longDescription:
        'A multi-connector platform built to help Egyptian athletes market themselves. Developed responsive and interactive frontend interfaces using React.js, Next.js, and Tailwind CSS. Improved frontend performance and user experience through optimized rendering.',
      category: 'Frontend',
      image: '/projects/sporton.jpg',
      subImages: ['/projects/s1.jpg', '/projects/s2.jpg'],
      tags: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
      liveLink: '#',
      githubLink: '#',
      features: [
        'Multi-connector platform architecture',
        'Performance optimization',
        'Reusable component architecture',
      ],
    },
    {
      id: 'sity-cloud',
      title: 'Sity Cloud',
      description: 'Modern frontend interfaces for production-ready apps.',
      longDescription:
        'Developed modern and responsive frontend interfaces using Next.js, TypeScript, and shadcn/ui components. Built reusable UI components and scalable frontend architecture.',
      category: 'Frontend',
      image: '/projects/sitycloud.jpg',
      subImages: ['/projects/sc1.jpg', '/projects/sc2.jpg'],
      tags: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
      features: [
        'Reusable UI components',
        'Scalable architecture',
        'Clean code practices',
      ],
    },
    {
      id: 'edumatek',
      title: 'Edumatek',
      description: 'Full-stack educational platform with dashboard management.',
      longDescription:
        'A full-stack educational platform with secure authentication and role-based authorization systems. Built and integrated 20+ RESTful API endpoints for courses, users, and dashboard management.',
      category: 'Full Stack',
      image: '/projects/edumatek.jpg',
      subImages: ['/projects/e1.jpg', '/projects/e2.jpg'],
      tags: [
        'React.js',
        'Next.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
      ],
      liveLink: '#',
      githubLink: '#',
      features: [
        '20+ RESTful API Endpoints',
        'Role-based authorization',
        'Responsive UI Design',
      ],
    },
    {
      id: 'nursery-system',
      title: 'Kinder-Link',
      description: 'Nursery management system for administrative workflows.',
      longDescription:
        'Full-stack system for nursery operations including dashboards for students, teachers, and admins. Implemented secure authentication systems and optimized backend data handling.',
      category: 'Dashboards',
      image: '/projects/kinder.jpg',
      subImages: ['/projects/k1.jpg', '/projects/k2.jpg'],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      features: [
        'Multi-role dashboards',
        'Secure authentication',
        'Administrative workflows',
      ],
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with payment integration.',
      longDescription:
        'Developed a complete e-commerce platform with authentication, cart management, and payment integration. Improved frontend responsiveness and optimized API calls for faster user interactions.',
      category: 'Full Stack',
      image: '/projects/ecommerce.jpg',
      subImages: ['/projects/ec1.jpg', '/projects/ec2.jpg'],
      tags: ['React.js', 'Bootstrap', 'Redux', 'Formik'],
      liveLink: '#',
      githubLink: '#',
      features: [
        'Cart Management',
        'Payment Integration',
        'Responsive UI Design',
      ],
    },
  ] as Project[],
};

// ... داخل portfolioData ...

export const skillIcons: { [key: string]: string } = {
  // --- Frontend Core ---
  HTML5:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Bootstrap:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Framer Motion':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',

  // --- State Management & Forms ---
  Redux:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Redux Toolkit':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'React Query':
    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reactquery.svg',
  'Context API':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Formik:
    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/formik.svg',
  'React Hook Form':
    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reacthookform.svg',
  Yup: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yup.svg',
  Zod: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zod.svg',

  // --- Backend ---
  'Node.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  NestJS:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  Joi: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hapi.svg',

  // --- New Backend Skills ---
  WebSockets:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', // Icon for WebSockets
  'Class Validator': 'https://img.icons8.com/fluency/48/class-validator.png', // Icon for Class Validator

  // --- Database ---
  MongoDB:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Mongoose:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg',
  PostgreSQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Sequelize:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',

  // --- Tools & DevOps ---
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub:
    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
  Docker:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Postman:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  Axios:
    'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/axios.svg',
  npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg',

  // --- Other ---
  'Shadcn/UI': 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
  'RESTful APIs':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
};
