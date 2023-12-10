import React from "react";
import beers from "../assets/portfolio/beerbrewer.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";
import royalmarines from "../assets/portfolio/royalmarines.jpg";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: royalmarines,
      role: "Designer and developer",
      description: "Mission movement forges the elite",
      explanation: "Created an online platform for those looking to create a future in the special forces.",
      title:"MISSION MOVEMENT",
      titleFontStyle: "font-teko",
      href:"https://mission-movement.netlify.app",
    },
    {
      id: 2,
      src: beers,
      role: "Designer and developer",
      description: "Showcasing full stack capabilities",
      explanation: "This was a project that I did for a software development company, the purpose was displaying the connection of front and back end.",
      title:"The Brewery",
      titleFontStyle: "font-berk",
      href:"https://github.com/JustDevInn/PxlWidgets-Beer-Assignment-Reactjs",
    },
    {
      id: 3,
      src: ibussanctuary,
      role: "Designer and developer",
      description: "Creating online presence for the animals",
      explanation: "I helped dian create an online platform for her work as an dog fosterer and saver.",
      title:"Rescue sanctuary",
      href: "https://dharmawangsa.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-20 pb-20">
        <div
        className="">
          <p className="pl-10 text-6xl uppercase font-teko tracking-wider inline">
            Work
          </p>
        </div>
        <div className="px-5 grid sm:grid-cols-1 gap-8 sm:px-0 mt-10">
          {portfolios.map(({ id, src, title, href,role, description, explanation, titleFontStyle }) => (
          <div key={id} className="relative">
            <motion.img
            variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.1}}
            src={src} alt="" className="w-full h-[550px] mx-auto object-cover"></motion.img>
            <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.1}}
            className="absolute flex items-left justify-center top-5 left-5 flex-col w-3/5 md:w-2/5">
              <motion.h2
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.1}}
              class={`text-4xl text-white ${titleFontStyle} mb-10`}>{title}</motion.h2>
              <motion.p
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className="text-gray-300 font-thin font-teko tracking-wider mb-5 md:mb-10">{role}</motion.p>
              <motion.h2
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className="lg:text-6xl md:text-5xl text-5xl text-white font-teko uppercase mb-5 md:mb-10">{description}</motion.h2>
              <p
              className="text-white mb-5 md:mb-10">
              {explanation}
              </p>
              <button
              className="sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white px-6 py-2 duration-300 hover:bg-white hover:text-black">
                <a
                href={href}
                target="_blank"
                rel="noreferrer">VIEW WEBSITE</a>
                </button>
            </motion.div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;





