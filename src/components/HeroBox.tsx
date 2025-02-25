'use client';

import { motion } from "framer-motion";

const HeroBox = () => {
    return(
        <motion.div 
            className="w-full p-10 text-center text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-bold bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            Matthew Bartchak
        </motion.div>
    );
};

export default HeroBox;