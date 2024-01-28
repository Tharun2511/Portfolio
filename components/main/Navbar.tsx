"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SideBar from "./SideBar";
import { NavContent } from "@/constants/index";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const path = usePathname();
    return (
        <div>
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-285px] w-full h-auto left-0 z-1 object-cover"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[4] px-10">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                    <Link
                        href="/"
                        className="h-auto w-auto flex flex-row items-center"
                    >
                        <span className="font-serif font-extrabold text-xl ml-[5px] hidden md:block text-gray-300">
                            Guduguntla Tharun
                        </span>
                    </Link>

                    <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
                        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                            {NavContent.map((item) => (
                                <Link
                                    href={item.path}
                                    className="relative"
                                    key={item.title}
                                >
                                    {path == item.path && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 top-full block h-[2px] bg-sky-50 w-full"
                                        />
                                    )}
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SideBar />
        </div>
    );
};

export default Navbar;
