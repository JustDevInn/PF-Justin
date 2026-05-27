import React from "react";

const Footer = () => {
  return (
    <footer
      className="box-border w-full max-w-full overflow-x-hidden bg-gradient-to-b from-gray-900 to-black px-6 py-16 text-white md:px-10 md:py-20"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col justify-center">
        <div className="w-full">
          <h2
            id="footer-heading"
            className="max-w-full break-words font-teko text-[2.75rem] uppercase tracking-normal [overflow-wrap:anywhere] sm:text-5xl sm:tracking-wider md:text-6xl"
          >
            Details
          </h2>
          <div className="grid gap-8 pt-12 text-white md:grid-cols-3 md:gap-10 md:pt-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Email
              </h3>
              <a
                href="mailto:Peeters.justin@yahoo.com"
                className="mt-2 block break-words text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                Peeters.justin@yahoo.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Phone
              </h3>
              <p className="mt-2 text-gray-300">+361 49 17 16 84</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Social
              </h3>
              <a
                href="http://www.instagram.com/justinpeeters"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                @justinpeeters
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex w-full flex-col gap-3 text-[10px] font-thin uppercase tracking-widest text-white sm:flex-row sm:justify-between">
          <p>Copyright 2023 all rights reserved.</p>
          <p>
            KVK:{" "}
            <span className="font-medium">
              Justin Peeters Development 89798690899
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
