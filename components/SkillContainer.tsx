"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideinFromBottom } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { skillsData } from "@/constants";
import Image from "next/image";

const SkillContainer = () => {
    return (
        <motion.div
            className="w-full h-3/4 border border-[#7e54ff61] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg py-3 px-[20px] rounded-[40px] text-gray-200 flex flex-col items-center justify-center"
            variants={slideinFromBottom}
        >
            <div className="w-full h-full font-serif font-bold pb-1">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {skillsData.map((Domain) => {
                        return (
                            <SwiperSlide key={Domain.id}>
                                <div className="text-2xl flex justify-center pb-2">
                                    {Domain.Domain}
                                </div>
                                <div className="grid grid-cols-7 gap-5 px-4 overflow-x-hidden overflow-y-auto w-full h-[350px]">
                                    {Domain.content.map((skill) => {
                                        return (
                                            <div
                                                className="bg-black w-[130px] h-[130px] rounded-xl flex flex-col items-center justify-center p-2 shadow-lg shadow-cyan-400 hover:shadow-purple-400 transition-all duration-300"
                                                key={skill.name}
                                            >
                                                <div className="h-[120px] w-fit py-1 flex items-center">
                                                    <Image
                                                        alt={skill.name}
                                                        src={skill.Image}
                                                        width={skill.width}
                                                        height={skill.height}
                                                    />
                                                </div>
                                                <div className="text-white font-sans text-sm pb-1">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </motion.div>
    );
};

export default SkillContainer;
