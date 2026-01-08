import type { ComponentProps } from "react";

export function LogoMark(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 28.5L32 13l20 15.5V50a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V28.5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M26 54V36a2.5 2.5 0 0 1 2.5-2.5h19A2.5 2.5 0 0 1 50 36v18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 39h15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M33 45.5h3.5M40 45.5h3.5M33 51h3.5M40 51h3.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

