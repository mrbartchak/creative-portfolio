import Link from "next/link";

const NavItem = ({ href, label }: { href: string; label: string }) => {
    return (
      <Link 
        href={href} 
        className="block text-2xl font-bold mt-2 p-2 border border-foreground rounded-md hover:text-background hover:bg-foreground transition-colors duration-200"
      >
        {label}
      </Link>
    );
};

export default NavItem;