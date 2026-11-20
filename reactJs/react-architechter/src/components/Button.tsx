import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
