export type TechConfig = {
  srcLight: string;
  srcDark?: string;
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

  React: { srcLight: "/tech/react.svg" },
  JavaScript: { srcLight: "/tech/js.svg" },
  TypeScript: { srcLight: "/tech/typescript.svg" },
  "Tailwind CSS": { srcLight: "/tech/tailwindcss.svg" },
  Redux: { srcLight: "/tech/redux.svg" },
  "Node.js": { srcLight: "/tech/nodejs.svg" },
  MongoDB: { srcLight: "/tech/mongodb.svg" },
  PostgreSQL: { srcLight: "/tech/postgre.svg" },
  Supabase: { srcLight: "/tech/supabase.svg" },
  Docker: { srcLight: "/tech/docker.svg" },
  Git: { srcLight: "/tech/git.svg" },

  "Socket.io": {
    srcLight: "/tech/socketio-light.svg",
    srcDark: "/tech/socketio-dark.svg",
  },
  OpenAI: {
    srcLight: "/tech/chatgpt-light.svg",
    srcDark: "/tech/chatgpt-dark.svg",
  },
  "Monaco Editor": { srcLight: "/tech/monaco.svg" },
  Mongoose: { srcLight: "/tech/mongoose.svg" },
  "NextAuth.js": { srcLight: "/tech/nextauth.svg" },
};
