import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mandatory Hygiene Gateway | Enforced by Design",
  description: "An intelligent gateway that integrates touchless handwashing with automated access control. Engineering the future of public health.",
  icons: {
    icon: [
      { url: "/favicon-modified.png", href: "/favicon-modified.png" },
    ],
    shortcut: ["/favicon-modified.png"],
    apple: [
      { url: "/favicon-modified.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.className} antialiased bg-black text-white`}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
