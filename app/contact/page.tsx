"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideinFromBottom } from "@/utils/motion";
import { MdOutlineCastConnected } from "react-icons/md";
import { Comment } from "react-loader-spinner";
import ContactContainer from "@/components/ContactContainer";

const Contact = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full h-full flex flex-col z-[3] px-20 mt-20 gap-5 text-white"
        >
            <motion.div
                className=" flex items-center text-3xl mt-6 font-bold w-full h-1/ gap-2"
                variants={slideInFromTop}
            >
                <Comment
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#000"
                    backgroundColor="#fff"
                />
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
