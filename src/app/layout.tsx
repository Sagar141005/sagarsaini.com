import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Sagar Saini — Full-Stack Developer",
    template: "%s | Sagar Saini",
  },
  description:
    "Portfolio of Sagar Saini — Full-Stack Developer building real-time collaboration tools, AI-powered apps, and modern web experiences.",
  keywords: [
    "Sagar Saini",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "React",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Sagar Saini", url: "https://sagarsaini.com" }],
  creator: "Sagar Saini",
  publisher: "Sagar Saini",
  metadataBase: new URL("https://sagarsaini.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagarsaini.com",
    title: "Sagar Saini — Full-Stack Developer",
    description:
      "Crafting high-performance, real-time and AI-powered web applications.",
    siteName: "Sagar Saini Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagar Saini Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sagar Saini — Full-Stack Developer",
    description:
      "Crafting high-performance, real-time and AI-powered web applications.",
    creator: "@not_sagar1410",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
