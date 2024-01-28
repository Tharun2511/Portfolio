import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const SideBar = () => {
    return (
        <div className="h-auto w-auto gap-8 fixed flex flex-col px-3 py-4 top-1/4 rounded-xl right-0 z-[4] text-xl font-bold bg-gradient-to-b from-purple-500 to-cyan-500">
            <Link
                href="https://www.instagram.com/mr__gt____/"
                target="_blank"
                className="hover:text-white duration-300"
            >
                <FaInstagram />
            </Link>
            <Link
                href="https://www.linkedin.com/in/tharun-guduguntla-ab1a7a206/"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaLinkedinIn />
            </Link>
            <Link
                href="https://twitter.com/gTharun2511"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaTwitter />
            </Link>
            <Link
                href="https://github.com/Tharun2511"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaGithub />
            </Link>
            <Link
                href="mailto:gtharun2511@gmai.com?subject=subject text"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <MdEmail />
            </Link>
        </div>
    );
};

export default SideBar;
