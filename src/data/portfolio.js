// ---------------------------------------------------------------------------
// Central content source for the portfolio. Edit here to update the site.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: 'Abdul Saboor',
  title: 'Full-Stack MERN Developer',
  tagline: 'Computer Science Student & Full-Stack Engineer',
  location: 'Pakistan',
  email: 'abdulsaboormercedes@gmail.com',
  phone: '03284678752',
  phoneIntl: '+923284678752',
  resume: '/resume.html',
  photo: '/images/pic1.png',
  photoAlt: '/images/pic2.png',
  company: 'Orbitrix Solutions',
  role: 'Founder & Full-Stack Developer',
  intro:
    'Founder of Orbitrix Solutions and a Full-Stack MERN Developer. I design and build modern, scalable, SEO-friendly web applications end to end — from pixel-perfect React interfaces to robust Node.js APIs, MongoDB data layers, and containerized CI/CD deployments.',
  socials: {
    github: 'https://github.com/abdulsaboorera-bit',
    linkedin: 'https://www.linkedin.com/in/abdul-saboor/',
    email: 'mailto:abdulsaboormercedes@gmail.com',
    whatsapp: 'https://wa.me/qr/7GSRQFMD6AMZG1',
    phone: 'tel:+923284678752',
  },
};

export const STATS = [
  { value: '2', label: 'Ventures Founded' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '2+', label: 'Years Coding' },
];

