"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideinFromBottom } from "@/utils/motion";
import { skillsData } from "@/constants";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import Image from "next/image";

const Skills = () => {
    const [index, setIndex] = useState(0);
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
            <motion.div
                className="w-full h-3/4 border border-[#7042f861] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg py-3 px-[20px] mb-[10px] rounded-[40px] text-gray-200 flex flex-col items-center justify-center"
                variants={slideinFromBottom}
            >
                <div className="flex w-full h-1/6 justify-between items-center font-serif font-bold text-gray-400 px-8 transition-all ease-linear duration-500">
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
                <div className="grid grid-cols-7 gap-5 py-5 px-2 overflow-y-scroll w-full h-[350px]">
                    {index - 1 >= 0 && (
                        <div
                            className="text-xl bg-black text-gray-400 p-3 rounded-3xl w-fit h-auto absolute top-2/4 left-[-20px] hover:text-white hover:text-2xl transition-all duration-300"
                            onClick={() => setIndex(index - 1)}
                        >
                            <FaArrowLeft />
                        </div>
                    )}

                    {index + 1 < skillsData.length && (
                        <div
                            className="text-xl bg-black text-gray-400 p-3 rounded-3xl w-fit h-auto absolute top-2/4 right-[-20px] hover:text-white hover:text-2xl transition-all duration-300"
                            onClick={() => setIndex(index + 1)}
                        >
                            <FaArrowRight />
                        </div>
                    )}

                    {skillsData[index].content.map((skill) => {
                        return (
                            <div
                                className="bg-black w-[130px] h-[130px] rounded-xl flex flex-col items-center justify-center p-2 shadow-lg shadow-cyan-400 hover:shadow-purple-400 transition-all duration-300"
                                key={skill.name}
                            >
                                <div className="h-[120px] w-fit py-1 align-middle">
                                    <Image
                                        alt={skill.name}
                                        src={skill.Image}
                                        width={skill.width}
                                        height={skill.height}
                                    />
                                </div>
                                <div className="text-white pb-1">{skill.name}</div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
