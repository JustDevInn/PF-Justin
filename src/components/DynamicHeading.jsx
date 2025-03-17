import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは (Konnichiwa)",
  "안녕하세요 (Annyeonghaseyo)",
  "你好 (Nǐ hǎo)",
  "مرحبا (Marhaban)",
  "Привет (Privet)",
];

const DynamicHeading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100px] flex justify-center items-center">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        {greetings[index]}
      </motion.h1>
    </div>
  );
};

export default DynamicHeading;
