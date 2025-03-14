import { SVGProps } from 'react';

export default function IconBus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6M4 12h16M4 12v6M20 12v6M6 18h12a2 2 0 002-2v-1M4 17v1a2 2 0 002 2M8 4v3M16 4v3M7 16h.01M17 16h.01" />
    </svg>
  );
}
