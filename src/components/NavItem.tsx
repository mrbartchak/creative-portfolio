"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, label }: { href: string; label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link 
        href={href} 
        className={`flex-1 text-center w-full block text-sm font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-[0_0_5px_rgba(0,0,0,0.15)]
                    ${isActive ? 'bg-foreground text-background' : 'hover:bg-foreground hover:text-background'}
                    lg:text-2xl lg:text-left`}      
      >
        {label}
      </Link>
    );
};

export default NavItem;