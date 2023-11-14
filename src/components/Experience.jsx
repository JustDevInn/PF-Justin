import React from "react";
import { DiJsBadge, DiReact, DiNodejs, DiGithubAlt, DiVisualstudio } from "react-icons/di";

const Experience = () => {
  const techs = [
  
    {
      id: 1,
      child: (
        <>
         <DiJsBadge size={30} />
        </>
      ),
    },
    {
      id: 2,
      child: (
        <>
         <DiReact size={30} />
        </>
      ),
    },
    {
      id: 3,
      child: (
        <>
         <DiNodejs size={30} />
        </>
      ),
    },
    {
      id: 4,
      child: (
        <>
         <DiGithubAlt size={30} />
        </>
      ),
    },
    {
      id: 5,
      child: (
        <>
         <DiVisualstudio size={30} />
        </>
      ),
    },
  ];


  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full h-50vh"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white vh-100">
        <div>
          <p className="text-6xl text-white uppercase font-teko tracking-wider  p-2 inline">
            Technologies
          </p>
          <p className="py-6 text-gray-300">These are the technologies I use in my work.</p>
        </div>

        <div className="">
      <ul className="flex flex-row w-full justify-evenly">
        {techs.map(({ id, child, }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-20 h-20 p-4 text-gray-300 hover:text-white"
            }>
              {child}
          </li>
        ))}
      </ul>
    </div>




      </div>
    </div>
  );
};

export default Experience;
