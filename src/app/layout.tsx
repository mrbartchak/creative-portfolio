import type { Metadata } from "next";
import { zenKaku } from "@/ui/fonts";
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
      <body className={`${zenKaku.variable} font-zen-kaku`}>
        {children}
      </body>
    </html>
  );
}
