import { Zen_Kaku_Gothic_Antique, Nunito_Sans } from "next/font/google";

export const zenKaku = Zen_Kaku_Gothic_Antique({
    variable: "--font-zen-kaku",
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});