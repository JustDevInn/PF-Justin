import React, { useState, useEffect } from "react";
import beers from "../assets/portfolio/beerbrewer.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";
import royalmarines from "../assets/portfolio/royalmarines.jpg";
import photographer1 from "../assets/portfolio/annelie.png";
import thevoidtattoo from "../assets/portfolio/bg.png";
import removehero from "../assets/portfolio/remove-hero.png";
// mobile images
import removeheroMobile from "../assets/portfolio/images-mobile/removemobile.png";
import mmvmtmobile1 from "../assets/portfolio/images-mobile/mmvmtmobile1.png";
import pawsofhopemobile from "../assets/portfolio/images-mobile/pawsofhopemobile.png";
import photomobile1 from "../assets/portfolio/images-mobile/photomobile1.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portfolios = [
    {
      id: 1,
      src: removehero,
      srcMobile: removeheroMobile,
      role: "Designed and developer",
      description: (
        <>
          Building confidence <br />through active coaching.
        </>
      ),
      explanation: "A custom-built website designed and developed using React and Tailwind CSS",
      title: "RE-MOVE Coaching",
      titleFontStyle: "font-teko",
      href: "https://re-move-v2.vercel.app/",
    },
    {
      id: 2,
      src: royalmarines,
      srcMobile: mmvmtmobile1,
      role: "Designer and developer",
      description: "Mission movement: forging the elite",
      explanation: "A platform to guide and assist those looking to create a future in the special forces.",
      title: "MISSION MOVEMENT",
      titleFontStyle: "font-teko",
      href: "https://mission-movement.netlify.app",
    },
    {
      id: 3,
      src: beers,
      srcMobile: beers,
      role: "Designer and developer",
      description: "Beer brewery app",
      explanation: "This was a project that I did for a software development company, the purpose was displaying the connection of front and back end.",
      title: "The Brewery",
      titleFontStyle: "font-berk",
      href: "https://github.com/JustDevInn/PxlWidgets-Beer-Assignment-Reactjs",
    },
    {
      id: 4,
      src: ibussanctuary,
      srcMobile: pawsofhopemobile,
      role: "Designer and developer",
      description: "An online presence for the souls in need",
      explanation: "A potential online platform to help animal rescues reach worldwide.",
      title: "Paws of Hope",
      href: "https://dharmawangsa.netlify.app/",
    },
    {
      id: 5,
      src: photographer1,
      srcMobile: photomobile1,
      role: "Developer",
      description: "Creative portfolio",
      explanation: "A minimalistic yet visually striking portfolio that showcases the artistry of tattoo design. With clean lines and modern aesthetics, it delivers a bold digital presence while maintaining a refined, professional look.",
      title: "Alina Lee",
      titleTextColor: "text-black",
      textColor: "text-black",
      titleFontStyle: "font-playfair",
      href: "https://photographer-pf.vercel.app/",
    },
    {
      id: 6,
      src: thevoidtattoo,
      srcMobile: thevoidtattoo,
      role: "Developer",
      description: "Bold and edgy tattoo artistry.",
      explanation: "A rugged and contemporary design that reflects the bold creativity and individuality of a freelance tattoo artist, creating a striking digital presence.",
      title: "The Void Tattoo",
      titleTextColor: "text-white",
      textColor: "text-white",
      titleFontStyle: "font-rozha",
      href: "http://tattoo-website-vuqi.vercel.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-[#c6c6c6] overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div className="px-5">
          {portfolios.map(({ 
            id, 
            src, 
            srcMobile, 
            title, 
            href, 
            role, 
            description, 
            explanation, 
            textColor = "text-white", 
            titleTextColor = "text-white", 
            titleFontStyle = "font-teko" 
          }) => (
            <div key={id} className="relative h-[70vh] w-full mb-20">
              {isMobile ? (
                <>
                  <motion.img
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    src={srcMobile}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-5 left-5">
                    <a href={href} target="_blank" rel="noreferrer">
                      <button className="font-teko font-thin tracking-widest border-2 border-white bg-white text-black px-6 py-2 duration-300 hover:bg-transparent hover:text-white">
                        VIEW WEBSITE
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <motion.img
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    className="absolute flex items-left justify-center top-5 left-5 flex-col w-3/5 md:w-2/5"
                  >
                    <motion.h2
                      variants={fadeIn("left")}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.1 }}
                      className={`text-4xl ${titleTextColor} ${titleFontStyle} mb-10`}
                    >
                      {title}
                    </motion.h2>
                    <motion.p
                      variants={fadeIn("right")}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      className={`text-white text-shadow-outline font-thin font-teko tracking-wider mb-5 md:mb-10`}
                    >
                      {role}
                    </motion.p>
                    <motion.h2
                      variants={fadeIn("up")}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      className={`lg:text-6xl md:text-5xl text-5xl ${textColor} font-teko uppercase mb-5 md:mb-10`}
                    >
                      {description}
                    </motion.h2>
                    <p className="text-white mb-5 md:mb-10 text-shadow-outline">
                      {explanation}
                    </p>
                    <a href={href} target="_blank" rel="noreferrer">
                      <button className="sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white bg-white text-black px-6 py-2 duration-300 hover:bg-transparent hover:text-white">
                        VIEW WEBSITE
                      </button>
                    </a>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
