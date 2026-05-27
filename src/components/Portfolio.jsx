import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();

  const headingMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <main
      name="portfolio"
      id="portfolio"
      className="min-h-screen w-full overflow-x-hidden bg-[#030405] px-5 pb-24 pt-28 text-white md:px-10 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(214,75,39,0.16),transparent_30%),linear-gradient(135deg,#080a0c_0%,#030405_54%,#101114_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
      ></div>

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <motion.header
          {...headingMotion}
          className="mb-14 max-w-4xl md:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-orange-300"
            ></span>
            <p className="text-xs uppercase tracking-[0.42em] text-orange-300">
              Selected Work
            </p>
          </div>
          <h1 className="font-teko text-[clamp(3.5rem,8vw,7.25rem)] uppercase leading-[0.9] tracking-wide">
            Projects that combine design, code, and function.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            A focused selection of websites, interfaces, and product-style builds shaped around clarity, performance, and a distinct visual presence.
          </p>
        </motion.header>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
