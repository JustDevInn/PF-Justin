import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-[#c6c6c6] overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div className="px-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
