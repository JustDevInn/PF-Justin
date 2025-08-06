import React, { useState, useEffect } from "react";
import beers from "../assets/portfolio/beerbrewer.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";
import royalmarines from "../assets/portfolio/royalmarines.jpg";
import photographer1 from "../assets/portfolio/annelie.png";
import thevoidtattoo from "../assets/portfolio/bg.png";
import removehero from "../assets/portfolio/couple.JPG";
// mobile images
import removeheroMobile from "../assets/portfolio/couple.JPG";
import bookRetreats from "../assets/portfolio/bookretreatscut.png";
import mmvmtmobile1 from "../assets/portfolio/images-mobile/marsof.jpg";
import pawsofhopemobile from "../assets/portfolio/images-mobile/streetdog.jpg";
import photomobile1 from "../assets/portfolio/images-mobile/woman.png";
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
        src: royalmarines,
        srcMobile: mmvmtmobile1,
        role: "Designer and developer",
        description: "Mission movement: forging the elite",
        explanation: "A platform to guide and assist those looking to create a future in the special forces.",
        title: "MISSION MOVEMENT",
        titleFontStyle: "font-teko",
        href: "https://missionmovement.vercel.app/",
      },
    {
      id: 2,
      src: bookRetreats,
      srcMobile: bookRetreats,
      role: "Developer",
      description: "Find and book retreats",
      explanation: "Developed a booking feature that fetches data from an API and dynamically displays retreats based on user-selected filters, providing an intuitive search experience.",
      title: "Booking retreats",
      titleTextColor: "text-white",
      textColor: "text-white",
      titleFontStyle: "sans",
      href: "https://br-search-challenge-pq3n.vercel.app/search",
    },
    {
      id: 3,
      src: removehero,
      srcMobile: removeheroMobile,
      role: "Designed and developer",
      description: (
        <>
          Building confidence <br />through coaching.
        </>
      ),
      explanation: "A custom-built website designed and developed using React and Tailwind CSS",
      title: "RE-MOVE Coaching",
      titleFontStyle: "font-teko",
      href: "https://re-move-v2.vercel.app/",
    },
    {
      id: 4,
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
      id: 5,
      src: ibussanctuary,
      srcMobile: pawsofhopemobile,
      role: "Designer and developer",
      description: "Online presence for strays",
      explanation: "A potential online platform to help animal rescues reach worldwide.",
      title: "Paws of Hope",
      href: "https://github.com/JustDevInn/dharmawangsa",
    },
    {
      id: 6,
      src: photographer1,
      srcMobile: photomobile1,
      role: "Developer",
      description: "Creative portfolio",
      explanation: "A minimalistic yet visually striking portfolio that showcases the artistry of tattoo design. With clean lines and modern aesthetics, it delivers a bold digital presence while maintaining a refined, professional look.",
      title: "Alina Lee",
      titleTextColor: "text-white",
      textColor: "text-white",
      titleFontStyle: "font-playfair",
      href: "https://photographer-pf.vercel.app/",
    },
    {
      id: 7,
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
    <motion.div 
      variants={fadeIn("up")} 
      initial="hidden" 
      whileInView={"show"} 
      viewport={{ once: false, amount: 0.1 }} 
      className="relative w-full h-full"
    >
      {/* Dark Overlay (Now part of Framer Motion) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Image */}
      <motion.img
        src={srcMobile}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="absolute top-5 left-5 text-white z-10">
        <h2 className={`text-3xl ${titleFontStyle}`}>{title}</h2>
        <p className="text-lg">{role}</p>
      </div>
    </motion.div>

    <div className="absolute bottom-5 left-5">
      <a href={href} target="_blank" rel="noreferrer">
        <button className="font-teko font-thin tracking-widest border-2 border-white hover:bg-white hover:text-black px-6 py-2 duration-300 bg-transparent text-white">
          VIEW WEBSITE
        </button>
      </a>
    </div>
  </>
) : (
  <>
    <motion.div 
      variants={fadeIn("up")} 
      initial="hidden" 
      whileInView={"show"} 
      viewport={{ once: false, amount: 0.1 }} 
      className="relative w-full h-full"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Image */}
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Text Content */}
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
          <button className="sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white hover:bg-white hover:text-black px-6 py-2 duration-300 bg-transparent text-white">
            VIEW WEBSITE
          </button>
        </a>
      </motion.div>
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
