import type { Metadata } from "next";
import { nunitoSans } from "@/ui/fonts";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${nunitoSans.variable} font-nunito-sans flex flex-col bg-background text-foreground max-w-screen-sm mx-auto h-screen 
                        lg:flex-row lg:max-w-screen-2xl lg:overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
