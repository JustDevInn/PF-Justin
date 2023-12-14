import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
  <section className="preloader h-screen w-screen bg-black
   fixed bottom-0 left-0 right-0 z-55
   flex justify-center items-center
   overflow-hidden">
    <div className="texts-container flex align-center justify-between overflow-hidden uppercase font-thin
    text-white tracking-wider font-teko
    h-[60px] w-[230px] text-[45px]
    ">
        <span>Justin </span>
        <span >Peeters</span>
    </div>
  </section>
  );
};

export default PreLoader;
