import React from "react";
import HeroImage from "../assets/JustinHD.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

  const links = [
    {
      id: 1,
      child: (
        <>
        <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/justin-peeters/",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/JustDevinn",
    },
    {
      id: 3,
      child: (
        <>
         <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:Peeters.justin@yahoo.com",
    },
    {
      id: 4,
      child: (
        <>
        <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CVJustinPeeters.pdf",
      download: true,
    },
  ];

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-40 lg:py-0" >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full lg:h-screen px-4 md:flex-row ">
      <div
      className="px-10 flex flex-col justify-center">
        <h5
        className='text-xl lg:text-4xl text-white font-teko py-4'>
        Crafting websites that stand out with style and precision, bringing ideas to life through unique, memorable digital experiences.
        </h5>
        <p className=" w-1/3 md:w-1/5 border-b-2 border-orange-300 mt-10 mb-10"></p>
          <p
        className="text-gray-400 py-4 max-w-md">
          Every project is designed with attention to detail, ensuring a <span className="text-orange-300">personalized</span> touch that resonates with the brand<br></br>
          .
          </p>
          <div>
          <Link
          to="portfolio"
          smooth duration={500}
          className='group text-white border border-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer'>
            Portfolio
            <span className='group-hover:rotate-90 duration-300 hover:text-orange-300'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
            </span>
          </Link>
          </div>
        </div>
        <div
        className='w-4/5 lg:w-full mx-auto md:w-full'>
          <img
            src={HeroImage}
            alt="my profile"
            loading="lazy"
            className='w-full md:mx-auto '
          />
        </div>
    </div>


{/* Social icons */}
      <div
      className="lg:hidden pt-20 ">
      <ul className="flex flex-row w-full justify-evenly">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "p-4"
            }
          >
            <a
              href={href}
              className="text-gray-300 hover:text-white"
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



