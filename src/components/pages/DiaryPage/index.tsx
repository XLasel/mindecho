import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SearchInput } from "@/components/common/Search";
import { DatePickerPanel } from "@/components/common/DatePickerPanel";
import { NotesList } from "./NotesList";
import Arrow from "@/assets/arrow.svg";

import { useAppSelector } from "@/redux/hook";

import s from "./DiaryPage.module.scss";
import IMAGE from "@/images";

export const DiaryPage = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <Container width="small">
      <div className={s.root}>
        <h1>Дневник эмоций</h1>
        <div className={s.controls}>
          {notes.length > 0 ? (
            <>
              <SearchInput placeholder="Найти запись" />
              <DatePickerPanel />
            </>
          ) : (
            <div className={s.plug}>
              <img src={IMAGE.notesImage} />
              <div className={s.message}>
                <span>Нажмите, чтобы добавить перую запись</span>
                <span className={s.svgContainer}>
                  <Arrow />
                </span>
              </div>
            </div>
          )}
          <Link to="add">
            <Button
              size="lg"
              className="inline-flex gap-2 text-xl rounded-lg text-white border-2 border-dashed w-full h-12 bg-transparent hover:text-black  hover:border-transparent hover:bg-secondary"
            >
              <FeatherIcon icon="plus" />
              Новая запись
            </Button>
          </Link>
        </div>
        <NotesList />
      </div>
    </Container>
  );
};
