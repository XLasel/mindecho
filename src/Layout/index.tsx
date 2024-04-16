import { Outlet } from "react-router-dom";

import { Sidebar } from "@components/common/Sidebar";
import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
