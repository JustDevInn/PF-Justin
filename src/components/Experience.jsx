import React from "react";
import angelaYu from "../assets/angelaYu.png"
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import coursera from "../assets/coursera.png";
import ironhack from "../assets/ironHack.png";
import node from "../assets/node.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: node,
      title: "NodeJs",
      style: "shadow-sm shadow-green-300 hover:shadow hover:shadow-green-300",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-sm shadow-blue-600 hover:shadow hover:shadow-blue-600",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sm shadow-sky-400 hover:shadow hover:shadow-sky-400",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "shadow-sm shadow-gray-400 hover:shadow hover:shadow-gray-300",
    },
  ];

  const courses = [
    {
      id: 1,
      src: angelaYu,
      title: "Full stack Web development",
      style: "shadow-sm shadow-violet-300 hover:shadow hover:shadow-violet-300",
    },
    {
      id: 2,
      src: ironhack,
      title: "Full stack web developer",
      style: "shadow-sm shadow-blue-400 hover:shadow hover:shadow-blue-400",
    },
    {
      id: 3,
      src: coursera,
      title: "Meta Front-End developer",
      style: "shadow-sm shadow-blue-600 hover:shadow hover:shadow-blue-600",
    },
    {
      id: 4,
      src: coursera,
      title: "Data Analytics",
      style: "shadow-sm shadow-blue-600 hover:shadow hover:shadow-blue-600",
    },
 
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white vh-100">
        <div>
          <p className="text-4xl text-white uppercase font-teko tracking-wider border-b border-award-orange p-2 inline">
            Technologies
          </p>
          <p className="py-6 text-gray-300">These are the technologies I use in my work.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2  ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white ">
        <div>
          <p className="text-4xl text-white uppercase font-teko tracking-wider border-b border-award-orange p-2 inline">
            Education
          </p>
          <p className="py-6 text-gray-300">These are the courses that I've graduated from</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {courses.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2  ${style}`}
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
