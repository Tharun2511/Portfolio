"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { ImPencil2 } from "react-icons/im";
import SkillContainer from "@/components/SkillContainer";

const Skills = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full h-full flex flex-col z-[3] px-20 mt-20 gap-5"
        >
            <motion.div
                className="text-white text-4xl mt-6 font-bold w-full h-1/4 flex gap-2"
                variants={slideInFromTop}
            >
                <ImPencil2 />
                SKILLS &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Abilities
                </span>
            </motion.div>
            <SkillContainer />
        </motion.div>
    );
};

export default Skills;
