import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const services = [
  {
    number: "01",
    title: "Website Design & Build",
    description:
      "For personal brands, small businesses, coaches, consultants, and portfolio sites that need to look sharp and work clearly.",
    points: [
      "Clear page structure",
      "Strong visual identity",
      "Responsive implementation",
      "Practical content flow",
    ],
  },
  {
    number: "02",
    title: "React Frontend Development",
    description:
      "Turning ideas and designs into working frontend products with reusable components and responsive user flows.",
    points: [
      "React interfaces",
      "Tailwind layouts",
      "Reusable components",
      "Clean user journeys",
    ],
  },
  {
    number: "03",
    title: "Interactive Portfolio Experiences",
    description:
      "Motion-led pages, animated hero sections, and project showcases that feel memorable without becoming confusing.",
    points: [
      "Scroll-driven moments",
      "Animated hero sections",
      "Project showcases",
      "Premium landing pages",
    ],
  },
  {
    number: "04",
    title: "Frontend Polish & Optimization",
    description:
      "Improving existing websites with better layout, mobile behavior, UI detail, performance basics, and accessibility passes.",
    points: [
      "Mobile fixes",
      "UI polish",
      "Performance basics",
      "Accessibility improvements",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Clarify",
    text: "Define the goal, audience, structure, and required pages or features before anything gets overbuilt.",
  },
  {
    number: "02",
    title: "Build",
    text: "Create responsive layouts, components, interactions, and content structure with a focus on usability.",
  },
  {
    number: "03",
    title: "Refine",
    text: "Polish details, test responsiveness, improve flow, and prepare the site for launch or handoff.",
  },
];

const Services = () => {
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
      name="services"
      id="services"
      className="relative min-h-screen w-full overflow-x-hidden bg-[#030405] px-5 pb-24 pt-28 text-white md:px-10 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(214,75,39,0.14),transparent_30%),linear-gradient(135deg,#080a0c_0%,#030405_54%,#101114_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.042)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.042)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
      ></div>

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <motion.section
          {...reveal}
          className="max-w-5xl"
          aria-labelledby="services-heading"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-orange-300"
            ></span>
            <p className="text-xs uppercase tracking-[0.42em] text-orange-300">
              Services
            </p>
          </div>
          <h1
            id="services-heading"
            className="font-teko text-[clamp(3.5rem,8vw,7.25rem)] uppercase leading-[0.9] tracking-wide"
          >
            Websites and interfaces built with structure, motion, and purpose.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-xl">
            I help turn ideas into clear, responsive, visually strong digital experiences. The focus is not decoration for its own sake, but websites that feel intentional and work for real users.
          </p>
        </motion.section>

        <section
          className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2"
          aria-label="Services list"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 34 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: {
                      duration: 0.65,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  })}
              className="group border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-orange-300/50 hover:bg-white/[0.055] md:p-8"
            >
              <div className="mb-8 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-gray-500">
                <span>{service.number}</span>
                <span>Service</span>
              </div>
              <h2 className="font-teko text-4xl uppercase leading-none tracking-wide text-white md:text-5xl">
                {service.title}
              </h2>
              <div className="mt-5 h-px w-20 bg-orange-300"></div>
              <p className="mt-6 text-sm leading-7 text-gray-300 md:text-base">
                {service.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-gray-400"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <motion.section
          {...reveal}
          className="mt-16 border border-white/10 bg-black/20 p-6 md:mt-24 md:p-8"
          aria-labelledby="process-heading"
        >
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.36em] text-orange-300">
              Process
            </p>
            <h2
              id="process-heading"
              className="mt-4 font-teko text-5xl uppercase leading-none tracking-wide text-white md:text-6xl"
            >
              Simple enough to move fast. Structured enough to stay clear.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="border border-white/10 p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
                  {step.number}
                </p>
                <h3 className="mt-5 font-teko text-4xl uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mt-16 md:mt-24"
          aria-label="Services page call to action"
        >
          <div className="border border-white/10 bg-white/[0.035] p-6 md:p-8">
            <p className="font-teko text-4xl uppercase leading-none tracking-wide text-white md:text-5xl">
              Have a project that needs more than a static page?
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

export default Services;
