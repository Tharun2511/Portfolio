"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideinFromBottom } from "@/utils/motion";
import { MdOutlineCastConnected } from "react-icons/md";
import ContactContainer from "@/components/ContactContainer";

const Contact = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full h-full flex flex-col z-[3] px-20 mt-20 gap-5"
        >
            <motion.div
                className="text-white text-3xl mt-6 font-bold w-full h-1/4 flex gap-2"
                variants={slideInFromTop}
            >
                <MdOutlineCastConnected />
                Let&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    CONNECT
                </span>
            </motion.div>
            <motion.div variants={slideinFromBottom}>
                <ContactContainer />
            </motion.div>
        </motion.div>
    );
};

export default Contact;
