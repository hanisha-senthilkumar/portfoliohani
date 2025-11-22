import { useState, useEffect } from "react";

const BackgroundAnimations = () => {
  const [stars, setStars] = useState([]);

  const generateStarsAnimation = () => {
    const countStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
    const neonColors = ["#ffffff", "rgb(19,0,247)", "#ffffff", "rgb(254,6,110)", "#ffffff"];
    
    const newStars = [];
    for (let i = 0; i < countStars; i++) {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: color,
        opacity: Math.random() * 0.8 + 0.2, // FIXED
        animationDuration: Math.random() * 5 + 1,
      });
    }
    setStars(newStars);
  };

  useEffect(() => {
    generateStarsAnimation();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((item) => (
        <div
          key={item.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            background: item.color,
            animationDuration: `${item.animationDuration}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundAnimations;
