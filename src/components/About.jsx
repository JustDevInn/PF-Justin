import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 pb-20">
        <div className="pb-8 mb-10">
          <p className="text-6xl uppercase text-white font-teko tracking-wider inline border-b border-award-orange">
            About
          </p>
        </div>
<div className="overflow-auto">
        <p className="text-2xl font-bold inline ">About me</p>
        <p className="text-l mt-1 italic">
         What drives me in this field are the authenticity, creativity, and problem-solving aspects of programming.
        </p>

        <br />

        <p className="text-2xl font-bold inline ">Experience and Projects</p>
        <p className="text-l mt-1 italic">
        My latest project is the Dog foster website, I've created this website as a blueprint for a truely inspiring woman I met in Bali. She had been fostering dogs for years but had no way to display all her work and wasnot able to attract potential adopers via the internet. During my time at IronHack in Amsterdam, I had the opportunity to dive into a variety of projects that showcase my skills and expertise. I've successfully recreated the user interface of a Spotify website, designed and developed a captivating Simon Says game, and collaborated on a dynamic full-stack webshop featuring sporting goods.
        </p>

        <br />
        <p className="text-2xl font-bold inline ">Continuous Growth and Collaboration</p>
        <p className="text-l mt-1 italic">
        Staying ahead in the rapidly evolving tech landscape is crucial to me. I actively seek out new developments, embracing innovations that enhance the quality of programming. I find joy in understanding the underlying principles that power the tools I use. Collaboration fuels my enthusiasm—whether collaborating on projects, sharing insights, or leveraging diverse learning styles to create a rich and dynamic learning environment.
        </p>

        <br />
        <p className="text-2xl font-bold inline ">Personal Connection</p>
        <p className="text-l mt-1 italic">
        Programming wasn't initially in my wheelhouse, but its inherent honesty intrigued me. Code is either "true" or not, and that sense of clarity is empowering. With every line of code, I exercise my creative freedom to build and shape. Beyond coding, I find solace in gaming, riding waves, gymnastic strength training, and connecting with friends over coffee or sun-soaked beach outings.
        </p>

        <br />
        <p className="text-2xl font-bold inline ">Let's Connect</p>
        <p className="text-l mt-1 italic">
        If you're as enthusiastic about software development as I am, let's connect! Feel free to reach out via email or phone, or find me on LinkedIn to explore potential collaborations and exciting opportunities.
        </p>

        <br />
        </div>
      </div>
    </div>
  );
};

export default About;
