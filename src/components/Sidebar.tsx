import NavItem from "@/components/NavItem";
import Image from "next/image";

const Sidebar = () => {
    return (
      <div className="flex flex-col p-4 pt-24 w-full bg-transparent lg:justify-start lg:pl-12 lg:w-96"> {/* Full Sidebar */}
        <div className="flex flex-row lg:flex-col lg:items-center"> {/* Profile photo + Name + Title */}
          <Image src="/profile.jpg" alt="Profile" className="rounded-full lg:w-64 lg:h-64 w-32 h-32 p-2 mb-2 mr-2 drop-shadow-2xl" width={3021} height={3021} quality={100} />
          <div> {/* Name + Title */}
            <h2 className="text-3xl font-bold text-foreground mt-4 mb-1">Matthew Bartchak</h2>
            <p className="text-xl text-foreground text-stone-500 flex items-center gap-2">
                <Image src="/user.svg" alt="Location" className="w-5 h-5 opacity-50" width={16} height={16} quality={100} />
                Developer
            </p>
            <p className="text-xl text-foreground text-stone-500 flex items-center gap-2">
                <Image src="/location.svg" alt="Location" className="w-5 h-5 opacity-50" width={16} height={16} quality={100} />
                New York, New York
            </p>
          </div>
        </div>
        <nav className="flex lg:flex-col flex-row mt-4 lg:space-x-0 space-x-2"> {/* Nav Items */}
          <NavItem href="/" label="Home" />
          <NavItem href="/resume" label="Resume" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/contact" label="Contact" />
        </nav>
      </div>
    );
  };

export default Sidebar;