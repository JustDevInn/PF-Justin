import React from "react";
import { DiJsBadge, DiReact, DiNodejs, DiGithubAlt, DiVisualstudio, DiNpm, DiBootstrap, DiCss3, DiHtml5}
from "react-icons/di";
import { SiExpress, SiTailwindcss, SiMongodb, SiSketch, SiApple } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Experience = () => {
  const techs = [
  
    {
      id: 1,
      child: (
        <>
         <SiMongodb size={30} />
        </>
      ),
    },
    {
      id: 2,
      child: (
        <>
         <SiExpress size={30} />
        </>
      ),
    },
    {
      id: 3,
      child: (
        <>
         <DiReact size={30} />
        </>
      ),
    },
    {
      id: 4,
      child: (
        <>
         <DiNodejs size={30} />
        </>
      ),
    },
    {
      id: 5,
      child: (
        <>
         <SiTailwindcss size={30} />
        </>
      ),
    },
    {
      id: 6,
      child: (
        <>
         <DiNpm size={30} />
        </>
      ),
    },
    {
      id: 7,
      child: (
        <>
         <DiHtml5 size={30} />
        </>
      ),
    },
    {
      id: 8,
      child: (
        <>
         <DiCss3 size={30} />
        </>
      ),
    },
    {
      id: 9,
      child: (
        <>
         <DiJsBadge size={30} />
        </>
      ),
    },
    {
      id: 10,
      child: (
        <>
         <DiBootstrap size={30} />
        </>
      ),
    },
    {
      id: 11,
      child: (
        <>
         <SiSketch size={30} />
        </>
      ),
    },
    {
      id: 12,
      child: (
        <>
         <CgFigma size={30} />
        </>
      ),
    },
    {
      id: 13,
      child: (
        <>
         <DiGithubAlt size={30} />
        </>
      ),
    },
    {
      id: 14,
      child: (
        <>
         <FaGitAlt size={30} />
        </>
      ),
    },
    {
      id: 14,
      child: (
        <>
         <DiVisualstudio size={30} />
        </>
      ),
    },
    {
      id: 14,
      child: (
        <>
         <SiApple size={30} />
        </>
      ),
    },
  ];

  return (
    <div
      name="experience"
      className="px-5 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full h-50vh"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white vh-100">
        <div>
          <p className="text-6xl text-white uppercase font-teko tracking-wider  p-2 inline">
            Technologies
          </p>
          <motion.p
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
          className="py-6 text-gray-300">
          These are some of the technologies I use in my work.
          </motion.p>
        </div>

    <div className="">
      <ul className="grid grid-cols-6 gap-4">
        {techs.map(({ id, child, }) => (
          <motion.li
              variants={fadeIn('up')}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
            key={id}
            className={
              "flex justify-center items-center w-20 h-20 p-4 text-gray-300 hover:text-white"
            }>
              {child}
          </motion.li>
        ))}
      </ul>
    </div>




      </div>
    </div>
  );
};

export default Experience;
