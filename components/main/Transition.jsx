"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    },
};

const Transition = () => {
    const path = usePathname();
    return (
        path !== "/" && (
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10] bg-[#030014]"
                    variants={transVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        delay: 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="fixed top-0 bottom-0 right-full h-screen w-screen z-[9] bg-[#261873]"
                    variants={transVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="fixed top-0 bottom-0 right-full h-screen w-screen z-[8] bg-[#6450d4]"
                    variants={transVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        delay: 0.5,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                />
            </div>
        )
    );
};

export default Transition;

// #261873
// #6450d4
