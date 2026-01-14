import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplaySC = Playfair_Display_SC({
  variable: "--font-playfair-display-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: " OMO’BA ADEDOTUN A. OLATEJU-JAGUN",
  description: "Welcome to my portfolio website.",
  keywords: ["Adedotun Olateju-Jagun", "Prince Jagun"],
  authors: [{ name: "Adedotun Olateju-Jagun" }],
  openGraph: {
    title: "OMO’BA ADEDOTUN A. OLATEJU-JAGUN",
    description: "Welcome to my portfolio website.",
    // url: "https://your-portfolio-domain.com",
    siteName: "Prince Adedotun Olateju-Jagun Portfolio",
    // images: [
    //   {
    //     url: "https://your-portfolio-domain.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "OMO’BA ADEDOTUN A. OLATEJU-JAGUN Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplaySC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
