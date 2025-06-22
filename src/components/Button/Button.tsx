// import Libraries
import cn from "classnames";

// App imports
import type { ButtonProps } from "./types/Button.type";

// import Styles
import styles from "./Button.module.css";

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
