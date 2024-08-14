import React from "react";

const Elipse = () => (
  <svg
    width="600.51px"
    height="556.03px"
    viewBox="0 0 600.5162.06%"
    style={{
      position: "absolute",
      top: "-250px",
      left: "-90px",
      transform: "rotate(18.38deg)",
      zIndex: 0
    }}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#F31AEA", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#2F2440", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <ellipse
      cx="300.25"
      cy="278.015"
      rx="300.25"
      ry="278.015"
      fill="url(#grad1)"
    />
  </svg>
);

export default Elipse;
