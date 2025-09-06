"use client";
import { useEffect } from "react";

const FuzzyOverlay = () => {
  useEffect(() => {
    const fuzzyOverlay = document.querySelector(
      ".fuzzy-overlay"
    ) as HTMLElement | null;
    if (fuzzyOverlay) {
      const interval = setInterval(() => {
        const randomX = (Math.random() - 0.5) * 20; // Random between -10% to 10%
        const randomY = (Math.random() - 0.5) * 20;
        fuzzyOverlay.style.transform = `translate(${randomX}%, ${randomY}%)`;
      }, 20); // Change every 50ms

      return () => clearInterval(interval);
    }
  }, []);

  return <div className="fuzzy-overlay"></div>;
};

export default FuzzyOverlay;
