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
  ]


const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20" >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-20">
      <div className="flex flex-col justify-center h-full">
        <h5 className='text-4xl sm:text-5xl text-gray-300 font-teko py-4'>Justin is a developer and UI designer who loves to create unique platforms.</h5>    
        <p className=" w-1/3 md:w-1/5 border-b-2 border-orange-300 mt-10 mb-10"></p>
          <p className="text-gray-400 py-4 max-w-md">
          I combine digital design and programming to bring idea’s to life.
          Currently, I’m working as a <br></br>
          <span className="text-orange-300">freelancer</span>.
          </p>
          <div>
          <Link to="portfolio" smooth duration={500} className='group text-white border border-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer'>
                 Portfolio
                 <span className='group-hover:rotate-90 duration-300 hover:text-orange-300'> <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
          </Link> 
          </div>
        </div>
        <div className='w-4/5 mx-auto md:w-full'>
          <img
            src={HeroImage}
            alt="my profile"
            className='w-full md:mx-auto '
          />
        </div>
    </div>


{/* Social icons */}
      <div className="lg:hidden">
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



