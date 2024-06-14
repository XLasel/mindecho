import FeatherIcon from "feather-icons-react";

import { Button } from "@/components/common/Button";
import { SearchInput } from "@/components/common/Search";

import s from "./DiaryPage.module.scss";
import { NotesList } from "./NotesList";
import { Link } from "react-router-dom";
import { DatePickerWithRange } from "@/components/common/DatePicker";

export const DiaryPage = () => {
  return (
    <div className={s.root}>
      {/* <Button variant="link" className="self-start gap-1">
          <FeatherIcon icon="chevron-left" /> Назад к записям
        </Button> */}
      <h2>Все записи</h2>
      <div className={s.controls}>
        <SearchInput placeholder="Найти запись" />
        <DatePickerWithRange />
        <Link to="add">
          <Button
            size="lg"
            className="inline-flex gap-2 text-xl rounded-lg text-white border-2 border-dashed w-full h-12 bg-transparent hover:text-black  hover:border-transparent hover:bg-secondary"
          >
            {/* <div className="text-black rounded-full bg-secondary"> */}
            <div className="">
              <FeatherIcon icon="plus" />
            </div>
            Новая запись
          </Button>
        </Link>
      </div>
      <NotesList />
    </div>
  );
};
