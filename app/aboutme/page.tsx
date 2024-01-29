"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { Education } from "@/constants";

const AboutMe = () => {
    const [index, setIndex] = useState(0);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center px-20 mt-20 w-full z-[3]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white w-full h-auto"
                >
                    <span>
                        About
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            me
                        </span>
                    </span>

                    <div className="w-full flex flex-row gap-5">
                        <motion.div
                            variants={slideInFromLeft(0.8)}
                            className="border-2 border-[#7042f88b] rounded-2xl opacity-1 h-full w-full flex flex-col gap-4 m-auto text-start"
                        >
                            <div className="text-2xl pt-4 ml-5">
                                A little bit about me
                            </div>
                            <p className="text-base text-gray-400 font-serif px-5 pb-4 text-justify">
                                Hello! I&apos;m Guduguntla Tharun, a final-year
                                Computer Science student at Sreenidhi Institutes
                                of Science and Technology, deeply passionate
                                about Web development and Artificial
                                intelligence. Constantly learning new
                                technologies, my strengths include attention to
                                detail, creativity, and emotional intelligence.
                                I thrive on challenges, constantly seeking ways
                                to push the boundaries of what&apos;s possible
                                in the digital realm. While I&apos;m a perpetual
                                learner with a keen eye for detail, my creative
                                approach and emotional intelligence are key
                                assets. Join me on this exciting journey where
                                curiosity meets capability!
                            </p>
                        </motion.div>
                        <motion.div
                            variants={slideInFromRight(0.8)}
                            className="border-2 border-[#7042f88b] rounded-2xl opacity-1 h-full w-full flex flex-col gap-4 m-auto text-start"
                        >
                            <div className="text-2xl pt-4 ml-5">Education</div>
                            <div className="flex gap-x-4 mx-5 mb-4 font-serif">
                                {Education.map((item) => {
                                    return (
                                        <div
                                            key={item.itemIndex}
                                            className={`${
                                                index === item.itemIndex &&
                                                "text-purple-600 after:bg-purple-600 after:w-full after:transition-all after:duration-500"
                                            } ${
                                                index !== item.itemIndex &&
                                                "after:bg-white"
                                            } cursor-pointer text-base relative after:w-2/4 after:h-[2px] after:absolute after:bottom-0 after:left-0`}
                                            onClick={() =>
                                                setIndex(item.itemIndex)
                                            }
                                        >
                                            {item.title}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="ml-5 text-base">
                                <div>
                                    Institution:{" "}
                                    <span className="text-gray-400">
                                        {Education[index].Institute}
                                    </span>
                                </div>
                                {Education[index].course && (
                                    <div>
                                        Course:{" "}
                                        <span className="text-gray-400">
                                            {Education[index].course}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    Location:{" "}
                                    <span className="text-gray-400">
                                        {Education[index].Location}
                                    </span>
                                </div>
                                <div>
                                    Year:{" "}
                                    <span className="text-gray-400">
                                        {Education[index].year}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutMe;
