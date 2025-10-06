import React from 'react';

interface IconProps {
  className?: string;
}

const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 2.8 5.5 0 3.9-3.2 7.1-7.1 7.1-3.9 0-7.1-3.2-7.1-7.1 0-1.2.3-2.4.8-3.5-3.9.2-7.4-1.6-9.8-4.8 0 0-.6 2.8 1.4 5.2-1.5-.1-2.9-1.1-3.8-2.2 0 0 .1 2.8 2.5 4.7-1.2.3-2.3.1-3.1-.8 0 0 .5 3.3 3.4 4.5-1.2.3-2.5.3-3.6.1 0 0 1 3.2 4.6 3.2-2.3 1.8-5.2 2.8-8.3 2.8-1.5 0-2.8-.2-4.1-.7 2.9 1.9 6.3 3 9.9 3 7.1 0 12.1-5.1 12.1-10.9 0-.2 0-.4 0-.6 1.2-1 2.2-2.1 3-3.3z" />
  </svg>
);

export default TwitterIcon;