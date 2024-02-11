import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdReturnRight } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactContainer = () => {
    const form = useRef<HTMLFormElement>(null);

    const notify = () => {
        console.log("notify called");
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
            position: "top-center"
        });
  
        toast.error("Error Notification !", {
          position: "top-left"
        });
  
        toast.warn("Warning Notification !", {
          position: "bottom-left"
        });
  
        toast.info("Info Notification !", {
          position: "bottom-center"
        });
  
        toast("Custom Style Notification with css class!", {
          position: "bottom-right",
          className: 'foo-bar'
        });
      };

  const sendEmail = () => {
    
    console.log(form);
    emailjs
      .sendForm('service_mhiuy05', 'template_4tu9arn', form.current!, {
        publicKey: 'IK3oulfQ2ahujM78d',
      })
      .then(
        () => {
              console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div className="w-[800px] h-full border border-[#7e54ff61] bg-[#0300145a] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-lg rounded-lg flex justify-center gap-6 mx-auto px-3 py-5">
            <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
                <div className="flex gap-x-10 w-full">
                    <input type="text" placeholder="Name" className="input" name='from_name' />
                    <input type="text" placeholder="email" className="input" name='from_email'/>
                </div>
                <input type="text" placeholder="subject" className="input" name='subject'/>
                <textarea placeholder="message" className="textarea" name='message'></textarea>
                <button className="btn text-white text-2xl font-sans bg-purple-800 h-[50px] rounded-2xl hover:bg-purple-400 flex gap-6 justify-center items-center transition-all duration-300" type='submit' onClick={notify}>Let&apos;s Talk<IoMdReturnRight className="text-3xl"/></button>
            </form>
        </div>
    );
};

export default ContactContainer;
