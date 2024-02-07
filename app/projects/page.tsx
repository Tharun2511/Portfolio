"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideinFromBottom } from "@/utils/motion";
import { GiFilmProjector } from "react-icons/gi";
import WorkContainer from "@/components/WorkContainer";

const Projects = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full h-full flex flex-col z-[3] px-20 mt-20 gap-5"
        >
            <motion.div
                className="text-white text-3xl font-bold mt-6 w-full h-1/4 flex gap-2"
                variants={slideInFromTop}
            >
                <GiFilmProjector className="text-4xl" />
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    WORK
                </span>
            </motion.div>
            <WorkContainer />
        </motion.div>
    );
};

export default Projects;
