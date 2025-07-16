import React from 'react';

const iconPaths = [
    '/animationSVG/ethereum.svg',
    '/animationSVG/binance.svg',
    '/svg/bitcoin.svg',
];

const generateUniformStyle = (index, total) => {
  // Distribuye los iconos en una cuadrícula virtual para mayor uniformidad
  const rows = Math.ceil(Math.sqrt(total));
  const cols = Math.ceil(total / rows);
  const row = Math.floor(index / cols);
  const col = index % cols;
  const top = 5 + (row * (90 / (rows - 1 || 1))); // 5% a 95%
  const left = 5 + (col * (90 / (cols - 1 || 1))); // 5% a 95%
  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDuration: `${3.5 + (index % 5) * 0.7}s`,
    animationDelay: `${(index % 7) * 0.3}s`,
    transform: `rotate(${(index * 37) % 360}deg)`,
    animationName: index % 2 === 0 ? 'float' : 'spin',
  };
};

const AnimatedIconsBackground = () => {
  const totalIcons = 30;

  return (
    <div className="icon-background" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
      {Array.from({ length: totalIcons }).map((_, i) => {
        const icon = iconPaths[i % iconPaths.length];
        const style = generateUniformStyle(i, totalIcons);

        // Determinar color de fondo según el icono
        let bgColor = 'transparent';
        if (icon.includes('ethereum')) bgColor = '#a259ff'; // morado Ethereum
        if (icon.includes('binance')) bgColor = '#f3ba2f'; // amarillo Binance
        if (icon.includes('bitcoin')) bgColor = '#f7931a'; // naranja Bitcoin

        return (
          <div
            key={i}
            style={{
              ...style,
              borderRadius: '50%',
              background: bgColor,
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              boxShadow: bgColor !== 'transparent' ? '0 2px 8px 0 rgba(0,0,0,0.10)' : undefined,
              animation: style.animationName + ' ' + style.animationDuration + ' ease-in-out infinite',
              animationDelay: style.animationDelay,
            }}
          >
            <img
              src={icon}
              alt="crypto icon"
              style={{ width: 24, height: 24, opacity: 1 }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedIconsBackground;
