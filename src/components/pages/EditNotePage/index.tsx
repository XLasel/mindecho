import { useParams } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

import { NoteWrapper } from "@/components/common/NoteWrapper";
import { DiaryForm } from "@/components/common/DiaryForm";

import s from "./EditNotePage.module.scss";

import { selectAllNotes } from "@/redux/noteSlice";

export const EditNotePage = () => {
  const { id } = useParams();
  const notes = useAppSelector(selectAllNotes);
  const note = notes.find((note) => note.id === id);

  console.log(id);
  console.log(note);

  return (
    <NoteWrapper>
      <DiaryForm noteToEdit={note} />
    </NoteWrapper>
  );
};
