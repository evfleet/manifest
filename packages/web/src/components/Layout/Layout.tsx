import { ReactNode } from "react";

import { TopNav } from "../TopNav";
import { Container } from "./Container";
import { Main } from "./Main";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <TopNav />
      <Main>{children}</Main>
    </Container>
  );
}
