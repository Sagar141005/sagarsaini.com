export type TechConfig = {
  src?: string;
  srcLight?: string;
  srcDark?: string;
  priority?: boolean;
};

export const TECH_ICONS: Record<string, TechConfig> = {
  "Next.js": {
    srcLight: "/tech/nextjs2-light.svg",
    srcDark: "/tech/nextjs2-dark.svg",
  },
  "shadcn/ui": {
    srcLight: "/tech/shadcn-ui-light.svg",
    srcDark: "/tech/shadcn-ui-dark.svg",
  },
  Express: {
    srcLight: "/tech/express-dark.svg",
    srcDark: "/tech/express-light.svg",
  },
  Prisma: {
    srcLight: "/tech/prisma-dark.svg",
    srcDark: "/tech/prisma-light.svg",
  },
  ChatGPT: {
    srcLight: "/tech/chatgpt-light.svg",
    srcDark: "/tech/chatgpt-dark.svg",
  },

  React: { src: "/tech/react.svg" },
  JavaScript: { src: "/tech/js.svg" },
  TypeScript: { src: "/tech/typescript.svg" },
  Python: { src: "/tech/python.svg" },
  "Tailwind CSS": { src: "/tech/tailwindcss.svg" },
  Motion: { src: "/tech/motion.svg" },
  Redux: { src: "/tech/redux.svg" },
  Redis: { src: "/tech/redis.svg" },
  "Node.js": { src: "/tech/nodejs.svg" },
  MongoDB: { src: "/tech/mongodb.svg" },
  PostgreSQL: { src: "/tech/postgre.svg" },
  Supabase: { src: "/tech/supabase.svg" },
  Docker: { src: "/tech/docker.svg" },
  Git: { src: "/tech/git.svg" },

  "Socket.io": {
    srcLight: "/tech/socketio-light.svg",
    srcDark: "/tech/socketio-dark.svg",
  },
  OpenAI: {
    srcLight: "/tech/chatgpt-light.svg",
    srcDark: "/tech/chatgpt-dark.svg",
  },
  Gemini: { src: "/tech/gemini.svg" },
  "Monaco Editor": { src: "/tech/monaco.svg" },
  Mongoose: { src: "/tech/mongoose.svg" },
  JWT: { src: "/tech/jwt.svg" },
  "NextAuth.js": { src: "/tech/nextauth.svg" },
};
