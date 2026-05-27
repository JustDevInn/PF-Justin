import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ProjectCard = ({ project, index = 0, featured = false }) => {
  const {
    src,
    srcMobile,
    title,
    href,
    role,
    description,
    explanation,
    titleFontStyle = "font-teko",
  } = project;

  const shouldReduceMotion = useReducedMotion();
  const imageAlt = `${title} project preview`;
  const projectNumber = String(index + 1).padStart(2, "0");
  const isExternal = href?.startsWith("http");
  const isPlaceholder = !href || href === "/";
  const ctaLabel = isPlaceholder ? "View project" : "View website";
  const titleFontClass = titleFontStyle.startsWith("font-")
    ? titleFontStyle
    : `font-${titleFontStyle}`;

  const cardMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 42 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
      };

  const imageMotion = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.035 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <motion.article
      {...cardMotion}
      className={`group relative mx-auto w-full max-w-full min-w-0 overflow-hidden border border-white/10 bg-white/[0.035] shadow-[0_30px_120px_rgba(0,0,0,0.35)] ${
        featured ? "min-h-[78vh]" : "min-h-[62vh]"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-orange-300/[0.08] opacity-70"
      ></div>

      <div className="grid min-h-[inherit] w-full min-w-0 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-[330px] overflow-hidden lg:min-h-full">
          <picture>
            {srcMobile && (
              <source media="(max-width: 768px)" srcSet={srcMobile} />
            )}
            <motion.img
              {...imageMotion}
              src={src}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </picture>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5 lg:bg-gradient-to-r lg:from-black/20 lg:via-black/10 lg:to-transparent"
          ></div>
          {featured && (
            <div className="absolute left-5 top-5 border border-orange-300/50 bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-orange-300 backdrop-blur-sm">
              Featured Build
            </div>
          )}
        </div>

        <div className="relative z-10 flex w-full min-w-0 flex-col justify-between p-6 md:p-8 lg:p-10">
          <div>
            <div className="mb-8 flex flex-col gap-2 text-[10px] uppercase tracking-[0.28em] text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span>{projectNumber}</span>
              <span className="break-words">{role}</span>
            </div>

            <h2
              className={`${titleFontClass} max-w-full break-words text-[2.75rem] uppercase leading-none tracking-normal text-white [overflow-wrap:anywhere] sm:text-5xl sm:tracking-wide md:text-6xl ${
                featured ? "lg:text-7xl" : "lg:text-6xl"
              }`}
            >
              {title}
            </h2>

            <div className="mt-6 h-px w-24 bg-orange-300"></div>

            <div className="mt-8 max-w-xl">
              <p className="max-w-full break-words font-teko text-[1.75rem] uppercase leading-none tracking-normal text-white [overflow-wrap:anywhere] sm:text-3xl sm:tracking-wider md:text-4xl">
                {description}
              </p>
              <p className="mt-5 text-sm leading-7 text-gray-300 md:text-base">
                {explanation}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.26em] text-gray-500">
              Case-study preview
            </p>
            <a
              href={href || "#"}
              target={isExternal ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={`${ctaLabel} for ${title}`}
              className="inline-flex min-h-11 w-fit items-center border border-white px-5 py-2 font-teko text-lg uppercase tracking-widest text-white transition duration-300 hover:border-orange-300 hover:bg-orange-300 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
