import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="transition duration-300 hover:text-white" />
        </>
      ),
      href: "https://www.linkedin.com/in/justin-peeters/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} className="transition duration-300 hover:text-white" />
        </>
      ),
      href: "https://github.com/JustDevinn",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} className="transition duration-300 hover:text-white" />
        </>
      ),
      href: "mailto:Peeters.justin@yahoo.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} className="transition duration-300 hover:text-white" />
        </>
      ),
      href: "/CVJustinPeeters.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-20">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[5px] hover:rounded-md duration-300 bg-gradient-to-r from-transparent to-Zinc-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[#c6c6c6] hover:text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
