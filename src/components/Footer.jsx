import React from 'react'

const Footer = () => {
  return (
    <div
    name="footer"
    className="px-5 w-full md:pt-10 h-screen bg-gradient-to-b from-gray-900 to-black text-white
    flex items-center justify-center md:block"
    >
<footer className="h-[350px] md:h-[450px] flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
  {/* details */}
  <div className="w-full flex justify-between flex-col mt-10">
      <h1 className="text-6xl uppercase font-teko tracking-wider inline ">
      Details
      </h1>
    <div className="pl-20 pt-20 flex flex-col justify-center md:justify-between md:flex-row  text-white">
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Email</h5>
        <a
        href="mailto:Peeters.justin@yahoo.com"
        className="text-gray-300">Peeters.justin@yahoo.com</a>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Phone</h5>
        <p className="text-gray-300">+361 49 17 16 84</p>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Social</h5>
        <a
        href="http://www.instagram.com/justinpeeters"
        target="blank"
        className="text-gray-300"
        >@justinpeeters</a>
      </div>
    </div>
  </div>
    {/* copyright + kvk */}
    <div className="mt-20 w-full flex flex-row justify-between text-white font-thin text-[8px] lg:text-[10px] tracking-widest">
      <p className="">Copyright 2023 all rights reserved.</p>
      <p>KVK: <span className="font-medium">Justin Peeters Development 89798690899</span></p>
    </div>
      </footer>
    </div>
  )
}

export default Footer