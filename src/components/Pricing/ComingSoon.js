import React from 'react';

function ComingSoon(props) {
  return (
    <svg width="52px" height="52px" viewBox="0 0 52 52" {...props}>
      <g
        transform="translate(8 8)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <circle id="Oval-Outer" fill="#4D4D4D" cx={18} cy={18} r={6.32432432} />
        <circle
          id="Oval-Inner"
          stroke="#4D4D4D"
          strokeWidth={5}
          cx={18}
          cy={18}
          r={15.5}
        />
      </g>
    </svg>
  );
}

export default ComingSoon;
