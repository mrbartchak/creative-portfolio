import type { Metadata } from "next";
import { nunitoSans, zenKaku } from "@/ui/fonts";
import "@/ui/globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

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
      <body className={`${nunitoSans.variable} font-nunito-sans flex bg-background text-foreground max-w-[1920px] mx-auto h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
