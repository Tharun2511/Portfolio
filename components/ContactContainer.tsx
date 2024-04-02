import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

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
                    toast.success("Message sent successfully", {
                        position: "bottom-left",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                    });
                    form.current!.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error("Failed to send message", {
                        position: "bottom-left",
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                    });
                    setLoading(false);
                }
            );
    };

    return (
        <div className="w-[800px] h-[65vh] border border-[#7e54ff61] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg rounded-lg flex justify-center gap-6 mx-auto px-3 py-10">
            <form
                className="flex flex-col gap-4"
                ref={form}
                onSubmit={(e) => sendEmail(e)}
            >
                <div className="flex gap-x-10 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input"
                        name="from_name"
                        autoComplete="off"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        name="from_email"
                        autoComplete="off"
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input"
                    name="subject"
                    autoComplete="off"
                    required
                />
                <textarea
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    rows={5}
                    autoComplete="off"
                    required
                ></textarea>
                <div className="flex justify-center">
                    <button
                        className="w-full text-white text-xl font-sans bg-purple-800 py-2 rounded-2xl hover:bg-purple-400 flex gap-4 justify-center items-center transition-all duration-300"
                        type="submit"
                    >
                        {!loading && (
                            <div className="flex items-center gap-6">
                                Let&apos;s talk
                                <IoIosSend className="text-3xl" />
                            </div>
                        )}
                        <TailSpin
                            visible={loading}
                            height="30"
                            width="30"
                            color="#fff"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactContainer;
