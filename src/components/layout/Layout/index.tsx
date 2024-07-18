import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Header className={s.header} />
        <main className={s.main}>
          <Outlet />
          <ScrollRestoration
            getKey={(location) => {
              const isEditOrAddPage = /\/(edit|add)$/.test(location.pathname);
              return isEditOrAddPage ? location.key : location.pathname;
            }}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};
