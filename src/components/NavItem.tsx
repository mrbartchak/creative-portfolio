"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, label }: { href: string; label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link 
        href={href} 
        className={`flex-1 text-center w-full block text-sm font-bold p-2 lg:p-3 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.15)]
                    transition-transform duration-300 ease-in-out hover:scale-105
                    ${isActive ? 'bg-foreground text-background' : 'hover:bg-foreground hover:text-background'}
                    lg:text-2xl lg:text-left`}      
      >
        {label}
      </Link>
    );
};

export default NavItem;