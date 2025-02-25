import type { Metadata } from "next";
import { spaceGrotesk, interFont } from "@/ui/fonts";
import "@/ui/globals.css";

export const metadata: Metadata = {
  title: "Matthew Bartchak Portfolio",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${interFont.variable} font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
