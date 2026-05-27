import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const storyBlocks = [
  {
    number: "01",
    title: "Military background",
    text: "Former Royal Netherlands Marine. That shaped how I think about pressure, teamwork, preparation, and disciplined execution.",
  },
  {
    number: "02",
    title: "Coaching background",
    text: "Years around coaching, movement, and gym environments taught me to help people improve through structure, clear feedback, and consistency.",
  },
  {
    number: "03",
    title: "Development",
    text: "Frontend development gives me the craft to turn ideas into responsive, functional interfaces with React, Tailwind, and interactive UI patterns.",
  },
  {
    number: "04",
    title: "Current focus",
    text: "I create digital experiences that combine visual identity, usability, performance, and practical execution.",
  },
];

const principles = [
  "Detail matters",
  "Function before decoration",
  "Clear structure beats noise",
  "Build for real users",
  "Keep improving",
];

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.24 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <main
      name="about"
      id="about"
      className="relative min-h-screen w-full overflow-x-hidden bg-[#030405] px-5 pb-24 pt-28 text-white md:px-10 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(214,75,39,0.14),transparent_30%),linear-gradient(135deg,#080a0c_0%,#030405_54%,#101114_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.042)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.042)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
      ></div>

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <motion.section
          {...reveal}
          className="max-w-5xl"
          aria-labelledby="personal-heading"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-orange-300"
            ></span>
            <p className="text-xs uppercase tracking-[0.42em] text-orange-300">
              Personal
            </p>
          </div>
          <h1
            id="personal-heading"
            className="font-teko text-[clamp(3.5rem,8vw,7.25rem)] uppercase leading-[0.9] tracking-wide"
          >
            Design, code, and discipline shaped by real-world experience.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-xl">
            I am Justin Peeters, a frontend developer and designer who builds sharp digital experiences. My background combines military service, coaching, and practical project work, so I approach websites with structure, clarity, and execution.
          </p>
        </motion.section>

        <section
          className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2"
          aria-label="Personal story timeline"
        >
          {storyBlocks.map((block, index) => (
            <motion.article
              key={block.number}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 34 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.22 },
                    transition: {
                      duration: 0.65,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  })}
              className="group border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-orange-300/50 hover:bg-white/[0.055] md:p-8"
            >
              <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-gray-500">
                <span>{block.number}</span>
                <span>Story</span>
              </div>
              <h2 className="font-teko text-4xl uppercase tracking-wide text-white md:text-5xl">
                {block.title}
              </h2>
              <div className="mt-5 h-px w-20 bg-orange-300"></div>
              <p className="mt-6 text-sm leading-7 text-gray-300 md:text-base">
                {block.text}
              </p>
            </motion.article>
          ))}
        </section>

        <motion.section
          {...reveal}
          className="mt-16 border border-white/10 bg-black/20 p-6 md:mt-24 md:p-8"
          aria-labelledby="principles-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-orange-300">
                Principles
              </p>
              <h2
                id="principles-heading"
                className="mt-4 font-teko text-5xl uppercase leading-none tracking-wide text-white md:text-6xl"
              >
                How I approach the work.
              </h2>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="border border-white/10 px-4 py-4 text-sm uppercase tracking-[0.2em] text-gray-300"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mt-16 md:mt-24"
          aria-label="Personal page call to action"
        >
          <div className="border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <p className="font-teko text-4xl uppercase leading-none tracking-wide text-white md:text-5xl">
              Want to see how this translates into projects?
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex min-h-11 w-fit items-center border border-white bg-white px-5 py-2 font-teko text-lg uppercase tracking-widest text-black transition hover:border-orange-300 hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 w-fit items-center border border-white/30 bg-black/20 px-5 py-2 font-teko text-lg uppercase tracking-widest text-gray-200 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
