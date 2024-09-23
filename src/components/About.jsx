import React from "react";
// import {motion} from 'framer-motion';
// import {fadeIn} from '../variants';

const About = () => {
  return (
    <div
      name="about"
      className="px-5 py-20 w-full bg-gradient-to-b from-gray-900 to-black text-gray-300"
    >
      <div
      className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 pb-20">
        <div className="pb-8 mb-10">
          <p className="text-6xl uppercase text-white font-teko tracking-wider inline">
            About
          </p>
        </div>
<div className="">
        <p className=" text-2xl font-teko font-light inline uppercase tracking-widest text-white">me</p>
        <p className="text-l font-thin italic mt-5 px-5 tracking-wider">

I am a developer and designer with over four years of experience, specializing in crafting visually captivating websites that provide meaningful user experiences. My passion lies in creating digital platforms that not only stand out but also make a positive impact on those who use them.
<br /><br />
I’m driven by the challenge of designing interfaces that are not just visually engaging but also functional, intuitive, and valuable to users.
<br /><br />
Outside of work, I stay grounded through gymnastic strength training, a discipline influenced by my time in the Royal Marine Corps. While gaming and outdoor exploration are personal passions, they also inspire the creativity and problem-solving that I bring to my work.
<br /><br />
Currently, my wife and I are enjoying the experience of living abroad, embracing new cultures and perspectives that enrich both my personal and professional life.
<br /><br />
My goal is to blend technology and design to create truly unique digital solutions.
        </p>

        <br />
        </div>
      </div>
    </div>
  );
};

export default About;
