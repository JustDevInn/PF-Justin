import { useState, useEffect } from "react";

const useGlowEffect = (minDelay = 5000, maxDelay = 20000) => {
  const [animationStage, setAnimationStage] = useState(0); // 0 = No glow, 1 = Glowing

  useEffect(() => {
    const triggerGlow = () => {
      // console.log("🔥 Glow effect started!");
      setAnimationStage(1);

      // Stop glow after 1.5s (adjust if needed)
      setTimeout(() => {
        // console.log("🛑 Glow effect ended!");
        setAnimationStage(0);
      }, 1500);

      // Schedule next animation with a random delay (min 10s, max 20s)
      const nextDelay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
      // console.log(`⏳ Next glow in ${nextDelay / 1000} seconds`);
      setTimeout(triggerGlow, nextDelay);
    };

    // Start initial animation after a random delay
    const initialDelay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
    // console.log(`⏳ First glow will start in ${initialDelay / 1000} seconds`);
    const initialTimeout = setTimeout(triggerGlow, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [minDelay, maxDelay]);

  return animationStage;
};

export default useGlowEffect;
