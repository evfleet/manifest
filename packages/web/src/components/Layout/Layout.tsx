import { ReactNode } from "react";

import { TopNav } from "../TopNav";
import { Container } from "./Container";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <TopNav />
      {children}
    </Container>
  );
}
