import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/jpnobg.png";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const clampProgress = (value) => Math.min(1, Math.max(0, value));

const HeroScene = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const frontendRef = useRef(null);
  const interactiveRef = useRef(null);
  const disciplineRef = useRef(null);
  const profileRef = useRef(null);
  const actionsRef = useRef(null);
  const accentOneRef = useRef(null);
  const accentTwoRef = useRef(null);
  const progressRef = useRef(null);
  const timelineRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const touchStartYRef = useRef(null);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(
        [
          titleRef.current,
          introRef.current,
          frontendRef.current,
          interactiveRef.current,
          disciplineRef.current,
          profileRef.current,
          actionsRef.current,
          progressRef.current,
        ],
        { clearProps: "all" }
      );
      gsap.set(progressRef.current, { scaleX: 1, transformOrigin: "left center" });
      gsap.set([frontendRef.current, interactiveRef.current, disciplineRef.current], {
        autoAlpha: 0,
      });
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

      timeline
        .set([frontendRef.current, interactiveRef.current, disciplineRef.current], {
          autoAlpha: 0,
          y: 28,
        })
        .set(actionsRef.current, { autoAlpha: 0, y: 20 })
        .set(profileRef.current, { autoAlpha: 0.72, scale: 0.94, x: 28 })
        .set(progressRef.current, { scaleX: 0, transformOrigin: "left center" })
        .to(progressRef.current, { scaleX: 1, duration: 1, ease: "none" }, 0)
        .to(titleRef.current, { y: -18, duration: 0.35 }, 0.08)
        .to(introRef.current, { autoAlpha: 0.2, y: -20, duration: 0.25 }, 0.12)
        .to(frontendRef.current, { autoAlpha: 1, y: 0, duration: 0.3 }, 0.16)
        .to(profileRef.current, { autoAlpha: 1, scale: 1, x: 0, duration: 0.45 }, 0.12)
        .to(accentOneRef.current, { rotate: 10, x: 24, y: -12, duration: 0.7 }, 0)
        .to(frontendRef.current, { autoAlpha: 0.25, y: -18, duration: 0.22 }, 0.42)
        .to(interactiveRef.current, { autoAlpha: 1, y: 0, duration: 0.3 }, 0.46)
        .to(accentTwoRef.current, { rotate: -8, x: -18, y: 18, duration: 0.7 }, 0.18)
        .to(interactiveRef.current, { autoAlpha: 0.25, y: -18, duration: 0.22 }, 0.68)
        .to(disciplineRef.current, { autoAlpha: 1, y: 0, duration: 0.3 }, 0.72)
        .to(actionsRef.current, { autoAlpha: 1, y: 0, duration: 0.25 }, 0.82);

      timelineRef.current = timeline;
    }, rootRef);

    let animationFrame;

    const animateProgress = () => {
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * 0.12;

      currentProgressRef.current = Math.abs(target - next) < 0.001 ? target : next;
      timelineRef.current?.progress(currentProgressRef.current);

      animationFrame = requestAnimationFrame(animateProgress);
    };

    animationFrame = requestAnimationFrame(animateProgress);

    const updateProgress = (delta) => {
      targetProgressRef.current = clampProgress(targetProgressRef.current + delta);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      updateProgress(event.deltaY / 1800);
    };

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event) => {
      if (touchStartYRef.current === null) {
        return;
      }

      event.preventDefault();
      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - currentY;
      touchStartYRef.current = currentY;
      updateProgress(deltaY / 520);
    };

    const handleKeyDown = (event) => {
      const tagName = event.target?.tagName?.toLowerCase();

      if (["input", "textarea", "select"].includes(tagName)) {
        return;
      }

      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        updateProgress(0.16);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        updateProgress(-0.16);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationFrame);
      context.revert();
      timelineRef.current = null;
    };
  }, [prefersReducedMotion]);

  return (
    <main
      ref={rootRef}
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30"
      ></div>
      <div
        aria-hidden="true"
        ref={accentOneRef}
        className="absolute left-[8%] top-[22%] h-32 w-32 border border-orange-300/30"
      ></div>
      <div
        aria-hidden="true"
        ref={accentTwoRef}
        className="absolute bottom-[16%] right-[10%] h-44 w-44 border border-white/10"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950 via-black/70 to-transparent"
      ></div>

      <section className="relative z-10 mx-auto flex h-full max-w-screen-xl flex-col justify-center px-5 pb-8 pt-28 md:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-orange-300">
            Portfolio / Interface craft
          </p>
          <h1
            ref={titleRef}
            className="font-teko text-6xl uppercase leading-[0.9] tracking-wide text-white md:text-8xl lg:text-9xl"
          >
            Ciao, I&apos;m Justin.
          </h1>

          <div className="relative mt-7 h-32 md:h-36">
            <p
              ref={introRef}
              className="absolute inset-x-0 top-0 max-w-xl text-lg leading-8 text-gray-300 md:text-xl"
            >
              I build sharp digital experiences for brands, founders, and teams that need a site with more presence than a template.
            </p>
            <p
              ref={frontendRef}
              className="absolute inset-x-0 top-0 font-teko text-5xl uppercase tracking-wider text-white md:text-7xl"
            >
              Frontend developer
            </p>
            <p
              ref={interactiveRef}
              className="absolute inset-x-0 top-0 font-teko text-5xl uppercase tracking-wider text-white md:text-7xl"
            >
              Interactive interfaces
            </p>
            <p
              ref={disciplineRef}
              className="absolute inset-x-0 top-0 font-teko text-5xl uppercase tracking-wider text-white md:text-7xl"
            >
              Real-world discipline
            </p>
          </div>

          <div
            ref={actionsRef}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/projects"
              className="group inline-flex w-fit items-center border border-white px-6 py-3 font-teko text-xl uppercase tracking-widest text-white transition hover:border-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              View Projects
              <MdOutlineKeyboardArrowRight
                size={24}
                className="ml-1 transition group-hover:rotate-90"
              />
            </Link>
            <Link
              to="/personal"
              className="inline-flex w-fit items-center border border-white/30 px-6 py-3 font-teko text-xl uppercase tracking-widest text-gray-200 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              Personal
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center border border-white/30 px-6 py-3 font-teko text-xl uppercase tracking-widest text-gray-200 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          ref={profileRef}
          className="pointer-events-none absolute bottom-0 right-[-15%] w-[70vw] max-w-[420px] opacity-60 md:right-0 md:w-[46vw] lg:relative lg:right-auto lg:w-full lg:max-w-none lg:opacity-100"
          aria-hidden="true"
        >
          <img
            src={HeroImage}
            alt=""
            className="h-auto w-full select-none object-contain"
            draggable="false"
          />
        </div>
      </section>

      <div
        aria-hidden="true"
        className="absolute bottom-5 left-5 right-5 z-20 h-px bg-white/15 md:left-10 md:right-10"
      >
        <div ref={progressRef} className="h-px w-full origin-left bg-orange-300"></div>
      </div>
    </main>
  );
};

export default HeroScene;
