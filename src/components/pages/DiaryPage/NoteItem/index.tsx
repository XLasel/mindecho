import React from "react";
import s from "./NoteItem.module.scss";
import FeatherIcon from "feather-icons-react";
import { Button } from "@/components/common/Button";
import { useAppDispatch } from "@/redux/hook";
import { deleteNote } from "@/redux/noteSlice";

export const NoteItem = ({ id, title, date, situation, emotions }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.root}>
      <div className={s.title}>
        <h4>{title}</h4>
        <FeatherIcon icon="arrow-up-right" size={32} />
      </div>
      <div className={s.subtitle}>
        <span>{date}</span>
        <p>{situation}</p>
      </div>
      <div className={s.footer}>
        <p>{emotions}</p>
        <div className={s.modify}>
          <Button size="icon" onClick={() => dispatch(deleteNote(id))}>
            <FeatherIcon icon="edit-2" />
          </Button>
          <Button size="icon" onClick={() => dispatch(deleteNote(id))}>
            <FeatherIcon icon="trash-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
