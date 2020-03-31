import React from 'react';

function HotSale(props) {
  return (
    <svg width="268px" height="95px" viewBox="0 0 268 95" {...props}>
      <defs>
        <rect id="hotsale-rect" x={0} y={0} width={268} height={95} rx={10} />
        <filter
          x="-7.5%"
          y="-10.5%"
          width="114.9%"
          height="142.1%"
          filterUnits="objectBoundingBox"
          id="hotsale-shadow"
        >
          <feOffset dy={10} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <use
          fill="#000"
          filter="url(#hotsale-shadow)"
          xlinkHref="#hotsale-rect"
        />
        <use fill="#FFF" xlinkHref="#hotsale-rect" />
        <text
          fontFamily="PingFangTC-Semibold, PingFang TC"
          fontSize={25}
          fontWeight={500}
          letterSpacing={2.79407569}
          fill="#F42B63"
        >
          <tspan x={78} y={40}>
            支持防疫
          </tspan>
          <tspan x={78} y={75}>
            限時免費
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default HotSale;
