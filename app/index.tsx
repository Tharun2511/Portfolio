"use client";

import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Index = () => {
    return (
        <div>
            <AnimatePresence>
                <motion.div className="h-screen">
                    <StarsCanvas />
                    <Navbar />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Index;
