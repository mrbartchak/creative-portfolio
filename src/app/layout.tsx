import type { Metadata } from "next";
import { nunitoSans } from "@/ui/fonts";
import "@/ui/globals.css";
import Navbar from "@/components/Navbar";
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
      <body className={`${nunitoSans.variable} font-nunito-sans flex flex-col bg-background text-foreground min-h-screen scrollbar-hidden p-2
                        2xl:bg-red-200
                        xl:bg-orange-200
                        lg:bg-yellow-200
                        md:bg-emerald-200
                        sm:bg-blue-200`}>
        <header className="border border-green-600">
          <Navbar />
        </header>
        <main className="flex-1 scrollbar-hidden border border-blue-600">
            {children}
        </main>
        <footer className="border border-pink-600">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
