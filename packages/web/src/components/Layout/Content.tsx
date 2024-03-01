import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export function Content({ children, className }: ContentProps) {
  return <main className={twMerge("flex-1", className)}>{children}</main>;
}
