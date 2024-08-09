import React from 'react';

const Elipse = ({ x, y, width, height, angle }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `rotate(${angle}deg)`,
    }}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F31AEA', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2F2440', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill="url(#grad1)" />
  </svg>
);

export default Elipse;
