import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCircle, FaRegCircle } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Active section in view
  const [hoveredLink, setHoveredLink] = useState(null); // Hovered section
  const [visibleLink, setVisibleLink] = useState(null); // Track which text is visible

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "portfolio" },
    { id: 3, link: "technologies" },
    { id: 4, link: "about" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    // Register scroll events and update the scroll spy
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Handle showing and hiding the visibleLink based on hover and active section
  useEffect(() => {
    let timeoutId;

    // Show the hovered or active link text immediately
    if (hoveredLink || activeLink) {
      setVisibleLink(hoveredLink || activeLink);

      // Set a timeout to hide the text after 2 seconds only if no hover or active section
      timeoutId = setTimeout(() => {
        setVisibleLink(null); // Hide the text after 2 seconds
      }, 2000); // 2-second delay
    }

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [hoveredLink, activeLink]);

  return (
    <div className="flex z-50 justify-end sm:w-full items-center w-full text-gray-300 bg-transparent fixed text-md">
      {/* Desktop navbar */}
      <div className="hidden lg:flex flex-col top-[35%] right-0 fixed">
        <ul className="hidden lg:flex flex-col gap-y-5">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="relative px-4 cursor-pointer tracking-wide capitalize font-medium"
              onMouseEnter={() => {
                setHoveredLink(link); // Hover over link
                clearTimeout();
              }}
              onMouseLeave={() => {
                setHoveredLink(null); // Stop hover
              }}
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                isDynamic={true}
                onSetActive={() => {
                  setActiveLink(link); // When the section becomes active
                  clearTimeout();
                  setTimeout(() => {
                    setVisibleLink(null); // Hide after 2 seconds
                  }, 2000);
                }}
                className="flex justify-center items-center"
              >
                {activeLink === link ? <FaRegCircle /> : <FaCircle />}
              </Link>
              
              {/* Section name appears/disappears */}
              <div
  className={`absolute top-0 right-11 transition-opacity duration-1000 ease-in-out ${
    visibleLink === link ? 'opacity-100' : 'opacity-0'
  }`}
>
  <Link
    to={link}
    smooth
    duration={500}
    className="ml-2 whitespace-nowrap hover:underline text-white transition-opacity duration-1000 ease-in-out"
  >
    {link}
  </Link>
</div>


            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navbar */}
      <div
        onClick={() => setNav(!nav)}
        className="flex justify-between items-center h-20 cursor-pointer px-4 z-10 text-gray-300 lg:hidden w-screen"
      >
        <div>
          <h1 className="text-3xl font-teko">JUSTIN PEETERS</h1>
        </div>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 uppercase tracking-wide duration-300 hover:text-orange-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                isDynamic={true}
                onSetActive={() => {
                  setActiveLink(link); // When the section becomes active
                  setVisibleLink(link);
                  setTimeout(() => {
                    setVisibleLink(null); // Hide after 2 seconds
                  }, 2000);
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
