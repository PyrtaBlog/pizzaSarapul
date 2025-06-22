import type { ButtonProps } from "./types/Button.type";

import styles from "./Button.module.css";

import cn from "classnames";

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
