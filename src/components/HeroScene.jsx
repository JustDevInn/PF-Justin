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
  const stageOneRef = useRef(null);
  const stageTwoRef = useRef(null);
  const stageThreeRef = useRef(null);
  const stageFourRef = useRef(null);
  const profileRef = useRef(null);
  const profileFrameRef = useRef(null);
  const actionsRef = useRef(null);
  const gridRef = useRef(null);
  const scanlineRef = useRef(null);
  const accentOneRef = useRef(null);
  const accentTwoRef = useRef(null);
  const drawLineOneRef = useRef(null);
  const drawLineTwoRef = useRef(null);
  const progressRef = useRef(null);
  const progressTextRef = useRef(null);
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
          stageOneRef.current,
          stageTwoRef.current,
          stageThreeRef.current,
          stageFourRef.current,
          profileRef.current,
          profileFrameRef.current,
          actionsRef.current,
          gridRef.current,
          scanlineRef.current,
          accentOneRef.current,
          accentTwoRef.current,
          drawLineOneRef.current,
          drawLineTwoRef.current,
          progressTextRef.current,
          progressRef.current,
        ],
        { clearProps: "all" }
      );
      gsap.set(progressRef.current, { scaleX: 1, transformOrigin: "left center" });
      gsap.set([stageTwoRef.current, stageThreeRef.current, stageFourRef.current], {
        autoAlpha: 0,
      });
      gsap.set([stageOneRef.current, actionsRef.current], {
        autoAlpha: 1,
        pointerEvents: "auto",
      });
      if (progressTextRef.current) {
        progressTextRef.current.textContent = "04 / 04";
      }
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

      timeline
        .set([stageTwoRef.current, stageThreeRef.current, stageFourRef.current], {
          autoAlpha: 0,
          y: 34,
          pointerEvents: "none",
        })
        .set(stageOneRef.current, { autoAlpha: 1, y: 0, pointerEvents: "auto" })
        .set(actionsRef.current, { autoAlpha: 0, y: 18, pointerEvents: "none" })
        .set(profileRef.current, { autoAlpha: 0.58, scale: 0.92, x: 34, y: 18 })
        .set(profileFrameRef.current, { autoAlpha: 0.45, scale: 0.96, rotate: -1 })
        .set([drawLineOneRef.current, drawLineTwoRef.current], {
          scaleX: 0,
          transformOrigin: "left center",
        })
        .set(progressRef.current, { scaleX: 0, transformOrigin: "left center" })
        .to(progressRef.current, { scaleX: 1, duration: 1, ease: "none" }, 0)
        .to(gridRef.current, { scale: 1.08, opacity: 0.44, duration: 1 }, 0)
        .to(scanlineRef.current, { xPercent: 38, opacity: 0.55, duration: 1 }, 0)
        .to(accentOneRef.current, { rotate: 8, x: 22, y: -18, duration: 0.62 }, 0.02)
        .to(accentTwoRef.current, { rotate: -6, x: -24, y: 18, duration: 0.68 }, 0.06)
        .to(profileRef.current, { autoAlpha: 0.88, scale: 0.98, x: 8, y: 0, duration: 0.34 }, 0.08)
        .to(drawLineOneRef.current, { scaleX: 1, duration: 0.18 }, 0.12)
        .to(stageOneRef.current, { autoAlpha: 0, y: -28, duration: 0.18, pointerEvents: "none" }, 0.22)
        .to(stageTwoRef.current, { autoAlpha: 1, y: 0, duration: 0.22, pointerEvents: "auto" }, 0.26)
        .to(profileFrameRef.current, { autoAlpha: 0.75, scale: 1, rotate: 0.5, duration: 0.32 }, 0.28)
        .to(stageTwoRef.current, { autoAlpha: 0, y: -24, duration: 0.18, pointerEvents: "none" }, 0.47)
        .to(stageThreeRef.current, { autoAlpha: 1, y: 0, duration: 0.22, pointerEvents: "auto" }, 0.52)
        .to(drawLineTwoRef.current, { scaleX: 1, duration: 0.22 }, 0.52)
        .to(profileRef.current, { autoAlpha: 1, scale: 1.03, x: -8, duration: 0.34 }, 0.58)
        .to(stageThreeRef.current, { autoAlpha: 0, y: -24, duration: 0.18, pointerEvents: "none" }, 0.72)
        .to(stageFourRef.current, { autoAlpha: 1, y: 0, duration: 0.24, pointerEvents: "auto" }, 0.76)
        .to(actionsRef.current, { autoAlpha: 1, y: 0, duration: 0.22, pointerEvents: "auto" }, 0.84);

      timelineRef.current = timeline;
    }, rootRef);

    let animationFrame;

    const animateProgress = () => {
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * 0.12;

      currentProgressRef.current = Math.abs(target - next) < 0.001 ? target : next;
      timelineRef.current?.progress(currentProgressRef.current);

      if (progressTextRef.current) {
        const step = currentProgressRef.current < 0.25
          ? 1
          : currentProgressRef.current < 0.5
            ? 2
            : currentProgressRef.current < 0.78
              ? 3
              : 4;

        progressTextRef.current.textContent = `0${step} / 04`;
      }

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
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden bg-[#030405] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(214,75,39,0.18),transparent_32%),radial-gradient(circle_at_14%_72%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(135deg,#090b0d_0%,#030405_52%,#101114_100%)]"
      ></div>
      <div
        aria-hidden="true"
        ref={gridRef}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.052)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"
      ></div>
      <div
        aria-hidden="true"
        ref={scanlineRef}
        className="absolute left-[-20%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent opacity-20"
      ></div>
      <div
        aria-hidden="true"
        ref={accentOneRef}
        className="absolute left-[7%] top-[18%] hidden h-36 w-36 border border-orange-300/30 md:block"
      ></div>
      <div
        aria-hidden="true"
        ref={accentTwoRef}
        className="absolute bottom-[16%] right-[9%] h-52 w-52 border border-white/10"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent"
      ></div>

      <section className="relative z-10 mx-auto grid h-full max-w-screen-xl grid-rows-[1fr_auto] px-5 pb-12 pt-20 md:px-10 md:pb-14 md:pt-[5.5rem] lg:grid-cols-[1.04fr_0.96fr] lg:grid-rows-1 lg:items-center lg:gap-10 lg:pt-[4.5rem]">
        <div className="relative z-20 flex min-h-0 flex-col justify-center">
          <div className="relative h-[min(43dvh,330px)] max-w-3xl">
            <div
              ref={stageOneRef}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-orange-300"
                ></span>
                <p className="text-[10px] uppercase tracking-[0.42em] text-orange-300 md:text-xs">
                  Portfolio / Interface craft
                </p>
              </div>
              <h1 className="max-w-4xl font-teko text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.86] tracking-wide text-white">
                Ciao, I&apos;m Justin.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                I build sharp digital experiences with a focus on presence, clarity, and execution.
              </p>
            </div>

            <div
              ref={stageTwoRef}
              className="pointer-events-none absolute inset-0 flex flex-col justify-center"
            >
              <p className="mb-3 max-w-sm text-[10px] uppercase tracking-[0.28em] text-gray-500 md:text-xs">
                Design logic. Frontend systems. Practical execution.
              </p>
              <p className="font-teko text-[clamp(3rem,6vw,5.4rem)] uppercase leading-none tracking-wider text-white">
                Frontend developer
              </p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                React-focused builds with clean component structure, responsive layouts, and sharp visual execution.
              </p>
            </div>

            <div
              ref={stageThreeRef}
              className="pointer-events-none absolute inset-0 flex flex-col justify-center"
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-orange-300 md:text-xs">
                Motion / systems / interface feel
              </p>
              <p className="font-teko text-[clamp(3rem,6vw,5.4rem)] uppercase leading-none tracking-wider text-white">
                Interactive interfaces
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                I build sharp digital experiences for brands, founders, and teams that need more presence than a template.
              </p>
            </div>

            <div
              ref={stageFourRef}
              className="pointer-events-none absolute inset-0 flex flex-col justify-center"
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-orange-300 md:text-xs">
                Design + code + discipline
              </p>
              <p className="font-teko text-[clamp(3rem,6vw,5.4rem)] uppercase leading-none tracking-wider text-white">
                Real-world discipline
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
                Design taste, React implementation, and operational discipline shaped by coaching and real-world training environments.
              </p>
              <div className="mt-4 grid max-w-2xl grid-cols-1 gap-2 text-[10px] uppercase tracking-[0.24em] text-gray-400 sm:grid-cols-3">
                <span>React UI systems</span>
                <span>Motion direction</span>
                <span>Conversion-focused builds</span>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            ref={drawLineOneRef}
            className="mt-2 h-px w-52 bg-gradient-to-r from-orange-300 via-white/50 to-transparent"
          ></div>

          <div
            ref={actionsRef}
            className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <Link
              to="/projects"
              className="group inline-flex min-h-11 w-fit items-center border border-white bg-white px-5 py-2 font-teko text-lg uppercase tracking-widest text-black transition hover:border-orange-300 hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              View Projects
              <MdOutlineKeyboardArrowRight
                size={24}
                className="ml-1 transition group-hover:rotate-90"
              />
            </Link>
            <Link
              to="/personal"
              className="inline-flex min-h-11 w-fit items-center border border-white/30 bg-black/20 px-5 py-2 font-teko text-lg uppercase tracking-widest text-gray-200 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              Personal
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 w-fit items-center border border-white/30 bg-black/20 px-5 py-2 font-teko text-lg uppercase tracking-widest text-gray-200 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[-22%] z-10 w-[72vw] max-w-[360px] opacity-45 md:right-[-5%] md:w-[42vw] md:max-w-[460px] lg:relative lg:right-auto lg:w-full lg:max-w-none lg:opacity-100">
          <div
            ref={profileFrameRef}
            aria-hidden="true"
            className="absolute bottom-[8%] left-[8%] right-[8%] top-[16%] border border-white/10 bg-white/[0.025]"
          ></div>
          <div
            aria-hidden="true"
            ref={drawLineTwoRef}
            className="absolute left-[12%] top-[22%] z-20 h-px w-3/5 bg-gradient-to-r from-white/70 via-orange-300 to-transparent"
          ></div>
          <div
            aria-hidden="true"
            className="absolute bottom-[14%] right-[10%] z-20 hidden border border-white/10 bg-black/50 px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-gray-300 backdrop-blur-sm md:block"
          >
            <p className="text-orange-300">Status</p>
            <p>Available for selected builds</p>
          </div>
          <div
            ref={profileRef}
            className="relative z-10"
          >
            <img
              src={HeroImage}
              alt=""
              className="h-auto max-h-[min(68dvh,620px)] w-full select-none object-contain drop-shadow-[0_28px_80px_rgba(0,0,0,0.65)]"
              draggable="false"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-4 left-5 right-5 z-30 md:left-10 md:right-10"
        >
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-gray-500">
            <span ref={progressTextRef}>01 / 04</span>
            <span>Scroll input controls scene</span>
          </div>
          <div className="h-px bg-white/15">
            <div ref={progressRef} className="h-px w-full origin-left bg-orange-300"></div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-12 left-5 z-20 hidden max-w-xs border-l border-white/10 pl-4 text-[10px] uppercase tracking-[0.24em] text-gray-500 lg:block"
        >
          Wheel / swipe / keyboard to move through the intro
        </div>
      </section>
    </main>
  );
};

export default HeroScene;
