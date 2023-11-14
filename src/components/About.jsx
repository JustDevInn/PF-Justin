import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 pb-20">
        <div className="pb-8 mb-10">
          <p className="text-6xl uppercase text-white font-teko tracking-wider inline">
            About
          </p>
        </div>
<div className="overflow-auto">
        <p className="text-2xl font-teko inline uppercase tracking-wider text-white">About Justin Peeters</p>
        <p className="text-l italic mt-5 px-5">
        Justin is a Bali based developer with over four years of diving into this world, he’s found his passion in crafting websites that not only stand out visually but also offer an experience that resonates with users on a personal level.
        <br></br><br></br>
        Creating platforms that make a real difference is his compass. He thrives on the challenge of designing interfaces that not only captivate but also contribute positively to people's lives.
        <br></br><br></br>
        Beyond the digital realm, he finds solace and strength in the self-discipline of gymnastic strength training—a practice that resonates from his experiences in the Royal Marine Corps. Gaming has been a lifelong passion, but nothing beats the thrill of venturing into nature's embrace, discovering new horizons and hidden gems.
        <br></br><br></br>
        Recently, my wife and I made the bold decision to call Bali home. The welcoming climate and the warmth exuded by the local community have infused our lives with a daily dose of joy.
        <br></br><br></br>
        He’s on journey of merging technology with artistry, creating digital landscapes that leave a lasting impact and offer an immersive experience.
        </p>


        <br />
        <p className="text-2xl font-teko inline uppercase tracking-wider text-white">Let's Connect</p>
        <p className="text-l mt-1 italic px-5">
        If you're as enthusiastic about software development as I am, let's connect! Feel free to reach out via email or phone, or find me on LinkedIn to explore potential collaborations and exciting opportunities.
        </p>

        <br />
        </div>
      </div>
    </div>
  );
};

export default About;
