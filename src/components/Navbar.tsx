import NavItem from "@/components/NavItem";
import Image from "next/image";

const Navbar = () => {
    return (
      <div className="flex flex-col h-full bg-transparent space-y-8 justify-center lg:items-center"> {/* Full Sidebar */}
        <div className="flex flex-row items-center space-x-4 lg:space-x-0 lg:space-y-8
                        lg:flex-col"> {/* Profile photo + Name + Title */}
          <Image src="/images/profile.jpg" alt="Profile" className="rounded-full w-32 lg:w-64 h-auto shadow-2xl" width={3021} height={3021} quality={100} />
          
          <div className=""> {/* Name + Title */}
            <h2 className="text-3xl font-bold text-foreground">Matthew Bartchak</h2>
            <p className="text-xl text-black opacity-60 flex items-center gap-2">
                <Image src="images/icons//user-icon.svg" alt="Location" className="w-4 h-4" width={16} height={16} quality={100} />
                Developer
            </p>
            <p className="text-xl text-black opacity-60 flex items-center gap-2">
                <Image src="/images/icons/pin-icon.svg" alt="Location" className="w-4 h-4" width={16} height={16} quality={100} />
                New York, New York
            </p>
          </div>
        </div>
        <nav className="flex flex-row space-x-2
                        lg:flex-col lg:space-x-0 lg:space-y-2 lg:w-80">
          <NavItem href="/" label="Home" />
          <NavItem href="/resume" label="Resume" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/contact" label="Contact" />
        </nav>
      </div>
    );
  };

export default Navbar;