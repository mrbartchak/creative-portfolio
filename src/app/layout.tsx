import type { Metadata } from "next";
import { zenKaku } from "@/ui/fonts";
import "@/ui/globals.css";
import Sidebar from "@/components/Sidebar";

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
      <body className={`${zenKaku.variable} font-zen-kaku flex bg-background text-foreground max-w-[1920px] mx-auto`}>
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
