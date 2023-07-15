import { Outlet } from "react-router-dom";

import TopBar from "@/components/TopBar";

const Layout = () => {
  return (
    <div>
      <TopBar />

      <main className="site-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
