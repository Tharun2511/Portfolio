"use client";

import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Index = () => {
    const router = usePathname();
    return (
        <div>
            <AnimatePresence>
                <motion.div className="h-full">
                    <StarsCanvas />
                    <Navbar />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Index;
