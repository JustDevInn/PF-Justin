import React from "react";
import angelaYu from "../assets/udemy.png"
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
      style: "silver",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "silver",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "silver",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
      style: "silver",
    },
  ];

  const courses = [
    {
      id: 1,
      src: angelaYu,
      title: "Full-stack Web developer",
      style: "silver",
    },
    {
      id: 2,
      src: ironhack,
      title: "Full-stack Web developer",
      style: "silver",
    },
    {
      id: 3,
      src: coursera,
      title: "Meta Front-End developer",
      style: "silver",
    },
    {
      id: 4,
      src: coursera,
      title: "Data Analytics",
      style: "silver",
    },
 
  ];
  // shadow-sm shadow-blue-600 hover:shadow hover:shadow-blue-600
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white vh-100">
        <div>
          <p className="text-6xl text-white uppercase font-teko tracking-wider  p-2 inline">
            Technologies
          </p>
          <p className="py-6 text-gray-300">These are the technologies I use in my work.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 pb-1 border-b text-gray-400">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white ">
        <div>
          <p className="text-6xl text-white uppercase font-teko tracking-wider  p-2 inline">
            Education
          </p>
          <p className="py-6 text-gray-300">These are the courses that I've graduated from</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-10 sm:px-0">
          {courses.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2"
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4  text-gray-400">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
