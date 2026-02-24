"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/components/common/ChatWidget"), {
  ssr: false,
});

export default function LazyChatWidget() {
  return <ChatWidget />;
}
