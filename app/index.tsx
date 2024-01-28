"use client";

import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import Transition from "@/components/main/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Index = () => {
    const route = usePathname();
    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div key={route} className="h-full">
                    <StarsCanvas />
                    <Navbar />
                    <Transition />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Index;
