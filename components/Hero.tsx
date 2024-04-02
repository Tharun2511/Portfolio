"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Hero = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between px-20 mt-[15vh] w-full z-[3] relative cursor-default"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[10px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-lg">
                        Fullstack Developer
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Hi, I&apos;m
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Tharun
                        </span>
                    </span>
                    <span className="text-3xl font-semibold">
                        Let&apos;s build something amazing
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-md text-gray-400 my-5 max-w-[600px]"
                >
                    Crafting the Designs into Real world entities.passion for
                    coding ,creating innovative and user-friendly web
                    applications and a knack for understanding user needs.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    href="https://drive.google.com/file/d/1xeiuWw7v7o38ruBVHewMCWpLDzCvyqk7/view?usp=sharing"
                    target="_blank"
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    My Resume
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height="500"
                    width="500"
                />
            </motion.div>
        </motion.div>
    );
};

export default Hero;
