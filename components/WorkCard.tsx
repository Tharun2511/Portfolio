import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

interface Props {
    title: string;
    image: string;
    width: number;
    height: number;
    desc: string;
    technologies: string;
    gitLink: string;
    liveLink: string;
}

const WorkCard = ({
    title,
    image,
    width,
    height,
    desc,
    technologies,
    gitLink,
    liveLink,
}: Props) => {
    return (
        <div className=" rounded-lg border border-[#2A0E61] w-[400px] h-[450px] mx-auto shadow-lg shadow-cyan-400">
            <Image
                src={image}
                alt={title}
                width={width}
                height={height}
                className="w-full h-2/4 p-2"
            />
            <div className="p-4 flex flex-col justify-between">
                <h1 className="text-xl font-semibold text-white font-serif">
                    {title}
                </h1>
                <p className="mt-1 text-gray-300 text-md overflow-clip text-base font-sans">
                    {technologies}
                </p>
                <p className="h-20 mt-2 text-gray-400 text-sm text-justify overflow-hidden font-sans">
                    {desc}
                </p>
                <div className="flex justify-between text-white text-2xl pt-4">
                    {gitLink && (
                        <Link href={gitLink} target="_blank">
                            <FaCode className="text-shadow" />
                        </Link>
                    )}
                    {liveLink && (
                        <Link href={liveLink} target="_blank">
                            <FaLink className="text-shadow" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