// Skill categories -----------------------------------------------------------
export const SKILL_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    accent: 'from-cyan-400 to-blue-500',
    icon: 'SiReact',
    blurb: 'Crafting fast, responsive, accessible interfaces.',
    skills: [
      { name: 'React.js', level: 90, icon: 'SiReact' },
      { name: 'JavaScript (ES6+)', level: 90, icon: 'SiJavascript' },
      { name: 'HTML5', level: 95, icon: 'SiHtml5' },
      { name: 'CSS3 / Tailwind', level: 90, icon: 'SiTailwindcss' },
      { name: 'Responsive UI', level: 88, icon: 'SiCss' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    accent: 'from-emerald-400 to-green-600',
    icon: 'SiNodedotjs',
    blurb: 'Designing secure, scalable server architecture.',
    skills: [
      { name: 'Node.js', level: 88, icon: 'SiNodedotjs' },
      { name: 'Express.js', level: 87, icon: 'SiExpress' },
      { name: 'REST API Design', level: 88, icon: 'TbApi' },
      { name: 'Authentication (JWT)', level: 82, icon: 'SiJsonwebtokens' },
      { name: 'Backend Architecture', level: 80, icon: 'SiNodedotjs' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    accent: 'from-lime-400 to-emerald-600',
    icon: 'SiMongodb',
    blurb: 'Modeling data for performance and integrity.',
    skills: [
      { name: 'MongoDB', level: 88, icon: 'SiMongodb' },
      { name: 'SQL / MySQL', level: 80, icon: 'SiMysql' },
      { name: 'Mongoose ODM', level: 84, icon: 'SiMongoose' },
      { name: 'Database Design', level: 82, icon: 'SiMongodb' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    accent: 'from-orange-400 to-red-500',
    icon: 'SiCplusplus',
    blurb: 'Strong fundamentals in systems & OOP.',
    skills: [
      { name: 'C / C++', level: 85, icon: 'SiCplusplus' },
      { name: 'Java (OOP)', level: 82, icon: 'FaJava' },
      { name: 'JavaScript', level: 90, icon: 'SiJavascript' },
      { name: 'Data Structures', level: 80, icon: 'SiCplusplus' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    accent: 'from-sky-400 to-indigo-500',
    icon: 'SiDocker',
    blurb: 'Automating build, ship & run workflows.',
    skills: [
      { name: 'Linux', level: 84, icon: 'SiLinux' },
      { name: 'Docker', level: 82, icon: 'SiDocker' },
      { name: 'Jenkins / CI-CD', level: 78, icon: 'SiJenkins' },
      { name: 'Git & GitHub', level: 90, icon: 'SiGit' },
      { name: 'Deployment', level: 80, icon: 'SiVercel' },
    ],
  },
  {
    id: 'other',
    title: 'Other Skills',
    accent: 'from-fuchsia-400 to-purple-600',
    icon: 'SiWordpress',
    blurb: 'Shipping polished, discoverable products.',
    skills: [
      { name: 'WordPress', level: 80, icon: 'SiWordpress' },
      { name: 'SEO Optimization', level: 82, icon: 'TbSeo' },
      { name: 'Performance Tuning', level: 80, icon: 'TbRocket' },
      { name: 'Figma / UI Design', level: 75, icon: 'SiFigma' },
    ],
  },
];

// Ventures & startups --------------------------------------------------------
export const VENTURES = [
  {
    id: 'orbitrix',
    name: 'Orbitrix Solutions',
    type: 'Digital Agency',
    role: 'Founder & Full-Stack Developer',
    tagline: 'Building modern websites, digital solutions & scalable online experiences.',
    description:
      'A full-service digital agency focused on building modern websites, digital solutions, and scalable online experiences. Orbitrix specializes in web development, SEO, AI automation, and digital marketing — combining innovative technology, creative design, and data-driven strategies to deliver responsive, performance-driven products that improve brand presence and business growth.',
    services: ['Web Development', 'SEO', 'AI Automation', 'Digital Marketing'],
    accent: 'from-blue-500 to-violet-600',
    icon: 'TbRocket',
    link: '',
  },
  {
    id: 'mediconnect',
    name: 'MediConnect',
    type: 'HealthTech Startup',
    role: 'Founder & Full-Stack Developer',
    tagline: 'A telemedicine platform connecting patients with verified doctors.',
    description:
      'A telemedicine startup built on the MERN stack with three role-based portals for patients, doctors, and admins. Features JWT authentication, an automated commission engine, and a doctor verification and approval workflow.',
    services: ['Telemedicine', 'MERN Platform', 'Secure Payments', 'Doctor Verification'],
    accent: 'from-cyan-500 to-emerald-500',
    icon: 'SiReact',
    link: '',
  },
];

// Projects -------------------------------------------------------------------
export const PROJECTS = [
  {
    id: 'ecommerce',
    title: 'MERN E-Commerce Platform',
    category: 'Full-Stack MERN',
    description:
      'A production-style e-commerce boilerplate with product catalog, cart, checkout, order management, and an admin dashboard powered by a REST API and MongoDB.',
    highlights: [
      'Cart, checkout & order lifecycle',
      'Admin dashboard & inventory management',
      'Secure REST API with Express & MongoDB',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    image: 'gradient-2',
    github: 'https://github.com/abdulsaboorera-bit',
    demo: '',
    featured: true,
  },
  {
    id: 'devops-pipeline',
    title: 'Dockerized CI/CD Pipeline',
    category: 'DevOps',
    description:
      'A containerized deployment workflow using Docker and Jenkins to automate build, test, and deployment stages for a full-stack application on Linux.',
    highlights: [
      'Multi-stage Docker builds',
      'Jenkins pipeline with automated stages',
      'Linux-based deployment workflow',
    ],
    tech: ['Docker', 'Jenkins', 'Linux', 'CI/CD', 'Git'],
    image: 'gradient-3',
    github: 'https://github.com/abdulsaboorera-bit',
    demo: '',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Interactive 3D Portfolio',
    category: 'Frontend / 3D',
    description:
      'This very portfolio — a futuristic, animated developer site built with React, Tailwind, Framer Motion, and a React Three Fiber 3D scene.',
    highlights: [
      'React Three Fiber 3D tech scene',
      'Framer Motion micro-interactions',
      'SEO-friendly & fully responsive',
    ],
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    image: 'gradient-4',
    github: 'https://github.com/abdulsaboorera-bit',
    demo: '',
    featured: false,
  },
  {
    id: 'wordpress-site',
    title: 'WordPress Business Site',
    category: 'WordPress / SEO',
    description:
      'A performance-optimized, SEO-friendly WordPress business website with custom theming, responsive layouts, and fast page loads.',
    highlights: [
      'Custom responsive theme',
      'On-page SEO & performance tuning',
      'Optimized Core Web Vitals',
    ],
    tech: ['WordPress', 'PHP', 'SEO', 'CSS3'],
    image: 'gradient-5',
    github: 'https://github.com/abdulsaboorera-bit',
    demo: '',
    featured: false,
  },
  {
    id: 'rest-api',
    title: 'REST API Service',
    category: 'Backend',
    description:
      'A modular REST API with Express and MongoDB featuring JWT auth, input validation, error handling, and clean layered architecture.',
    highlights: [
      'JWT auth & protected routes',
      'Validation & centralized error handling',
      'Clean, layered controller/service design',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'gradient-6',
    github: 'https://github.com/abdulsaboorera-bit',
    demo: '',
    featured: false,
  },
];

// Learning journey timeline --------------------------------------------------
export const TIMELINE = [
  {
    year: 'Phase 01',
    title: 'Programming Fundamentals',
    description:
      'Started my journey with C/C++ and Java, mastering problem-solving, data structures, and Object-Oriented Programming principles.',
    icon: 'SiCplusplus',
    tags: ['C/C++', 'Java OOP', 'DSA'],
  },
  {
    year: 'Phase 02',
    title: 'Frontend Development',
    description:
      'Dived into HTML5, CSS3, and JavaScript, then React.js — building responsive, interactive, accessible user interfaces.',
    icon: 'SiReact',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    year: 'Phase 03',
    title: 'Backend & APIs',
    description:
      'Learned Node.js and Express.js to build secure REST APIs, authentication systems, and scalable backend architecture.',
    icon: 'SiNodedotjs',
    tags: ['Node.js', 'Express', 'REST API', 'JWT'],
  },
  {
    year: 'Phase 04',
    title: 'Databases & Full-Stack',
    description:
      'Connected the stack together with MongoDB and SQL — designing schemas and shipping complete full-stack MERN applications.',
    icon: 'SiMongodb',
    tags: ['MongoDB', 'SQL', 'MERN'],
  },
  {
    year: 'Phase 05',
    title: 'DevOps & Deployment',
    description:
      'Expanded into Linux, Docker, Jenkins, and CI/CD pipelines to automate builds, containerize apps, and deploy reliably.',
    icon: 'SiDocker',
    tags: ['Linux', 'Docker', 'Jenkins', 'CI/CD'],
  },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'resume', label: 'Resume' },
  { id: 'booking', label: 'Book' },
  { id: 'contact', label: 'Contact' },
];
