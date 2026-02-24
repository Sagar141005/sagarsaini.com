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
    "I’m Sagar Saini, a full-stack developer building thoughtful web products with clean UX, realtime features, and practical AI.",
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
      "Full-stack developer shipping polished web products with strong frontend craft and solid backend architecture.",
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
      "I build and ship modern web products end-to-end, from UI details to backend systems.",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
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
