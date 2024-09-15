import { SVGProps } from "react";

const Burger = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 38 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="37.911" height="2" />
      <rect x="0.0585938" y="7" width="37.911" height="2" />
      <rect x="0.0898438" y="15" width="37.911" height="2" />
    </svg>
  );
};

export default Burger;
