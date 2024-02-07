import React from "react";
import { motion } from "framer-motion";
import { slideinFromBottom } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { workData } from "@/constants";
import WorkCard from "./WorkCard";

const WorkContainer = () => {
    return (
        <motion.div
            variants={slideinFromBottom}
            className="h-fit w-full"
        >
            <Swiper
               
                navigation={true}
                keyboard={true}
                slidesPerView={2}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper pb-2"
            >
                {workData.map((work, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                        >
                            <WorkCard
                                title={work.title}
                                image={work.image}
                                width={work.width}
                                height={work.height}
                                desc={work.desc}
                                technologies={work.Technologies}
                                gitLink={work.gitLink}
                                liveLink={work.liveLink}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </motion.div>
    );
};

export default WorkContainer;
