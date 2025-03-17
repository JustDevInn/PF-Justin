import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const WorkTogetherButton = () => {
  const [animationStage, setAnimationStage] = useState(0); // 0 = No animation, 1 = First, 2 = Second

  useEffect(() => {
    // First animation after 3 seconds
    const firstTimeout = setTimeout(() => {
      setAnimationStage(1);
    }, 1000);

    // Remove animation for a brief moment so it can be retriggered
    const resetTimeout = setTimeout(() => {
      setAnimationStage(0);
    }, 4500); // Ends before second starts

    // Second animation after another 3 seconds
    const secondTimeout = setTimeout(() => {
      setAnimationStage(2);
    }, 6000);

    // Cleanup timeouts
    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(resetTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <Link
      to="contact"
      smooth
      duration={500}
      className={`group text-white border border-white hover:border-orange-300 w-fit px-6 py-3 my-2 flex items-center cursor-pointer
        ${animationStage === 1 ? "animate-border-text" : ""}
        ${animationStage === 2 ? "animate-border-text" : ""}`}
    >
      Let's work together
      <span className="group-hover:rotate-90 duration-300 hover:text-orange-300 ml-1">
        <MdOutlineKeyboardArrowRight size={25} />
      </span>
    </Link>
  );
};

export default WorkTogetherButton;
