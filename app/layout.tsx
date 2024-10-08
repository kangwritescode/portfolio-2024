import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://imdavidkang.com"),
  alternates: {
    canonical: "https://imdavidkang.com",
  },
  title: "David Kang - Software Engineer @ Aetna",
  description:
    "David Kang is a software engineer.",
  keywords:
    "David Kang, Software Engineer, Web Developer, Web Engineer, React Developer, Javascript Developer",
  openGraph: {
    locale: "en_US",
    siteName: "David Kang",
    type: "website",
    title: "David Kang",
    description:
      "David Kang is a software engineer.",
    url: "https://imdavidkang.com",
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
