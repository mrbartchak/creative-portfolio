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
      <body className={`${nunitoSans.variable} font-nunito-sans flex flex-col bg-background text-foreground min-h-screen scrollbar-hidden items-center
                        2xl:bg-background
                        xl:bg-background
                      lg:bg-yellow-200
                      md:bg-emerald-200
                      sm:bg-blue-200`}>
        <div className="flex flex-1 flex-col lg:flex-row max-w-screen-md w-full lg:max-w-screen-2xl p-8 space-y-4 lg:space-y-0 lg:space-x-8">
          <header className="w-full lg:basis-1/4">
            <Navbar />
          </header>
          <main className="w-full flex-1 lg:basis-3/4 justify-center">
              {children}
          </main>
        </div>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
