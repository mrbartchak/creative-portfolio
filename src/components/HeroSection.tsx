import HeroBox from "./HeroBox";
import NavBox from "./NavBox";

export default function HeroSection() {
    const navLinks = [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" },
        { label: "Contact", href: "/contact" },
    ];

    return(
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4">
            <HeroBox />
            <div className="mt-6 flex justify-between w-full">
                {navLinks.map(({ label, href }, index) => (
                    <NavBox key={href} label={label} href={href} index={index} />
                ))}
            </div>
        </div>
    );
}