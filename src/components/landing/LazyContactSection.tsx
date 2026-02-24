"use client";

import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("./ContactSection"), {
  ssr: false,
  loading: () => <section className="mt-24 min-h-[280px]" aria-hidden="true" />,
});

export default function LazyContactSection() {
  return <ContactSection />;
}
