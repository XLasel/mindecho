import FeatherIcon from "feather-icons-react";

import { Button } from "@/components/common/Button";
import { SearchInput } from "@/components/common/Search";

import s from "./DiaryPage.module.scss";
import { NotesList } from "./NotesList";
import { ContentManager } from "./ContentManager";

export const DiaryPage = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <Button variant="link" className="self-start gap-1">
          <FeatherIcon icon="chevron-left" /> Назад к записям
        </Button>
        <h2>Все записи</h2>
        <SearchInput placeholder="Найти запись" />
        <NotesList />
      </div>
      <ContentManager />
    </div>
  );
};
