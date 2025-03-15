import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  // Added font-sans definition
  variable: "--font-sans",
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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <main>
          {modal}
          {children}
        </main>
      </body>
    </html>
  );
}
