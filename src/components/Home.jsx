import React from "react";
import HeroImage from "../assets/JustinHD.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-20">
        <div className=" flex flex-col justify-center h-full">
        <h5 className=' text-4xl sm:text-5xl text-gray-300 font-teko py-4'>Justin is a developer and UI designer who loves to create unique platforms.</h5>
        <p className=" w-1/5 border-b-2 border-award-orange mt-10 mb-10"></p>
          <p className="text-gray-400 py-4 max-w-md">
          I combine digital design and programming to bring idea’s to life.
          Currently, I’m working as a <br></br>
          <span className="text-orange-300">freelancer</span>.
          </p>

          <div>
          <Link to="portfolio" smooth duration={500} className='group text-white border border-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-transparent to-Zinc-800 cursor-pointer'>
                 Portfolio
                 <span className='group-hover:rotate-90 duration-300 hover:text-[#ff5538]'> <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> </span>
                 </Link> 
          </div>
        </div>

        <div className='rounded-2xl mx-auto  md:w-full'>
          <img
            src={HeroImage}
            alt="my profile"
            className=' mx-auto '
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
