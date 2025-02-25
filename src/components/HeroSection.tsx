import HeroBox from "./HeroBox";
import NavBox from "./NavBox";

export default function HeroSection() {

    const navLinks: { label: string; href: string }[] = [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" },
        { label: "Contact", href: "/contact" },
    ];

    return(
            <div className="relative z-10 flex flex-col items-center w-full animate-floating">
                <HeroBox />
                <div className="mt-6 flex gap-4">
                    {navLinks.map(({ label, href }) => (
                        <NavBox key={href} label={label} href={href} />
                    ))}
                </div>
            </div>
    );
}