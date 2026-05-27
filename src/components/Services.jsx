import React from "react";

const services = [
  "Website Design & Build",
  "React Frontend Development",
  "Interactive Portfolio Experiences",
];

const Services = () => {
  return (
    <div
      name="services"
      id="services"
      className="min-h-screen px-5 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-6xl uppercase font-teko tracking-wider inline">
            Services
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="border border-white/30 p-6 min-h-[160px] flex items-end bg-black/20"
            >
              <h3 className="font-teko text-3xl uppercase tracking-wider">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
