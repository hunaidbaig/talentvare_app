import React from 'react';

const AccordionSvg = ({ rotation = 0, color = '#333333', size = 13, style, ...props }) => {
  return (
    <svg
      width={size}
      height={8}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        ...style,
      }}
      {...props}
    >
      <path
        d="M11.91 0.433005L12.97 1.49401L7.19297 7.27301C7.1004 7.36616 6.99033 7.44009 6.86908 7.49054C6.74783 7.54098 6.6178 7.56696 6.48647 7.56696C6.35514 7.56696 6.22511 7.54098 6.10386 7.49054C5.98261 7.44009 5.87254 7.36616 5.77997 7.27301L-3.04452e-05 1.49401L1.05997 0.434005L6.48497 5.85801L11.91 0.433005Z"
        fill={color}
      />
    </svg>
  );
};

export default AccordionSvg;
