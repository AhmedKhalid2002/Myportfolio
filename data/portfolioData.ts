export interface Project {
  id: string;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  longDescription: string;
  longDescription_ar?: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Dashboards';
  image: string;
  subImages: string[];
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  features: string[];
  features_ar?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  title_ar?: string;
  issuer: string;
  issuer_ar?: string;
  date: string;
  image: string;
  description?: string;
  description_ar?: string;
  credentialUrl?: string;
}

export const portfolioData = {
  profile: {
    name: 'Ahmed Khalid Kamal',
    name_ar: 'أحمد خالد كمال',
    roles: ['MERN Stack Developer', 'React.js', 'Next.js', 'Node.js'],
    roles_ar: ['مطور MERN Stack', 'React.js', 'Next.js', 'Node.js'],
    bio: 'Full Stack MERN Developer skilled in React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in building scalable web applications, RESTful APIs, responsive interfaces, and secure authentication systems. Focused on performance optimization, clean code, and modern web development practices.',
    bio_ar: 'مطور Full Stack MERN ماهر في React.js و Next.js و Node.js و Express.js و MongoDB. خبرة في بناء تطبيقات ويب قابلة للتوسع، واجهات برمجة التطبيقات RESTful، وواجهات متجاوبة، وأنظمة مصادقة آمنة. مركز على تحسين الأداء، الكود النظيف، وممارسات تطوير الويب الحديثة.',
    cvLink: '/cv/Ahmed_khalid_kamal_Resume.pdf',
    experienceYears: '03+',
    completedProjects: '05+',
    happyClients: '05+',
    myImage: '/img/my-photo3.png',
    myImage2: '/img/my-photo.png',
  },
  education: [
    {
      id: 'edu-benha',
      degree: 'Benha University',
      degree_ar: 'جامعة بنها',
      major: 'Bachelor of Computer Science and Artificial Intelligence - Information Systems Department (GPA: 3.3/4.0)',
      major_ar: 'بكالوريوس علوم الحاسب والذكاء الاصطناعي - قسم نظم المعلومات (GPA: 3.3/4.0)',
      duration: 'Sep 2020 – Jul 2024',
    },
    {
      id: 'edu-route',
      degree: 'Route IT Training Center',
      degree_ar: 'مركز Route للتدريب',
      major: 'Full Stack Web Development Diploma',
      major_ar: 'دبلومة تطوير الويب المتكامل',
      duration: 'Mar 2023 – Jun 2024',
      proofImages: [
        '/img/proof/route/certificate.png',
      ],
      proofData: {
        overallScore: { value: 'Completed', totalResponses: 1 },
        questionBreakdown: [
          { question: 'Program Type', rating: 'Diploma', responses: 1 },
          { question: 'Focus', rating: 'Full Stack Web Development', responses: 1 },
          { question: 'Issued', rating: 'June 13, 2024', responses: 1 },
        ],
      },
    },
  ],
  experience: [
    {
      id: 'exp-eyouth',
      role: 'Web development instructor',
      role_ar: 'مدرب تطوير ويب',
      company: 'Eyouth',
      company_ar: 'Eyouth',
      duration: 'April 2026 – Present',
      desc: 'Increased student engagement and technical understanding by simplifying complex programming concepts. Delivered hands-on web development training sessions focused on JavaScript, React.js, and full-stack development concepts.',
      desc_ar: 'زيادة تفاعل الطلاب وفهمهم التقني من خلال تبسيط مفاهيم البرمجة المعقدة. تقديم جلسات تدريب عملية على تطوير الويب تركز على JavaScript و React.js ومفاهيم تطوير الويب المتكامل.',
      stats: [
        { value: '4.76', label: 'Avg Rating', label_ar: 'متوسط التقييم' },
        { value: '1341', label: 'Responses', label_ar: 'استجابة' },
        { value: '1152', label: '5-Star Reviews', label_ar: 'تقييم 5 نجوم' },
      ],
      proofData: { /* ... keep existing proofData ... */ 
        overallScore: { value: '4.76', totalResponses: 1341 },
        starDistribution: [{ stars: 5, count: 1152 }, { stars: 4, count: 99 }],
        questionBreakdown: [{ question: 'التعلم من الدرس', rating: 4.74, responses: 447 }, { question: 'Clarity of Explanation', rating: 4.67, responses: 3 }, { question: 'Logic of Content', rating: 4.0, responses: 3 }],
        sessionHighlights: [{ session: 'Session Five', group: 'ON - SH - L1 - G', date: 'May 2026', rating: 4.67, responses: 51 }, { session: 'Session Five', group: 'ON - AL - L1 - G', date: 'May 2026', rating: 4.71, responses: 66 }, { session: 'Session Three', group: 'ON - SH - L1 - G', date: 'April 2026', rating: 4.85, responses: 63 }, { session: 'Session Two', group: 'Various Groups', date: 'April 2026', rating: 4.75, responses: 70 }, { session: 'Session One', group: 'Various Groups', date: 'April 2026', rating: 4.67, responses: 75 }, { session: 'Session Four', group: 'Various Groups', date: 'April 2026', rating: 4.58, responses: 60 }],
      },
      proofImages: ['/img/proof/eyouth/eyouth1.png', '/img/proof/eyouth/eyouth2.png', '/img/proof/eyouth/eyouth3.png', '/img/proof/eyouth/eyouth4.png'],
    },
    {
      id: 'exp-sporton',
      role: 'Frontend Developer',
      role_ar: 'مطور واجهات أمامية',
      company: 'Sporton',
      company_ar: 'سبورتون',
      duration: 'Feb 2026 – May 2026',
      desc: 'Developed scalable frontend solutions for Egyptian athletes using React.js, Next.js, TypeScript, and Tailwind CSS. Improved page load performance by approximately 30% through frontend optimization and efficient rendering techniques.',
      desc_ar: 'تطوير حلول واجهة أمامية قابلة للتوسع للرياضيين المصريين باستخدام React.js و Next.js و TypeScript و Tailwind CSS. تحسين أداء تحميل الصفحات بنسبة 30% تقريباً من خلال تحسين الواجهة الأمامية وتقنيات العرض الفعالة.',
    },
    {
      id: 'exp-webmaster',
      role: 'Frontend Developer',
      role_ar: 'مطور واجهات أمامية',
      company: 'Web Master',
      company_ar: 'ويب ماستر',
      duration: 'Jul 2024 – Dec 2024',
      desc: 'Optimized website responsiveness and frontend performance, reducing UI issues. Conducted website performance audits and implemented security improvements to enhance system stability.',
      desc_ar: 'تحسين استجابة الموقع وأداء الواجهة الأمامية، مما أدى إلى تقليل مشاكل واجهة المستخدم. إجراء عمليات تدقيق لأداء الموقع وتنفيذ تحسينات أمنية لتعزيز استقرار النظام.',
      proofData: {
        overallScore: { value: 'Achieved', totalResponses: 1 },
        questionBreakdown: [{ question: 'Achievement', rating: 'Certificate of Appreciation', responses: 1 }, { question: 'Focus Area', rating: 'Dynamic Web Development', responses: 1 }, { question: 'Key Skill', rating: 'User-friendly Interfaces', responses: 1 }, { question: 'Competency', rating: 'Innovative Solutions', responses: 1 }],
        sessionHighlights: [{ session: 'Internship Program', group: 'Web Development', date: 'Jul 2024', rating: '3 Month' }, { session: 'Summer Training', group: 'Top 10 Evaluation', date: 'Summer 2024', rating: 'Active Participant' }],
      },
      proofImages: ['/img/proof/webmaster/certificate.jpg', '/img/proof/webmaster/webMaster1.png', '/img/proof/webmaster/webMaster2.png', '/img/proof/webmaster/webMaster3.png', '/img/proof/webmaster/webMaster4.png'],
    },
    {
      id: 'exp-freelance',
      role: 'Full Stack Developer',
      role_ar: 'مطور Full Stack',
      company: 'Freelance',
      company_ar: 'عمل حر',
      duration: 'Apr 2024 – Present',
      desc: 'Developed and deployed scalable full-stack web applications. Built secure RESTful APIs and implemented JWT authentication and role-based authorization systems. Collaborated directly with clients to gather requirements.',
      desc_ar: 'تطوير ونشر تطبيقات ويب متكاملة قابلة للتوسع. بناء واجهات برمجة تطبيقات RESTful آمنة وتنفيذ مصادقة JWT وأنظمة تفويض قائمة على الأدوار. التعاون المباشر مع العملاء لجمع المتطلبات.',
      proofImages: [],
    },
  ],
  skillsCategories: {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'React Query', 'Context API', 'Shadcn/UI', 'Bootstrap', 'Framer Motion', 'Formik', 'React Hook Form', 'Zod', 'Yup', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'JWT Authentication', 'Joi', 'WebSockets', 'Class Validator'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Sequelize'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Axios', 'npm'],
  },
  services: [
    {
      title: 'Frontend Developer',
      title_ar: 'مطور واجهات أمامية',
      desc: 'Building highly interactive, responsive, and pixel-perfect user interfaces using modern frameworks like React.js and Next.js.',
      desc_ar: 'بناء واجهات مستخدم تفاعلية للغاية ومتجاوبة ودقيقة من البكسل باستخدام أطر عمل حديثة مثل React.js و Next.js.',
    },
    {
      title: 'Backend Developer',
      title_ar: 'مطور واجهات خلفية',
      desc: 'Designing robust server-side architectures, scalable RESTful APIs, and secure authentication systems using Node.js and Express.js.',
      desc_ar: 'تصميم معمارية خوادم قوية، واجهات برمجة تطبيقات RESTful قابلة للتوسع، وأنظمة مصادقة آمنة باستخدام Node.js و Express.js.',
    },
    {
      title: 'Full Stack Developer',
      title_ar: 'مطور Full Stack',
      desc: 'Delivering complete end-to-end web applications, uniting seamless frontends with powerful database-backed architectures.',
      desc_ar: 'تقديم تطبيقات ويب كاملة من البداية للنهاية، بالجمع بين واجهات أمامية سلسة ومعماريات خلفية قوية مدعومة بقواعد البيانات.',
    },
  ],
  projects: [
    {
      id: 'sporton',
      title: 'Sporton Platform',
      title_ar: 'منصة سبورتون',
      description: 'Sports Platform connecting athletes with clubs and brokers.',
      description_ar: 'منصة رياضية تربط الرياضيين بالأندية والوسطاء.',
      longDescription: 'A multi-connector platform built to help Egyptian athletes market themselves. Developed responsive and interactive frontend interfaces using React.js, Next.js, and Tailwind CSS.',
      longDescription_ar: 'منصة متعددة الوصلات تم بناؤها لمساعدة الرياضيين المصريين على تسويق أنفسهم. تم تطوير واجهات أمامية متجاوبة وتفاعلية باستخدام React.js و Next.js و Tailwind CSS.',
      category: 'Frontend',
      image: '/projects/sporton.jpg',
      subImages: ['/projects/s1.jpg', '/projects/s2.jpg'],
      tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Multi-connector platform architecture', 'Performance optimization', 'Reusable component architecture'],
      features_ar: ['معمارية منصة متعددة الوصلات', 'تحسين الأداء', 'معمارية مكونات قابلة لإعادة الاستخدام'],
      liveLink: '#', githubLink: '#',
    },
    {
      id: 'sity-cloud',
      title: 'Sity Cloud',
      title_ar: 'سيتي كلاود',
      description: 'Modern frontend interfaces for production-ready apps.',
      description_ar: 'واجهات أمامية حديثة لتطبيقات جاهزة للإنتاج.',
      longDescription: 'Developed modern and responsive frontend interfaces using Next.js, TypeScript, and shadcn/ui components.',
      longDescription_ar: 'تطوير واجهات أمامية حديثة ومتجاوبة باستخدام Next.js و TypeScript ومكونات shadcn/ui.',
      category: 'Frontend',
      image: '/projects/sitycloud.jpg',
      subImages: ['/projects/sc1.jpg', '/projects/sc2.jpg'],
      tags: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Tailwind CSS'],
      features: ['Reusable UI components', 'Scalable architecture', 'Clean code practices'],
      features_ar: ['مكونات واجهة مستخدم قابلة لإعادة الاستخدام', 'معمارية قابلة للتوسع', 'ممارسات كود نظيف'],
      liveLink: '#', githubLink: '#',
    },
    {
      id: 'edumatek',
      title: 'Edumatek',
      title_ar: 'إيدوماتيك',
      description: 'Full-stack educational platform with dashboard management.',
      description_ar: 'منصة تعليمية متكاملة مع إدارة لوحات التحكم.',
      longDescription: 'A full-stack educational platform with secure authentication and role-based authorization systems. Built and integrated 20+ RESTful API endpoints.',
      longDescription_ar: 'منصة تعليمية متكاملة مع أنظمة مصادقة آمنة وأنظمة تفويض قائمة على الأدوار. بناء وتكامل أكثر من 20 نقطة نهاية API.',
      category: 'Full Stack',
      image: '/projects/edumatek.jpg',
      subImages: ['/projects/e1.jpg', '/projects/e2.jpg'],
      tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: ['20+ RESTful API Endpoints', 'Role-based authorization', 'Responsive UI Design'],
      features_ar: ['أكثر من 20 نقطة نهاية API', 'تفويض قائم على الأدوار', 'تصميم واجهة مستخدم متجاوب'],
      liveLink: '#', githubLink: '#',
    },
    {
      id: 'nursery-system',
      title: 'Kinder-Link',
      title_ar: 'كيندر لينك',
      description: 'Nursery management system for administrative workflows.',
      description_ar: 'نظام إدارة الحضانات لسير العمل الإداري.',
      longDescription: 'Full-stack system for nursery operations including dashboards for students, teachers, and admins.',
      longDescription_ar: 'نظام متكامل لعمليات الحضانات يشمل لوحات تحكم للطلاب والمعلمين والمسؤولين.',
      category: 'Dashboards',
      image: '/projects/kinder.jpg',
      subImages: ['/projects/k1.jpg', '/projects/k2.jpg'],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      features: ['Multi-role dashboards', 'Secure authentication', 'Administrative workflows'],
      features_ar: ['لوحات تحكم متعددة الأدوار', 'مصادقة آمنة', 'سير عمل إداري'],
      liveLink: '#', githubLink: '#',
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      title_ar: 'منصة تجارة إلكترونية',
      description: 'Complete e-commerce solution with payment integration.',
      description_ar: 'حل تجارة إلكترونية كامل مع تكامل الدفع.',
      longDescription: 'Developed a complete e-commerce platform with authentication, cart management, and payment integration.',
      longDescription_ar: 'تطوير منصة تجارة إلكترونية كاملة مع المصادقة وإدارة عربة التسوق وتكامل الدفع.',
      category: 'Full Stack',
      image: '/projects/ecommerce.jpg',
      subImages: ['/projects/ec1.jpg', '/projects/ec2.jpg'],
      tags: ['React.js', 'Bootstrap', 'Redux', 'Formik'],
      features: ['Cart Management', 'Payment Integration', 'Responsive UI Design'],
      features_ar: ['إدارة عربة التسوق', 'تكامل الدفع', 'تصميم واجهة مستخدم متجاوب'],
      liveLink: '#', githubLink: '#',
    },
  ] as Project[],
  certificates: [
    {
      id: 'cert-webmaster',
      title: 'Web Development Internship',
      title_ar: 'تدريب تطوير الويب',
      issuer: 'Web Masters',
      issuer_ar: 'ويب ماسترز',
      date: 'Dec 2024',
      image: '/img/proof/webmaster/certificate.jpg',
      description: 'Completed a one-month internship focused on building dynamic and user-friendly web solutions.',
      description_ar: 'إكمال تدريب لمدة شهر واحد يركز على بناء حلول ويب ديناميكية وصديقة للمستخدم.',
      credentialUrl: '#',
    },
    {
      id: 'cert-route',
      title: 'Full Stack Web Development Diploma',
      title_ar: 'دبلومة تطوير الويب المتكامل',
      issuer: 'Route IT Training Center',
      issuer_ar: 'مركز Route للتدريب',
      date: 'Jun 2024',
      image: '/img/proof/route/certificate.png',
      description: 'Intensive diploma covering both frontend and backend technologies to build complete web applications.',
      description_ar: 'دبلومة مكثفة تغطي تقنيات الواجهة الأمامية والخلفية لبناء تطبيقات ويب كاملة.',
      credentialUrl: '#',
    },
  ] as Certificate[],
};

// ... skillIcons stay the same ...
export const skillIcons: { [key: string]: string } = {
  // --- Frontend Core ---
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',

  // --- State Management & Forms ---
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'React Query': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reactquery.svg',
  'Context API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Formik: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/formik.svg',
  'React Hook Form': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reacthookform.svg',
  Yup: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yup.svg',
  Zod: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zod.svg',

  // --- Backend ---
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  NestJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  Joi: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hapi.svg',

  // --- New Backend Skills ---
  WebSockets: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'Class Validator': 'https://img.icons8.com/fluency/48/check-shield.png',

  // --- Database ---
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Mongoose: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  Sequelize: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',

  // --- Tools & DevOps ---
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  Axios: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/axios.svg',
  npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg',

  // --- Other ---
  'Shadcn/UI': 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
  'RESTful APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
};