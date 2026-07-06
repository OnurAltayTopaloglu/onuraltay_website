import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const ogTitle = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://onuraltay.dev"),
  title: ogTitle,
  description: profile.tagline,
  keywords: [
    "Onur Altay Topaloğlu",
    "Machine Learning Engineer",
    "AI Researcher",
    "Computer Vision",
    "Deep Learning",
    "METU",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: ogTitle,
    description: profile.tagline,
    url: "https://onuraltay.dev",
    siteName: profile.name,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: ogTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: profile.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Runs before paint: marks JS available (for scroll-reveal) and applies
            the theme from a saved choice or the system preference (no flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=document.documentElement;e.classList.add('js');var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;e.classList.toggle('dark',d);}catch(_){document.documentElement.classList.add('js');}})();`,
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
