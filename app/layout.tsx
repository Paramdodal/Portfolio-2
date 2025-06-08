import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paramdodal.in"),
  alternates: {
    canonical: "https://paramdodal.in",
  },
  title: "Param Dodal",
  description: "Param Dodal is a full-stack developer and software engineer.",
  keywords:
    "Param Dodal, Full Stack Developer, Web Development, React, Node.js, AI, Open Source, India, Software Engineer, Portfolio",
  openGraph: {
    locale: "en_US",
    siteName: "Param Dodal",
    type: "website",
    title: "Param Dodal",
    description: "Param Dodal is a full-stack developer and software engineer.",
    url: "https://paramdodal.in",
    images: [
      {
        url: "/og-image.jpg", // ensure you place the image in /public/og-image.jpg
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Param Dodal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
