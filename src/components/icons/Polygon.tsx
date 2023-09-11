import React, { HTMLProps } from "react";

export const Polygon = (props: HTMLProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="28"
      height="25"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
      fill='#5d6680'
    >
      <g filter="url(#filter0_b_61301_2)">
        <path
          d="M20.9282 21C17.849 26.3333 10.151 26.3333 7.0718 21L1.87565 12C-1.20355 6.66667 2.64545 0 8.80385 0H19.1961C25.3545 0 29.2036 6.66667 26.1244 12L20.9282 21Z"
          fillOpacity="1"
          fill='#5d6680'
        />
      </g>
      <defs>
        <filter
          id="filter0_b_61301_2"
          x="-11.2081"
          y="-12"
          width="50.4161"
          height="49"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
          fill='#5d6680'
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_61301_2"

          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_61301_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
