import Link from "next/link";

export default function NavBox({ label, href }: { label: string; href: string }) {
    return (
        <Link href={href} passHref>
            <div className="w-32 p-4 text-center bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:-translate-y-2 transition-transform cursor-pointer">
                {label}
            </div>
        </Link>
    );
}
