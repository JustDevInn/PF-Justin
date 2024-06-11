import React from "react";
import beers from "../assets/portfolio/beerbrewer.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";
import royalmarines from "../assets/portfolio/royalmarines.jpg";
import photographer1 from "../assets/portfolio/photo2.png";
import thevoidtattoo from "../assets/portfolio/thevoidtattoo2.png";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: royalmarines,
      role: "Designer and developer",
      description: "Mission movement forges the elite",
      explanation: "A platform to guide and assist those looking to create a future in the special forces.",
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
      description: "Creating online presence for the dogs in need",
      explanation: "A potential online platform to help animal rescues reach worldwide.",
      title:"Paws of Hope",
      href: "https://dharmawangsa.netlify.app/",
    },
    {
      id: 4,
      src: photographer1,
      role: "Developer",
      description: "Photographer & Filmmaker",
      explanation: "An ellegant, modern and playfull design for a portfolio website",
      title:"Alina Lee",
      titleTextColor: "text-black",
      textColor: "text-black",
      titleFontStyle: "font-playfair",
      href: "https://photographer-pf.vercel.app/",
    },
    {
      id: 5,
      src: thevoidtattoo,
      role: "Developer",
      description: "Artistic website",
      explanation: "A modern and rough design for a freelance tattoo artist",
      title:"The Void Tattoo",
      titleTextColor: "text-black",
      textColor: "text-white",
      titleFontStyle: "font-rozha",
      href: "http://tattoo-website-vuqi.vercel.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-[#c6c6c6]">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div
        className="py-20">
          <p className="pl-10 text-6xl uppercase font-teko tracking-wider inline">
            Portfolio
          </p>
        </div>
        <div className="px-5 grid sm:grid-cols-1 gap-8 sm:px-0">
          {portfolios.map(({ id, src, title, href,role , description, explanation, textColor,titleTextColor, titleFontStyle }) => (
          <div key={id} className="relative h-screen">
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
              variants={fadeIn('left')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.1}}
              className={`text-4xl ${titleTextColor} ${titleFontStyle} mb-10`}>{title}</motion.h2>
              <motion.p
              variants={fadeIn('right')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className={`text-white text-shadow-outline font-thin font-teko tracking-wider mb-5 md:mb-10`}>{role}</motion.p>
              <motion.h2
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
              className={`lg:text-6xl md:text-5xl text-5xl text-white ${textColor} font-teko uppercase mb-5 md:mb-10`}>{description}</motion.h2>
              <p
              className="text-white mb-5 md:mb-10 text-shadow-outline">
              {explanation}
              </p>
                <a
                href={href}
                target="_blank"
                rel="noreferrer">
                  <button
                  className="sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white bg-white text-black px-6 py-2 duration-300 hover:bg-transparent hover:text-white">
                    VIEW WEBSITE
                  </button></a>
            </motion.div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;





