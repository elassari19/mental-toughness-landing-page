import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const messina = localFont({
  src: [
    {
      path: "./fonts/MessinaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/MessinaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MessinaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MessinaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-messina",
});

const cooper = localFont({
  src: [
    {
      path: "./fonts/cooperl.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/cooperli.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-cooper",
});

export const metadata: Metadata = {
  title: "Mental Toughness",
  description: ""
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${messina.variable} ${cooper.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
