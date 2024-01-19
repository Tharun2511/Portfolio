"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center relative top-[-80px] justify-center font-sans px-20 w-full h-auto z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Full Stack Developer
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-4 mt-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi, I&apos;m
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Tharun</span>
                    </span>
                    <span className="text-4xl font-semibold">
                        Let&apos;s build something amazing
                        </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 mt-5 max-w-[600px]"
                >
                    I&apos;m a final year student at SNIST, passionate about full stack development and Artificial Intelligence.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    My Resume
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-auto flex justify-center items-center"
            >
                <img
                    src="/mainIconsdark.svg"
                    alt="work Icons"
                    height={500}
                    width={500}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
