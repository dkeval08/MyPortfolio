import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio - Keval",
  description: "One Page website describing About Me",
  icons: {
    icon: "/favicon.ico", // place favicon.ico in /public
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // optional, for iOS
  },
  openGraph: {
    title: "My Portfolio - Keval",
    description: "One Page website describing About Me",
    url: "https://image-k-format.vercel.app",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://image-k-format.vercel.app/logo.png", // ⚡ add an OG image in /public
        width: 1200,
        height: 630,
        alt: "My Portfolio - Keval",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio - K",
    description: "One Page website describing About Me",
    images: ["https://image-k-format.vercel.app/logo.png"], // ⚡ same OG image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
