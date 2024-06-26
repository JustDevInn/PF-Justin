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
        <p className=" text-2xl font-teko font-light inline uppercase tracking-widest text-white">About me</p>
        <p className="text-l font-thin italic mt-5 px-5 tracking-wider">
        I am a developer & designer with over four years of diving into this world, having found a passion in crafting websites that not only stand out visually but also offer an experience that resonates with users on a personal level.
        <br></br><br />
        Creating platforms that make a real difference is his compass. Thriving on the challenge of designing interfaces that not only captivate but also contribute positively to people's lives.
        <br></br><br></br>
        Beyond the digital realm, I find solace and strength in the self-discipline of gymnastic strength training—a practice that resonates from my experience in the Royal Marine Corps. Gaming has been a lifelong passion, but nothing beats the thrill of venturing into nature's embrace, discovering new horizons and hidden gems.
        <br></br><br></br>
        Recently, my wife and I made the bold decision to temporarily live abroad. The welcoming climate and the warmth exuded by the local community have infused our lives with a daily dose of joy.
        <br></br><br></br>
        I'm on journey of merging technology with artistry, creating digital landscapes that leave a lasting impact and offer an immersive experience.
        </p>
        <p className="text-2xl font-teko font-light uppercase tracking-widest text-white mt-20">Let's Connect</p>
        <p className="text-l font-thin italic mt-5 px-5 tracking-wider">
        If you're as enthusiastic about software development as I am, let's connect! Feel free to reach out via email or phone, or find me on LinkedIn to explore potential collaborations and exciting opportunities.
        <br />
        <br />
        On the left hand side you'll find social icons to easily reach me, on mobile applications they will be below my picture on the top of the page.
        </p>

        <br />
        </div>
      </div>
    </div>
  );
};

export default About;
