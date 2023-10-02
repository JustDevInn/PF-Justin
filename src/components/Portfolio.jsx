import React from "react";
import revera from "../assets/portfolio/reveraclone.png";
import simonsays from "../assets/portfolio/simonsays.png";
import beers from "../assets/portfolio/beers.jpeg";
import recipe from "../assets/portfolio/recipe.png";
import ibussanctuary from "../assets/portfolio/ibussanctuary.png";
import contacts from "../assets/portfolio/contacts.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: beers,
      title:"Full-stack web App",
      href:"https://github.com/JustDevInn/PxlWidgets-Beer-Assignment-Reactjs",
    },
    {
      id: 2,
      src: simonsays,
      title:"Simon says",
      href: "https://github.com/JustDevInn/Simon-game-project-v4",
    },
    {
      id: 3,
      src: revera,
      title:"Bootstrap website clone",
      href:"https://github.com/JustDevInn/lab-bootstrap-cloning-revera",
    },
    {
      id: 4,
      src: recipe,
      title:"CRUD - Recipes App",
      href:"https://github.com/JustDevInn/lab-recipes-crud",
    },
    {
      id: 5,
      src: ibussanctuary,
      title:"Dog foster website",
      href:"https://github.com/JustDevInn/Dians-Sanctuary",
    },
    {
      id: 6,
      src: contacts,
      title:"CRUD - Contact App",
      href:"https://github.com/JustDevInn/lab-react-ironcontacts",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-rose-700">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here. Click on 'Code' to go to my github page to review the code</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
            <img src={src} alt="" className="w-20 h-20 mx-auto rounded-md "></img>
              <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 m-4 ">{title}</p>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a 
                href={href} 
                target="_blank"
                rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
