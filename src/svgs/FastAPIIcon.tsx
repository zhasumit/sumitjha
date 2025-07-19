import React from 'react';

type FastAPIIconProps = {
  size?: number | string;
};

const FastAPIIcon: React.FC<FastAPIIconProps> = ({ size = 70 }) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.1119 63.9996C49.8361 63.9996 64.2043 49.6778 64.2043 32.011C64.2043 14.3442 49.8361 0.0224609 32.1119 0.0224609C14.3878 0.0224609 0.0195923 14.3442 0.0195923 32.011C0.0195923 49.6778 14.3878 63.9996 32.1119 63.9996Z"
        fill="#009688"
        fillOpacity="0.98"
      />
      <path
        d="M29.8976 14.507L23.4818 28.7559L20.5502 35.2663L14.1339 49.5152L43.6742 28.7559H29.8142L50.09 14.507H29.8976Z"
        fill="white"
        fillOpacity="0.98"
      />
    </svg>
  );
};

export default FastAPIIcon;
