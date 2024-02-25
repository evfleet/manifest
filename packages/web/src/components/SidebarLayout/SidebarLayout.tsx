import { ReactNode } from "react";

import { Header } from "../Header";

type SidebarLayoutProps = {
  children: ReactNode;
};

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div>
      <Header />
      <div className="flex gap-2">
        <aside>
          <p>Sidebar</p>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
