import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Header className={s.header} />
        <main className={s.main}>
          <Outlet />
          <ScrollRestoration getKey={(location) => location.pathname} />
        </main>
        <Footer />
      </div>
    </div>
  );
};
