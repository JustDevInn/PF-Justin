import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen pt-20 bg-gradient-to-b from-black to-gray-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl uppercase font-teko tracking-wider inline border-b border-award-orange">
            Contact
          </p>
          <p className="py-6 text-gray-300">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
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

            <button className="my-4 sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white px-6 py-2 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
