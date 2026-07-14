import { IconProps } from "./typs";

export const CloseIcon = (
  { size = 20, className = "" }: IconProps, // ← Ось тут ми даємо ім'я!
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 11.25L0.75 0.75M11.25 0.75L0.75 11.25"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
