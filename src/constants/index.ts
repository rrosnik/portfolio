const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Programming Languages" },
  { value: 25, suffix: "+", label: "Tools & Technologies" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Generic initials placeholders — the original template's exp/logo images were
// real third-party brand logos (Hostinger, Appwrite, Docker) that don't belong
// to these employers, so we render neutral badges instead.
const orgBadge = (initials: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><rect width="50" height="50" rx="25" fill="#1c1c21"/><text x="50%" y="56%" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="600" fill="#d9ecff">${initials}</text></svg>`,
  )}`;

const orgBanner = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="40"><rect width="180" height="40" rx="8" fill="#1c1c21"/><text x="50%" y="63%" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="600" fill="#d9ecff">${label}</text></svg>`,
  )}`;

const expCards = [
  {
    review:
      "Designed and delivered a production BIM–LCA platform for the National Research Council Canada, owning architecture, implementation, and deployment across the full stack.",
    imgPath: orgBanner("University of Ottawa"),
    logoPath: orgBadge("UO"),
    title: "Full-Stack Developer (Research) — University of Ottawa",
    date: "May 2023 - Dec 2025",
    responsibilities: [
      "Built a React front end with Redux Toolkit and Emotion, plus a production-grade component workflow using Storybook and MSW for realistic API mocking.",
      "Architected an event-driven microservices ecosystem (Node.js, Python, Java) using gRPC for service-to-service communication and RabbitMQ for asynchronous messaging.",
      "Structured the codebase as a scalable Nx monorepo with shared libraries, including a centralized Zod validation package enforcing consistent schemas across services.",
      "Implemented background processing with Redis and containerized all services with Docker and Dev Containers for reproducible environments.",
      "Secured the platform with OAuth 2.0 / OpenID Connect and a KMS, and built an API gateway handling routing, HTTPS/TLS, and streaming for large file transfers.",
    ],
  },
  {
    review:
      "Led development of a new web application from 10% to 55% completion after joining, mentoring junior developers and providing technical guidance through code reviews.",
    imgPath: orgBanner("Viratarhe Farda Co."),
    logoPath: orgBadge("VF"),
    title: "Full-Stack Developer — Viratarhe Farda Co.",
    date: "Jan 2022 - Aug 2022",
    responsibilities: [
      "Built the backend architecture using Laravel (PHP) and MySQL, designed and implemented RESTful APIs, and developed frontend components with React.js.",
      "Established a CI/CD pipeline with GitLab CI/CD and managed version control and team collaboration in GitLab.",
      "Dockerized applications for easier deployment and scaling, and automated configuration and deployment with Ansible.",
    ],
  },
  {
    review:
      "Built the backend architecture of a website from the ground up and delivered clean, well-tested frontend components for the tourism agency's public site.",
    imgPath: orgBanner("Fotros Tourist Agency"),
    logoPath: orgBadge("FT"),
    title: "Full-Stack Developer — Fotros Tourist Agency",
    date: "Aug 2020 - Jan 2021",
    responsibilities: [
      "Built the backend architecture of a website using Laravel (PHP) and MySQL, and designed and implemented RESTful APIs.",
      "Developed front-end components with HTML, CSS, and JavaScript, and conducted code reviews.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.svg",
    url: "https://github.com/rrosnik",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100085494094921",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/RostamiNikoo",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/rezarostaminikoo",
  },
];

export const projects: PortfolioProject[] = [
  {
    label: "Co Draft — Real-Time Collaborative Workspace",
    description:
      "A real-time collaborative workspace built with Next.js, TypeScript, Convex, Clerk, Liveblocks, and TipTap. It supports multiplayer document editing with live presence and cursors, shared whiteboards, rich text editing, authentication, and the ability to publish portfolio projects — all on a scalable, productivity-focused architecture.",
    imageUrl: "/images/projects/CoDraft.png",
    skills: [
      "git",
      "nextjs",
      "typescript",
      "tailwindcss",
      "shadcn",
      "clerk",
      "convex",
      "liveblocks",
      "tiptap",
      "eslint",
      "zod",
      "zustand",
    ],
    category: "Full Stack / Collaboration",
    github: "https://github.com/rrosnik/co-draft",
    liveDemo: "https://co-draft.rosnik.dev",
  },
  {
    label: "Meet AI — AI-Powered Video Meeting Platform",
    description:
      "A full-stack AI meeting platform built with Next.js, TypeScript, PostgreSQL, Drizzle, Better Auth, Stream Video, Stream Chat, Inngest, and OpenAI. It supports authenticated users, custom AI meeting agents that join calls in real time, automatic recording and transcription, AI-generated meeting summaries, transcript review, post-meeting chat, searchable meeting management, and premium usage limits through Polar subscriptions.",
    imageUrl: "/images/projects/meet-ai.png",
    skills: [
      "git",
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "shadcn",
      "stream",
      "neon",
      "drizzle",
      "eslint",
    ],
    category: "Full Stack / AI SaaS",
    github: "https://github.com/rrosnik/meet-ai",
    liveDemo: "https://meet-ai.rosnik.dev",
  },
  {
    label: "AI Resume Analyzer — Smart ATS Feedback for Your Resume",
    description:
      "An AI-powered resume analysis app built with React Router 7, React, TypeScript, and Puter. Upload a resume as a PDF, match it against a target job listing, and get an ATS compatibility score with tailored, actionable feedback. Uses browser-side PDF parsing and Puter for serverless authentication, file storage, and AI — with no backend server to manage.",
    imageUrl: "/images/projects/ai-resume-analyzer.png",
    skills: [
      "git",
      "docker",
      "react",
      "react-router",
      "typescript",
      "vite",
      "tailwindcss",
      "zustand",
    ],
    category: "AI / Full Stack",
    github: "https://github.com/rrosnik/ai-resume-analyzer",
    liveDemo: "https://puter.com/app/rosnik-ai-resume-analyzer",
  },
  {
    label: "Acquisitions — Dockerized Node/Express REST API",
    description:
      "A production-ready REST API built with Node.js and Express, featuring JWT authentication with bcrypt, a clean layered architecture (routes, controllers, services, models, middleware, and validation), Drizzle ORM on Neon Postgres, and Zod request validation. Hardened with Arcjet rate limiting and bot protection plus Helmet and CORS, with structured Winston and Morgan logging. Fully Dockerized with multi-stage builds and Docker Compose — Neon Local for ephemeral branch databases in development and Neon Cloud in production — and tested with Jest and Supertest.",
    imageUrl: "/images/projects/Acquisitions.jpg",
    skills: [
      "git",
      "docker",
      "nodejs",
      "express",
      "neon",
      "drizzle",
      "jwt",
      "zod",
      "arcjet",
      "jest",
      "nodemon",
      "eslint",
      "prettier",
      "dotenv",
    ],
    category: "Backend / DevOps",
    github: "https://github.com/rrosnik/acquisitions",
    liveDemo: undefined,
  },
  {
    label: "Recurrly — Subscription Tracker Mobile App",
    description:
      "A cross-platform mobile app built with React Native and Expo for tracking recurring subscriptions and payments. Features offline-first, on-device SQLite storage via Drizzle, Clerk authentication, a native UI built with NativeWind, TanStack Query for data fetching, and PostHog analytics — so you can see upcoming charges, renewal dates, and total spend at a glance.",
    imageUrl: "/images/projects/recurrly.png",
    skills: [
      "git",
      "react",
      "typescript",
      "tailwindcss",
      "clerk",
      "drizzle",
      "zustand",
      "zod",
    ],
    category: "Mobile / Full Stack",
    github: "https://github.com/rrosnik/react-native-recurrly",
    liveDemo: undefined,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};
