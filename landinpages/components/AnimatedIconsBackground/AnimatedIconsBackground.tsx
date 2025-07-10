import React from 'react';

const iconPaths = [
    '/animationSVG/ethereum.svg',
    '/animationSVG/binance.svg',
  '/animationSVG/BITCOIN.svg',
  '/animationSVG/candle-up.svg',
  '/animationSVG/arrow-up.svg'
];

const generateRandomStyle = () => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${2 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 2}s`,
    transform: `rotate(${Math.random() * 360}deg)`,
  };
};

const AnimatedIconsBackground = () => {
  const totalIcons = 30;

  return (
    <div className="icon-background" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
      {Array.from({ length: totalIcons }).map((_, i) => {
        const icon = iconPaths[Math.floor(Math.random() * iconPaths.length)];
        const style = generateRandomStyle();

        return (
          <img
            key={i}
            src={icon}
            alt="crypto icon"
            className="animated-icon"
            style={style}
          />
        );
      })}
    </div>
  );
};

export default AnimatedIconsBackground;
