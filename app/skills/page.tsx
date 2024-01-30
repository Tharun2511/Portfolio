"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideinFromBottom } from "@/utils/motion";
import { skillsData } from "@/constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Skills = () => {
    const [index, setIndex] = useState(0);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col z-[3] px-20 mt-20 gap-5"
        >
            <motion.div
                className="text-white text-4xl mt-6 font-bold w-full h-auto"
                variants={slideInFromTop}
            >
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Skills
                </span>
            </motion.div>
            <motion.div
                className="w-full h-full border border-[#7042f861] bg-[#0300145e] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg py-3 px-[20px] mb-[10px] rounded-[40px] text-gray-200 flex flex-col items-center"
                variants={slideinFromBottom}
            >
                <div className="flex w-full justify-between items-center font-bold text-gray-400 relative px-8 transition-all duration-500">
                    <div className="w-1/3 flex justify-start">
                        {index - 1 >= 0 ? skillsData[index - 1].Domain : ""}
                    </div>
                    <div className="w-1/3 flex justify-center text-2xl text-white">
                        {skillsData[index].Domain}
                    </div>
                    <div className="w-1/3 flex justify-end">
                        {index + 1 < skillsData.length
                            ? skillsData[index + 1].Domain
                            : ""}
                    </div>
                </div>
                <div className="w-full h-[330px] flex items-center">
                    {index - 1 >= 0 && (
                        <div
                            className="text-xl bg-black text-gray-400 p-3 rounded-3xl absolute left-[-20px] hover:text-white hover:text-2xl transition-all duration-300"
                            onClick={() => setIndex(index - 1)}
                        >
                            <FaArrowLeft />
                        </div>
                    )}

                    {index + 1 < skillsData.length && (
                        <div
                            className="text-xl bg-black text-gray-400 p-3 rounded-3xl absolute right-[-20px] hover:text-white hover:text-2xl transition-all duration-300"
                            onClick={() => setIndex(index + 1)}
                        >
                            <FaArrowRight />
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
