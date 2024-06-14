import { Outlet } from "react-router";

import { Container } from "@/components/layout/Container";

import s from "./DiaryPageLayout.module.scss";

export const DiaryPageLayout = () => {
  return (
    <div className={s.root}>
      <Container width="small">
        <Outlet />
      </Container>
    </div>
  );
};
