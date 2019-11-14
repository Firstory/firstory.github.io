import React from 'react';

function Rocket(props) {
  return (
    <svg width="110px" height="243px" viewBox="0 0 110 243" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.8786264%" id="rocket-linear-gradient">
          <stop stopColor="#F42828" offset="0%" />
          <stop stopColor="#F7A717" offset="99.9392948%" />
        </linearGradient>
        <path
          d="M35.539 167.178c11.145-9.612 27.929-9.709 38.817.194 13.373 12.164 11.745 33.801-4.714 47.095C47.162 232.624 53.214 243 53.214 243c-19.886-20.752-2.593-47.556-12.105-47.556-9.511 0-3.891 23.78-3.891 23.78-17.331-28.575-11.063-43.953-1.68-52.046zM54.8 0s46 32 42 89c0 0 20 16 10 45l-21-9-13 26h-36l-13-26-21 9c-10-29 10-45 10-45-4-57 42-89 42-89zm0 55.5c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
          id="rocket-path"
        />
        <filter
          x="-15.5%"
          y="-5.3%"
          width="131.0%"
          height="114.0%"
          filterUnits="objectBoundingBox"
          id="rocket-shadow"
        >
          <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#rocket-shadow)" xlinkHref="#rocket-path" />
        <use fill="url(#rocket-linear-gradient)" xlinkHref="#rocket-path" />
        <ellipse fill="#FFF" cx={55} cy={76.5} rx={23} ry={22.5} />
      </g>
    </svg>
  );
}

export default Rocket;
