import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { sideBarContent } from "@/constants";

const SideBar = () => {
    return (
        <div className="h-auto w-auto gap-8 fixed flex flex-col px-3 py-4 top-1/4 rounded-xl right-0 z-[4] text-xl font-bold bg-gradient-to-b from-purple-500 to-cyan-500">
            {sideBarContent.map((item) => (
                <Link
                    href={item.link}
                    target="_blank"
                    className="hover:text-white duration-300"
                    key={item.title}
                >
                    {item.title === "Instagram" ? (
                        <FaInstagram />
                    ) : item.title === "Email" ? (
                        <SiGmail />
                    ) : item.title === "LinkedIn" ? (
                        <FaLinkedinIn />
                    ) : item.title === "Twitter" ? (
                        <FaTwitter />
                    ) : (
                        <FaGithub />
                    )}
                </Link>
            ))}
        </div>
    );
};

export default SideBar;
