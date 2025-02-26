"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, label }: { href: string; label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link 
        href={href} 
        className={`flex-1 text-center block text-sm font-bold mt-2 p-3 rounded-lg transition-colors duration-300 shadow-[0_0_5px_rgba(0,0,0,0.15)]
                    lg:text-left lg:text-2xl
                    ${isActive ? 'bg-foreground text-background' : 'hover:bg-foreground hover:text-background'}`}
      >
        {label}
      </Link>
    );
};

export default NavItem;