import React, { useState, useEffect } from "react";
import { DiJsBadge, DiReact, DiNodejs, DiGithubAlt, DiVisualstudio, DiNpm, DiBootstrap, DiCss3, DiHtml5 } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiMongodb, SiSketch, SiApple } from "react-icons/si";
import { FaGitAlt, FaWindows } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { motion } from 'framer-motion';

const Experience = () => {
  const techs = [
    { id: 1, child: <SiMongodb size={30} /> },
    { id: 2, child: <SiExpress size={30} /> },
    { id: 3, child: <DiReact size={30} /> },
    { id: 4, child: <DiNodejs size={30} /> },
    { id: 5, child: <SiTailwindcss size={30} /> },
    { id: 6, child: <DiNpm size={30} /> },
    { id: 7, child: <DiHtml5 size={30} /> },
    { id: 8, child: <DiCss3 size={30} /> },
    { id: 9, child: <DiJsBadge size={30} /> },
    { id: 10, child: <DiBootstrap size={30} /> },
    { id: 11, child: <SiSketch size={30} /> },
    { id: 12, child: <CgFigma size={30} /> },
    { id: 13, child: <DiGithubAlt size={30} /> },
    { id: 14, child: <FaGitAlt size={30} /> },
    { id: 15, child: <DiVisualstudio size={30} /> },
    { id: 16, child: <SiApple size={30} /> },
    { id: 17, child: <FaWindows size={30} /> },
  ];

  // Function to generate a random delay for each icon
  const generateRandomDelay = () => Math.random() * 2; // Random delay between 0 and 2 seconds

  // Variants for the container (staggerChildren removed since we handle individual delays)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0, // No stagger needed, we use individual random delays
      },
    },
  };

  // Variants for the individual icons with random delay
  const itemVariants = {
    hidden: { opacity: 0 },
    show: (delay) => ({
      opacity: 1,
      transition: { duration: 0.5, delay, ease: "easeOut" }, // Each icon gets a unique delay
    }),
  };

  useEffect(() => {
    const intervals = [];

    // For each tech icon, set a random interval to change its color
    techs.forEach(({ id }) => {
      const randomInterval = Math.random() * (5000 - 2000) + 2000; // Random interval between 2s and 5s
      const interval = setInterval(() => {
        const el = document.getElementById(`tech-icon-${id}`);
        if (el) {
          el.classList.add("text-white");
          setTimeout(() => {
            el.classList.remove("text-white");
          }, 300); // Duration for the white color effect (0.3s)
        }
      }, randomInterval);

      intervals.push(interval);
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [techs]);

  return (
    <div
      name="technologies"
      className="px-5 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full h-50vh"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white vh-100">
        <div>
          <p className="text-6xl text-white uppercase font-teko tracking-wider p-2 inline">
            Technologies
          </p>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }} // Animation will happen every time the section is in view
            className="py-6 text-gray-300"
          >
            These are some of the technologies I use in my work.
          </motion.p>
        </div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // Animation runs every time the section is in view
          className="grid grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {techs.map(({ id, child }) => (
            <motion.li
              key={id}
              id={`tech-icon-${id}`} // Add ID for individual control
              custom={generateRandomDelay()} // Assign a random delay to each icon
              variants={itemVariants}
              className="flex justify-center items-center w-20 hover:scale-105 duration-300 h-20 p-4 text-gray-300 hover:text-white"
            >
              {child}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Experience;
