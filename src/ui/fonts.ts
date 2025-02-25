import { Outfit, Inter, Space_Grotesk } from "next/font/google";

export const outfitFont = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

export const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});