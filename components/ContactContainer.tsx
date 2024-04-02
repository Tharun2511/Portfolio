import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdReturnRight } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfinitySpin, TailSpin } from "react-loader-spinner";

const ContactContainer = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm("service_mhiuy05", "template_4tu9arn", form.current!, {
                publicKey: "IK3oulfQ2ahujM78d",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    toast.success("Message Sent Successfully");
                    form.current!.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error("Something went wrong");
                    setLoading(false);
                }
            );
    };

    return (
        <div className="w-[800px] h-full border border-[#7e54ff61] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg rounded-lg flex justify-center gap-6 mx-auto px-3 py-10">
            <form
                className="flex flex-col gap-6"
                ref={form}
                onSubmit={(e) => sendEmail(e)}
            >
                <div className="flex gap-x-10 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input"
                        name="from_name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        name="from_email"
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input"
                    name="subject"
                    required
                />
                <textarea
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    rows={10}
                    required
                ></textarea>
                <button
                    className="btn text-white text-2xl font-sans bg-purple-800 h-[50px] rounded-2xl hover:bg-purple-400 flex gap-6 justify-center items-center transition-all duration-300"
                    type="submit"
                >
                    {!loading && <div className="flex items-center gap-6">
                        Let&apos;s Talk
                        <IoMdReturnRight className="text-3xl" />
                    </div>}
                    <TailSpin
                        visible={loading}
                        height="40"
                        width="40"
                        color="#fff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                </button>
            </form>
        </div>
    );
};

export default ContactContainer;
