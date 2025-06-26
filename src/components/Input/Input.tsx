import cn from "classnames";

import styles from "./Input.module.css";
import type { InputProps } from "./types/InputProps.types";

export function Input({
  onChange,
  type,
  placeholder,
  isValid = true,
}: InputProps) {
  return (
    <input
      type={type}
      onChange={onChange}
      className={cn(styles.input, { [styles.inValid]: !isValid })}
      placeholder={placeholder}
    />
  );
}
