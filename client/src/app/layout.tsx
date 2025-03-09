import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/hooks/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X",
  description: "X App",
  openGraph: {
    title: "X",
    description: "X (formerly Twitter)",
    images: [
      {
        url: `${process.env.MAIN_IMAGE_URL}`,
        alt: "X Social Platform",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center min-h-screen dark:bg-black">
          <div className="sm:flex max-w-screen-xl w-full">
            <Navigation />
            <main className="sm:ml-20 mt-14 sm:mt-0 xl:ml-64 w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
