import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCircle, FaRegCircle } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const NavBar = () => {
  // setting mobile nav
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "portfolio" },
    { id: 3, link: "experience" },
    { id: 4, link: "about" },
    { id: 5, link: "contact" },
  ];

  useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="flex z-50 justify-end sm:w-full items-center w-full text-[#c6c6c6] bg-transparent fixed font-teko text-xl">
      {/* Desktop navbar */}
      <div className="hidden lg:flex flex-col top-[35%] right-0 fixed">
        <ul className="hidden lg:flex flex-col gap-y-5">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase tracking-wide font-medium hover:scale-105 duration-20 hover:text-orange-300"
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy
                onSetActive={setActiveLink}
                className="flex justify-center items-center"
              >
                {activeLink === link ? <FaRegCircle /> : <FaCircle />}
              </Link>
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
              className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 uppercase tracking-wide duration-20 hover:text-orange-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                spy
                onSetActive={setActiveLink}
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
