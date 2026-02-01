import { CSSProperties } from "react";

interface ButterflyIconProps {
  className?: string;
  style?: CSSProperties;
}

export default function ButterflyIcon({ className = "w-8 h-8", style }: ButterflyIconProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Wing */}
      <path
        d="M50 50C50 50 20 30 15 20C10 10 25 5 35 15C45 25 50 50 50 50Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M50 50C50 50 15 50 5 55C-5 60 5 75 20 70C35 65 50 50 50 50Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Right Wing */}
      <path
        d="M50 50C50 50 80 30 85 20C90 10 75 5 65 15C55 25 50 50 50 50Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M50 50C50 50 85 50 95 55C105 60 95 75 80 70C65 65 50 50 50 50Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Body */}
      <ellipse
        cx="50"
        cy="50"
        rx="4"
        ry="20"
        fill="currentColor"
      />

      {/* Antennae */}
      <path
        d="M48 32C48 32 45 25 42 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 32C52 32 55 25 58 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Wing details */}
      <circle cx="30" cy="35" r="5" fill="white" opacity="0.3" />
      <circle cx="70" cy="35" r="5" fill="white" opacity="0.3" />
      <circle cx="25" cy="55" r="4" fill="white" opacity="0.2" />
      <circle cx="75" cy="55" r="4" fill="white" opacity="0.2" />
    </svg>
  );
}
