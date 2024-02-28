import { ReactNode } from "react";

import { Header } from "../Header";
import { Container } from "./Container";
import { Main } from "./Main";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}
