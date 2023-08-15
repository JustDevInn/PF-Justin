import React from "react";
import angelaYu from "../assets/angelaYu.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import coursera from "../assets/coursera.png";
import ironhack from "../assets/ironHack.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import mongo from "../assets/mongodb.png";




const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 6,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  const courses = [
    {
      id: 1,
      src: angelaYu,
      title: "Angela Yu - Web development",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: ironhack,
      title: "IronHack - Full stack web developer",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: coursera,
      title: "Coursera - Meta Front-End developer",
      style: "shadow-blue-800",
    },
    {
      id: 4,
      src: coursera,
      title: "Coursera - Data Analytics",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: coursera,
      title: "Coursera - Learning how to learn",
      style: "shadow-blue-800",
    },
 
  ];

  return (
    <div
      name="experience"
      className="overflow-auto bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-rose-700 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-rose-700 p-2 inline">
            Education
          </p>
          <p className="py-6">These are the courses that I've graduated from</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {courses.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
