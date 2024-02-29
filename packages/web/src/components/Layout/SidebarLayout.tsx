import { ReactNode } from "react";

import { TopNav } from "../TopNav";
import { Container } from "./Container";
import { Main } from "./Main";

type SidebarLayoutProps = {
  children: ReactNode;
};

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <Container>
      <TopNav />
      <div className="flex flex-1">
        <aside className="z-10 min-w-48 bg-white shadow-md">
          <p>Sidebar</p>
        </aside>
        <Main>{children}</Main>
      </div>
    </Container>
  );
}
