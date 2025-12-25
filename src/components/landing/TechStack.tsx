"use client";

import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import TechIcon from "@/components/common/TechIcon";
import ContentHeader from "../common/ContentHeader";

export default function TechStack() {
  return (
    <div id="tech-stack" className="scroll-mt-24 mt-16 space-y-4">
      <ContentHeader
        heading="Technologies"
        subHeading="The tools and technologies I work with regularly."
      />

      <TooltipProvider delayDuration={50}>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 mt-4 items-center justify-items-center">
          <TechIcon label="React" src="/tech/react.svg" />
          <TechIcon
            label="Next.js"
            srcLight="/tech/nextjs2-light.svg"
            srcDark="/tech/nextjs2-dark.svg"
          />

          <TechIcon label="JavaScript" src="/tech/js.svg" />
          <TechIcon label="TypeScript" src="/tech/typescript.svg" />
          <TechIcon label="Node.js" src="/tech/nodejs.svg" />
          <TechIcon
            label="Express"
            srcLight="/tech/express-dark.svg"
            srcDark="/tech/express-light.svg"
          />

          <TechIcon label="Tailwind CSS" src="/tech/tailwindcss.svg" />
          <TechIcon
            label="shadcn/ui"
            srcLight="/tech/shadcn-ui-light.svg"
            srcDark="/tech/shadcn-ui-dark.svg"
          />
          <TechIcon label="Motion" src="/tech/motion.svg" />

          <TechIcon label="MongoDB" src="/tech/mongodb.svg" />
          <TechIcon label="PostgreSQL" src="/tech/postgre.svg" />
          <TechIcon label="MySQL" src="/tech/mysql.svg" />
          <TechIcon
            label="Prisma"
            srcLight="/tech/prisma-dark.svg"
            srcDark="/tech/prisma-light.svg"
          />
          <TechIcon label="Supabase" src="/tech/supabase.svg" />
          <TechIcon label="Redix" src="/tech/redis.svg" />
          <TechIcon label="Firebase" src="/tech/firebase.svg" />
          <TechIcon label="Redux" src="/tech/redux.svg" />
          <TechIcon
            label="Socket.io"
            srcLight="/tech/socketio-light.svg"
            srcDark="/tech/socketio-dark.svg"
          />
          <TechIcon label="WebRTC" src="/tech/webrtc.svg" />

          <TechIcon label="Docker" src="/tech/docker.svg" />
          <TechIcon label="Git" src="/tech/git.svg" />

          <TechIcon
            label="Vercel"
            srcLight="/tech/vercel-dark.svg"
            srcDark="/tech/vercel-light.svg"
          />
          <TechIcon
            label="Render"
            srcLight="/tech/render-dark.svg"
            srcDark="/tech/render-light.svg"
          />

          <TechIcon
            label="ChatGPT"
            srcLight="/tech/chatgpt-light.svg"
            srcDark="/tech/chatgpt-dark.svg"
          />
        </div>
      </TooltipProvider>
    </div>
  );
}
