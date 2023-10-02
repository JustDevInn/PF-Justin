import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-rose-700">
            About
          </p>
        </div>
<div className="overflow-auto">
        <p className="text-xl font-bold inline border-b-4 border-rose-900">About me</p>
        <p className="text-xl mt-5">
          Hey there, I'm Justin Peeters, a passionate software developer with a focus on the MERN stack. I've immersed myself in the world of programming, primarily working with JavaScript, HTML, and CSS while harnessing the power of the React framework. What drives me in this field are the authenticity, creativity, and problem-solving aspects of programming.
        </p>

        <br />

        <p className="text-xl font-bold inline border-b-4 border-rose-900">Experience and Projects</p>
        <p className="text-xl mt-5">
        During my time at IronHack in Amsterdam, I had the opportunity to dive into a variety of projects that showcase my skills and expertise. I've successfully recreated the user interface of a Spotify website, designed and developed a captivating Simon Says game, and collaborated on a dynamic full-stack webshop featuring sporting goods. These projects have all been built using the MERN stack, reflecting my proficiency and commitment to this technology.
        </p>

        <br />

        <p className="text-xl font-bold inline border-b-4 border-rose-900">Learning Journey</p>
        <p className="text-xl mt-5">
        With two years of programming under my belt, I've crafted my expertise through a combination of dedicated self-learning and structured education. I started my journey on Udemy, learning from Angela Yu's comprehensive courses. Seeking more immersive experiences, I joined IronHack's intensive bootcamp in Amsterdam. Continuously expanding my knowledge, I've furthered my skills through Coursera's Meta Front-End Developer and Data Analytics courses.
        </p>

        <br />
        <p className="text-xl font-bold inline border-b-4 border-rose-900">Skill Set</p>
        <p className="text-xl mt-5">
        My programming arsenal includes JavaScript, HTML, and CSS, complemented by a profound mastery of the React framework and Tailwind CSS for seamless and visually stunning web development.
        </p>

        <br />
        <p className="text-xl font-bold inline border-b-4 border-rose-900">Problem-Solving Approach</p>
        <p className="text-xl mt-5">
        When faced with development challenges, I adopt a systematic approach that involves dissecting the bigger picture, methodically breaking down the problem, and troubleshooting step by step. If syntax doubts arise, I refer to trusted resources like MDN. In the realm of creativity, platforms such as Stack Overflow serve as valuable sources of inspiration.
        </p>

        <br />
        <p className="text-xl font-bold inline border-b-4 border-rose-900">Continuous Growth and Collaboration</p>
        <p className="text-xl mt-5">
        Staying ahead in the rapidly evolving tech landscape is crucial to me. I actively seek out new developments, embracing innovations that enhance the quality of programming. I find joy in understanding the underlying principles that power the tools I use. Collaboration fuels my enthusiasm—whether collaborating on projects, sharing insights, or leveraging diverse learning styles to create a rich and dynamic learning environment.
        </p>

        <br />
        <p className="text-xl font-bold inline border-b-4 border-rose-900">Personal Connection</p>
        <p className="text-xl mt-5">
        Programming wasn't initially in my wheelhouse, but its inherent honesty intrigued me. Code is either "true" or not, and that sense of clarity is empowering. With every line of code, I exercise my creative freedom to build and shape. Beyond coding, I find solace in gaming OSRS, riding waves, staying active, and connecting with friends over coffee or sun-soaked beach outings.
        </p>

        <br />
        <p className="text-xl font-bold inline border-b-4 border-rose-900">Let's Connect</p>
        <p className="text-xl mt-5">
        If you're as enthusiastic about software development as I am, let's connect! Feel free to reach out via email or phone, or find me on LinkedIn to explore potential collaborations and exciting opportunities.
        </p>

        <br />
        </div>
      </div>
    </div>
  );
};

export default About;
