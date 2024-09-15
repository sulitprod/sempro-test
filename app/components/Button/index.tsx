import { HTMLProps } from "react";

import styles from "./Button.module.scss";
import HoverText from "./HoverText";

type ButtonProps = Readonly<
  HTMLProps<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset";
    format?: "primary" | "secondary";
    hoverEffect?: boolean;
  }
>;

const Button = ({
  children,
  format = "primary",
  className,
  hoverEffect = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        styles.button,
        styles[format],
        hoverEffect ? styles.hoverEffect : "",
        className,
      ]
        .join(" ")
        .replace(/\s{2}/g, " ")
        .trim()}
      {...props}
    >
      {children}
    </button>
  );
};

Button.HoverText = HoverText;

export default Button;
