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
    <div className="fixed left-0 top-[35%] z-20 hidden flex-col xl:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex h-14 w-40 items-center justify-between px-4 ml-[-100px] duration-300 hover:ml-[5px] hover:rounded-md bg-gradient-to-r from-transparent to-zinc-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex w-full items-center justify-between text-[#c6c6c6] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
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
