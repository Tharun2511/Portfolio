"use client";

import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import Transition from "@/components/main/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Index = () => {
    const router = usePathname();
    return (
        <div>
            <AnimatePresence>
                <motion.div className="h-full">
                    <Transition />
                    <StarsCanvas />
                    <Navbar />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Index;
