import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Contact = () => {
  return (
    <div
      name="contact"
      className="px-5 w-full h-50vh bg-gradient-to-b from-black to-gray-900 text-white pb-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <motion.div
        variants={fadeIn('right')}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className="pb-8">
          <p className="text-6xl uppercase font-teko tracking-wider inline ">
            Contact
          </p>
          <p className="py-6 text-gray-300 px-5">If you want to chat or grab a drink and talk web design, don't hesitate shoot me an email.</p>
        </motion.div>
{/* form */}
        <div
        className=" flex justify-center items-center">
          <motion.form
            variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border text-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border text-gray-300 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border text-gray-300 focus:outline-none"
              required
            ></textarea>

            <button className="my-5 sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white px-6 py-2 duration-300 hover:bg-white hover:text-black">
              Let's talk
            </button>
          </motion.form>
        </div>
        {/* form ending */}
      </div>
    <footer className="h-[350px] md:h-[450px] flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
  {/* details */}
  <div className="w-full flex flex-row justify-between md:flex-col mt-10">
      <h1 className="text-6xl uppercase font-teko tracking-wider inline ">
      Details
      </h1>
    <div className="lg:px-10 flex flex-col justify-start md:justify-between md:flex-row text-xs md:text-lg text-white">
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Email</h5>
        <a
        href="mailto:Peeters.justin@yahoo.com"
        className="font-thin">Peeters.justin@yahoo.com</a>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Phone</h5>
        <p className="font-thin">+361 25 18 34 59</p>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Social</h5>
        <a
        href="http://www.instagram.com/justinpeeters"
        target="blank"
        className="font-thin"
        >@justinpeeters</a>
      </div>
    </div>
  </div>
    {/* copyright + kvk */}
    <div className="mt-10 w-full flex flex-row justify-between text-white font-thin text-[8px] lg:text-[10px] tracking-widest">
      <p className="">Copyright 2023 all rights reserved.</p>
      <p>KVK: <span className="font-medium">Justin Peeters Coaching 89798690899</span></p>
    </div>
      </footer>
    </div>
  );
};

export default Contact;
