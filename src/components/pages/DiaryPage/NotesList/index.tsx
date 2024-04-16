import { Button } from "@/components/common/Button";

import s from "./NotesList.module.scss";
import { NoteItem } from "../NoteItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

export const NotesList = () => {
  const notes = useAppSelector((state) => state.notes.notes);

  return (
    <div className={s.root}>
      <div className={s.info}>
        <h3>Сегодня</h3>
        <Link to="add">
          <Button size="lg">Новая запись</Button>
        </Link>
      </div>
      {notes.map((note) => (
        <NoteItem key={notes.id} {...note} />
      ))}
      {/* <NoteItem /> */}
    </div>
  );
};
