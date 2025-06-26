// import Libraries
import cn from "classnames";

// App imports
import type { ButtonProps } from "./types/Button.type";

// import Styles
import styles from "./Button.module.css";

export function Button({
  children,
  className,
  typeButton = "primary",
  caps = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.buttonPrimary]: typeButton === "primary",
          [styles.buttonSecondary]: typeButton === "secondary",
          [styles.buttonCaps]: caps,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
