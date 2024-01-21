import React from "react";
import HeroContent from "../sub/HeroContent";
import SideBar from "./SideBar";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <HeroContent />
        </div>
    );
};

export default Hero;
