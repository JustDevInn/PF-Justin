import React from "react";
import beers from "../assets/portfolio/beerbrewer.jpg";
import ibussanctuary from "../assets/portfolio/donatedog2.jpg";
import royalmarines from "../assets/portfolio/royalmarines.jpg";
import photographer1 from "../assets/portfolio/annelie.png";
import thevoidtattoo from "../assets/portfolio/bg.png";
import removehero from "../assets/portfolio/couple.JPG";
import removeheroMobile from "../assets/portfolio/couple.JPG";
import bookRetreats from "../assets/portfolio/bookretreatscut.png";
import mmvmtmobile1 from "../assets/portfolio/images-mobile/marsof.jpg";
import pawsofhopemobile from "../assets/portfolio/images-mobile/streetdog.jpg";
import photomobile1 from "../assets/portfolio/images-mobile/woman.png";

export const projects = [
  {
    id: 1,
    src: royalmarines,
    srcMobile: mmvmtmobile1,
    role: "Designer and developer",
    description: "Mission movement: forging the elite",
    explanation:
      "A platform to guide and assist those looking to create a future in the special forces.",
    title: "MISSION MOVEMENT",
    titleFontStyle: "font-teko",
    href: "https://missionmovement.vercel.app/",
  },
  {
    id: 2,
    src: bookRetreats,
    srcMobile: bookRetreats,
    role: "Developer",
    description: "Find and book retreats",
    explanation:
      "Developed a booking feature that fetches data from an API and dynamically displays retreats based on user-selected filters, providing an intuitive search experience.",
    title: "Booking retreats",
    titleTextColor: "text-white",
    textColor: "text-white",
    titleFontStyle: "sans",
    href: "https://br-search-challenge-pq3n.vercel.app/search",
  },
  {
    id: 3,
    src: removehero,
    srcMobile: removeheroMobile,
    role: "Designed and developer",
    description: (
      <>
        Building confidence <br />
        through coaching.
      </>
    ),
    explanation:
      "A custom-built website designed and developed using React and Tailwind CSS",
    title: "RE-MOVE Coaching",
    titleFontStyle: "font-teko",
    href: "/",
    // https://re-move-v2.vercel.app/
  },
  {
    id: 4,
    src: beers,
    srcMobile: beers,
    role: "Designer and developer",
    description: "Beer brewery app",
    explanation:
      "This was a project that I did for a software development company, the purpose was displaying the connection of front and back end.",
    title: "The Brewery",
    titleFontStyle: "font-berk",
    href: "https://github.com/JustDevInn/PxlWidgets-Beer-Assignment-Reactjs",
  },
  {
    id: 5,
    src: ibussanctuary,
    srcMobile: pawsofhopemobile,
    role: "Designer and developer",
    description: "Online presence for strays",
    explanation:
      "A potential online platform to help animal rescues reach worldwide.",
    title: "Paws of Hope",
    href: "/",
    // https://github.com/JustDevInn/dharmawangsa
  },
  {
    id: 6,
    src: photographer1,
    srcMobile: photomobile1,
    role: "Developer",
    description: "Creative portfolio",
    explanation:
      "A minimalistic yet visually striking portfolio that showcases the artistry of tattoo design. With clean lines and modern aesthetics, it delivers a bold digital presence while maintaining a refined, professional look.",
    title: "Alina Lee",
    titleTextColor: "text-white",
    textColor: "text-white",
    titleFontStyle: "font-playfair",
    href: "https://photographer-pf.vercel.app/",
  },
  {
    id: 7,
    src: thevoidtattoo,
    srcMobile: thevoidtattoo,
    role: "Developer",
    description: "Bold and edgy tattoo artistry.",
    explanation:
      "A rugged and contemporary design that reflects the bold creativity and individuality of a freelance tattoo artist, creating a striking digital presence.",
    title: "The Void Tattoo",
    titleTextColor: "text-white",
    textColor: "text-white",
    titleFontStyle: "font-rozha",
    href: "http://tattoo-website-vuqi.vercel.app",
  },
];
