import React from "react";
import beers from "../assets/portfolio/craftsman.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: beers,
      role: "Designer and developer",
      description: "Showcasing full stack capabilities",
      explanation: "This was a project that I did for a software development company, the purpose was displaying the connection of front and back end.",
      title:"The Brewery",
      titleFontStyle: "font-berk",
      href:"https://github.com/JustDevInn/PxlWidgets-Beer-Assignment-Reactjs",
    },
    {
      id: 2,
      src: ibussanctuary,
      role: "Designer and developer",
      description: "Creating online precense for the animals",
      explanation: "I helped dian create an online platform for her work as an dog fosterer and saver.",
      title:"Rescue sanctuary",
      href: "https://dians-sanctuary.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 pb-20">
        <div className="pb-8">
          <p className="text-6xl uppercase font-teko tracking-wider inline border-b border-award-orange">
            Work
          </p>
        </div>
        <div className="grid sm:grid-cols-1 gap-8  sm:px-0 mt-20">
          {portfolios.map(({ id, src, title, href,role, description, explanation, titleFontStyle }) => (
          <div key={id} className="relative">
            <img src={src} alt="" className="w-full h-screen mx-auto object-cover"></img>
            <div className="absolute flex items-left justify-center top-10 left-5 flex-col w-3/5 md:w-2/5">
              <h2 class={`text-4xl text-white ${titleFontStyle} mb-20 md:mb-40`}>{title}</h2>
              <p className="text-gray-300 font-thin font-teko tracking-wider mb-5 md:mb-10">{role}</p>
              <h2 class="lg:text-6xl md:text-5xl text-5xl text-white font-teko uppercase mb-5 md:mb-10">{description}</h2>
              <p className="text-white mb-5 md:mb-10">{explanation}</p>
              <button className="sm:w-2/5 font-teko font-thin tracking-widest border-2 border-white px-6 py-2 duration-300 hover:bg-white hover:text-black">
                <a 
                href={href} 
                target="_blank"
                rel="noreferrer">VIEW WEBSITE</a>
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





