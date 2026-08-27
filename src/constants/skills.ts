export const skillNames = [
  "react-router",
  "vite",
  "shadcn",
  "zustand",
  "tiptap",
  "liveblocks",
  "convex",
  "clerk",
  "tailwindcss",
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "git",
  "docker",
  "nodemon",
  "eslint",
  "jest",
  "arcjet",
  "neon",
  "drizzle",
  "prettier",
  "zod",
  "jwt",
  "express",
  "dotenv",
  "html",
  "stream",
] as const;

export const allSkills: Record<SkillName, SkillData> = {
  stream: {
    label: "Stream",
    homePage: "https://getstream.io/",
    icon: {
      dark: "/images/skills/stream-dark.svg",
      light: "/images/skills/stream-light.svg",
    },
  },
  "react-router": {
    label: "React Router",
    homePage: "https://reactrouter.com/",
    icon: "/images/skills/react-router.svg",
  },
  vite: {
    label: "Vite",
    homePage: "https://vite.dev/",
    icon: "/images/skills/vite.svg",
  },
  shadcn: {
    label: "shadcn/ui",
    homePage: "https://ui.shadcn.com/",
    icon: {
      dark: "/images/skills/shadcn-dark.svg",
      light: "/images/skills/shadcn-light.svg",
    },
  },
  zustand: {
    label: "Zustand",
    homePage: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction",
    icon: "/images/skills/zustand.svg",
  },
  tiptap: {
    label: "Tiptap",
    homePage: "https://tiptap.dev/",
    icon: {
      dark: "/images/skills/tiptap-dark.svg",
      light: "/images/skills/tiptap-light.svg",
    },
  },
  liveblocks: {
    label: "Liveblocks",
    homePage: "https://liveblocks.io/",
    icon: "/images/skills/liveblocks.svg",
  },
  convex: {
    label: "Convex",
    homePage: "https://www.convex.dev/",
    icon: "/images/skills/convex.svg",
  },
  clerk: {
    label: "Clerk",
    homePage: "https://clerk.com/",
    icon: "/images/skills/clerk.svg",
  },
  tailwindcss: {
    label: "Tailwindcss",
    homePage: "https://tailwindcss.com/",
    icon: {
      dark: "/images/skills/tailwindcss-dark.svg",
      light: "/images/skills/tailwindcss-light.svg",
    },
  },
  typescript: {
    label: "Typescript",
    homePage: "https://www.typescriptlang.org/",
    icon: "/images/skills/typescript.svg",
  },
  react: {
    label: "React",
    homePage: "https://react.dev/",
    icon: {
      dark: "/images/skills/react-dark.svg",
      light: "/images/skills/react-light.svg",
    },
  },
  nextjs: {
    label: "Nextjs",
    homePage: "https://nextjs.org/",
    icon: {
      dark: "/images/skills/nextjs-dark.svg",
      light: "/images/skills/nextjs-light.svg",
    },
  },
  nodejs: {
    label: "Node.js",
    homePage: "https://nodejs.org/en",
    icon: {
      dark: "/images/skills/nodejs-dark.svg",
      light: "/images/skills/nodejs-light.svg",
    },
  },
  git: {
    label: "Git",
    homePage: "https://git-scm.com/",
    icon: "/images/skills/git.svg",
  },
  docker: {
    label: "Docker",
    homePage: "https://www.docker.com/",
    icon: "/images/skills/docker.svg",
  },
  nodemon: {
    label: "Nodemon",
    homePage: "https://nodemon.io/",
    icon: "/images/skills/nodemon.svg",
  },
  eslint: {
    label: "eslint",
    homePage: "https://eslint.org/",
    icon: "/images/skills/eslint.svg",
  },
  jest: {
    label: "Jest",
    homePage: "https://jestjs.io/",
    icon: "/images/skills/jest.svg",
  },
  arcjet: {
    label: "Arcjet",
    homePage: "https://arcjet.com/",
    icon: "/images/skills/arcjet.svg",
  },
  neon: {
    label: "Neon",
    homePage: "https://neon.com/",
    icon: "/images/skills/neon.svg",
  },
  drizzle: {
    label: "Drizzle",
    homePage: "https://orm.drizzle.team/",
    icon: "/images/skills/drizzle.svg",
  },
  prettier: {
    label: "Prettier",
    homePage: "https://prettier.io/",
    icon: "/images/skills/prettier.svg",
  },
  zod: {
    label: "Zod",
    homePage: "https://zod.dev/",
    icon: "/images/skills/zod.webp",
  },
  jwt: {
    label: "Json Web Token (JWT)",
    homePage: "https://www.jwt.io/",
    icon: "/images/skills/jwt.svg",
  },
  express: {
    label: "Express.js",
    homePage: "https://expressjs.com/",
    icon: {
      dark: "/images/skills/expressjs-dark.svg",
      light: "/images/skills/expressjs-light.svg",
    },
  },
  dotenv: {
    label: "dotenv",
    homePage: "https://www.dotenv.org/",
    icon: "/images/skills/dotenv.svg",
  },
  html: {
    label: "HTML",
    homePage: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "/images/skills/html.svg",
  },
};
