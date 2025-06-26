import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "primary" | "secondary";
  caps?: boolean;
  children: ReactNode;
}
