import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PatentOS | India's Innovation Intelligence Engine",
  description:
    "PatentOS is an India-first innovation intelligence platform for invention mining, patent drafting, prosecution readiness, and law-firm integration.",
  keywords: [
    "PatentOS",
    "patent drafting AI",
    "India patent platform",
    "innovation intelligence",
    "invention mining",
    "patent prosecution",
    "law firm integration",
    "startup patents India",
  ],
  metadataBase: new URL("https://patentos.in"),
  openGraph: {
    title: "PatentOS | India's Innovation Intelligence Engine",
    description:
      "The operating system for real innovation in India. From first-line idea to protected patent asset.",
    url: "https://patentos.in",
    siteName: "PatentOS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PatentOS | India's Innovation Intelligence Engine",
    description:
      "The operating system for real innovation in India. From first-line idea to protected patent asset.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}