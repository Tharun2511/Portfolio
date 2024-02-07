import React from "react";
import { IoMdReturnRight } from "react-icons/io";

const ContactContainer = () => {
    return (
        <div className="w-[800px] h-full border border-[#7e54ff61] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg rounded-lg flex justify-center gap-6 mx-auto px-3 py-5">
            <form className="flex flex-col gap-6">
                <div className="flex gap-x-10 w-full">
                    <input type="text" placeholder="Name" className="input" />
                    <input type="text" placeholder="email" className="input" />
                </div>
                <input type="text" placeholder="subject" className="input" />
                <textarea placeholder="message" className="textarea"></textarea>
                <button className="btn text-white text-2xl font-sans bg-purple-800 h-[50px] rounded-2xl hover:bg-purple-400 flex gap-6 justify-center items-center">Let&apos;s Talk<IoMdReturnRight className="text-3xl"/></button>
            </form>
        </div>
    );
};

export default ContactContainer;
