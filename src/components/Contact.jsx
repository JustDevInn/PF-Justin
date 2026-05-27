import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const contactLinks = [
  {
    label: "Website",
    value: "pf-justin.vercel.app",
    href: "https://pf-justin.vercel.app",
  },
  {
    label: "WhatsApp",
    value: "+31649171684",
    href: "https://wa.me/31649171684",
  },
  {
    label: "LinkedIn",
    value: "justin-peeters",
    href: "https://www.linkedin.com/in/justin-peeters/",
  },
];

const fieldClassName =
  "mt-2 w-full border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const Contact = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.24 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <main
      id="contact"
      className="relative box-border min-h-screen w-full max-w-full overflow-x-hidden bg-[#030405] px-6 pb-20 pt-28 text-white md:px-10 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(214,75,39,0.14),transparent_30%),linear-gradient(135deg,#080a0c_0%,#030405_54%,#101114_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.042)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.042)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-screen-xl min-w-0">
        <motion.section
          {...reveal}
          className="w-full max-w-5xl"
          aria-labelledby="contact-heading"
        >
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-orange-300"
            ></span>
            <p className="text-xs uppercase tracking-[0.42em] text-orange-300">
              Contact
            </p>
          </div>
          <h1
            id="contact-heading"
            className="max-w-full break-words font-teko text-[2.75rem] uppercase leading-[0.95] tracking-normal text-white [overflow-wrap:anywhere] sm:text-[clamp(3.5rem,8vw,7.25rem)] sm:leading-[0.9] sm:tracking-wide"
          >
            Have a project in mind?
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-xl">
            Tell me what you&apos;re building, what you need help with, or where your current site feels stuck. I&apos;ll keep the reply practical and clear.
          </p>
        </motion.section>

        <div className="mx-auto mt-14 grid w-full min-w-0 gap-6 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside
            {...reveal}
            className="min-w-0 border border-white/10 bg-white/[0.035] p-6 md:p-8"
            aria-label="Direct contact details"
          >
            <p className="text-xs uppercase tracking-[0.36em] text-orange-300">
              Details
            </p>
            <h2 className="mt-4 max-w-full break-words font-teko text-[2.25rem] uppercase leading-none tracking-normal text-white [overflow-wrap:anywhere] sm:tracking-wide md:text-5xl">
              Direct ways to reach me.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-300">
              WhatsApp is usually the easiest way to reach me. Send a short message with the project context and I&apos;ll respond with the next practical step.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-white/10 p-4 transition hover:border-orange-300/50 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-gray-500">
                    {item.label}
                  </span>
                  <span className="mt-2 block break-words text-sm text-gray-200">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.form
            {...reveal}
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className="min-w-0 border border-white/10 bg-black/20 p-6 md:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs uppercase tracking-[0.28em] text-gray-400"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs uppercase tracking-[0.28em] text-gray-400"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  className={fieldClassName}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-[0.28em] text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me what you want to build or improve."
                  rows="6"
                  className={`${fieldClassName} resize-y`}
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-11 w-full items-center justify-center border border-white bg-white px-5 py-2 font-teko text-lg uppercase tracking-widest text-black transition hover:border-orange-300 hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:w-fit"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
