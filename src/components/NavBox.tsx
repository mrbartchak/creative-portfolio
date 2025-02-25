'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface NavBoxProps {
  label: string;
  href: string;
  index: number;
}

const boxVariants = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.8 + index * 0.1
    }
  }),
  hover: {
    y: -8,
    backgroundColor: "#ffffff",
    color: "#000000",
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

const NavBox = ({ label, href, index }: NavBoxProps) => {
    return (
        <Link href={href} passHref className="flex-1 mx-2">
            <motion.div 
                className="w-full p-4 text-center font-space-grotesk bg-black/30 backdrop-blur-sm rounded-xl shadow-md cursor-pointer border border-white/20 text-xl md:text-2xl"
                variants={boxVariants}
                initial="initial"
                animate="animate"
                custom={index}
                whileHover="hover"
                whileTap="tap"
            >
                {label}
            </motion.div>
        </Link>
    );
};

export default NavBox;
