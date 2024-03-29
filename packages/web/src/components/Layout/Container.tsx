import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-9">{children}</div>
  );
}
