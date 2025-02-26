import NavItem from "@/components/NavItem";
import Image from "next/image";

const Sidebar = () => {
    return (
      <div className="flex flex-col justify-start p-4 pt-44 pl-24 w-104 bg-transparent">
        <Image src="/profile.jpg" alt="Profile" className="rounded-full w-64 h-64 mb-4 drop-shadow-2xl" width={3021} height={3021} quality={100} />
        <h2 className="text-4xl font-bold text-foreground mt-4 mb-2">Matthew Bartchak</h2>
        <p className="text-xl text-foreground text-stone-500 flex items-center gap-2">
            <Image src="/user.svg" alt="Location" className="w-5 h-5 opacity-50" width={16} height={16} quality={100} />
            Developer
        </p>
        <p className="text-xl text-foreground text-stone-500 flex items-center gap-2">
            <Image src="/location.svg" alt="Location" className="w-5 h-5 opacity-50" width={16} height={16} quality={100} />
            New York, New York
        </p>
        <nav className="flex flex-col mt-8">
          <NavItem href="/" label="Home" />
          <NavItem href="/resume" label="Resume" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/contact" label="Contact" />
        </nav>
      </div>
    );
  };

export default Sidebar;