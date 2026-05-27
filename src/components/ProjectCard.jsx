import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ProjectCard = ({ project, isMobile }) => {
  const {
    src,
    srcMobile,
    title,
    href,
    role,
    description,
    explanation,
    textColor = "text-white",
    titleTextColor = "text-white",
    titleFontStyle = "font-teko",
  } = project;

  const imageSrc = isMobile ? srcMobile : src;
  const imageAlt = `${title} project preview`;

  return (
    <div className="relative h-[70vh] w-full mb-20">
      {isMobile ? (
        <>
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 bg-black/20"></div>

            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />

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
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <motion.img
            src={imageSrc}
            alt={imageAlt}
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
              className="text-white text-shadow-outline font-thin font-teko tracking-wider mb-5 md:mb-10"
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
      )}
    </div>
  );
};

export default ProjectCard;
