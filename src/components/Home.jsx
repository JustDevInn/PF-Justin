import React from "react";
import DynamicHeading from "./DynamicHeading";
import HeroImage from "../assets/jpnobg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import WorkTogetherButton from "./WorkTogetherButton"; 
import useGlowEffect from "../hooks/useGlowEffect";

  const links = [
    {
      id: 1,
      child: (
        <>
        <FaLinkedin size={30} className="transition duration-300 hover:text-white" />
        </>
      ),
      href: "https://www.linkedin.com/in/justin-peeters/",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub size={30} className="transition duration-300 hover:text-white"  />
        </>
      ),
      href: "https://github.com/JustDevinn",
    },
    {
      id: 3,
      child: (
        <>
         <HiOutlineMail size={30} className="transition duration-300 hover:text-white"  />
        </>
      ),
      href: "mailto:Peeters.justin@yahoo.com",
    },
    {
      id: 4,
      child: (
        <>
        <BsFillPersonLinesFill size={30} className="transition duration-300 hover:text-white"  />
        </>
      ),
      href: "/CVJustinPeeters.pdf",
      download: true,
    },
  ];

const Home = () => {
  const animationStage = useGlowEffect();

  return (
  <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col justify-center items-center pt-20 lg:pt-0" >
    <div className="flex flex-col items-center justify-center text-center">
      <DynamicHeading />
    </div>
    
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full lg:h-[80vh] px-4 md:flex-row ">
      <div
      className="px-10 flex flex-col justify-center order-2 lg:order-1">
        <h5
        className='text-xl lg:text-2xl text-white font-teko py-4'>
        I Build Websites That Stand Out.
        From sleek designs to seamless functionality, I create custom web experiences tailored to your vision. Whether you're a business looking for an online presence or an agency seeking a skilled developer, I'm here to bring ideas to life.
        </h5>
        <p className=" w-1/3 md:w-1/5 border-b-2 border-orange-300 mt-10 mb-10"></p>
          <p
        className="text-gray-400 py-4 max-w-md">
          ✨ Attention to detail.<br/>
          ⚡ Pixel-<span className="text-orange-300">perfect</span> execution.<br/>
          🚀 Fast, responsive, and modern websites.
          </p>
          <div className="flex md:flex-row flex-col justify-start md:items-center items-start md:gap-4 gap-1">
          <Link
          to="portfolio"
          smooth duration={500}
          className='group text-white border border-white hover:border-orange-300 w-fit px-6 py-3 my-2 flex items-center cursor-pointer'>
             View My Work
            <span className='group-hover:rotate-90 duration-300 hover:text-orange-300'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
            </span>
          </Link>
          <WorkTogetherButton />
          </div>
        </div>
        <div
        className='w-4/5 lg:w-full mx-auto md:w-full order-1 lg:order-2 pb-10'>
          <img
            src={HeroImage}
            alt="my profile"
            className='w-full md:mx-auto'
            width={400} // Adjust based on actual image size
            height={400} // Adjust based on actual image size
          />
        </div>
    </div>





{/* Social icons */}
      <div
      className="lg:hidden pt-20 ">
      <ul className="flex flex-row w-full justify-evenly">
        {links.map(({ id, child, href, download }) => (
          <li key={id} className={`p-4 text-gray-300 transition duration-300 hover:text-white 
            ${animationStage === 1 ? "animate-border-text" : ""}`}>
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
{/* End social icons */}
    </div>
  );
};

export default Home;



