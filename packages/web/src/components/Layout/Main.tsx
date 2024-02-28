import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return <main className="z-0 flex-1 bg-neutral-9">{children}</main>;
}
