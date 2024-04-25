import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

import { Button } from "@/components/common/Button";
import { NoteItem } from "../NoteItem";

import { selectAllNotes } from "@/redux/noteSlice";

import s from "./NotesList.module.scss";
import { parse } from "date-fns";
import { selectFilteredNotes } from "@/redux/selectors";
import { useEffect, useState } from "react";

export const NotesList: React.FC = () => {
  const { pageSize, currentPage, itemsPerPage } = useAppSelector(
    (state) => state.pagination
  );
  const filteredNotes = useAppSelector(selectFilteredNotes);
  // let sortedNotes;
  const [sortedNotes, setSortedNotes] = useState<any[]>(filteredNotes);
  console.log(filteredNotes);

  useEffect(() => {
    const sorted = filteredNotes
      .slice()
      .sort((a, b) => {
        const dateA = parse(a.date, "dd-MM-yyyy", new Date());
        const dateB = parse(b.date, "dd-MM-yyyy", new Date());

        return dateB.getTime() - dateA.getTime();
      })
      .slice(startIndex, endIndex);

    setSortedNotes(sorted);
  }, [filteredNotes]);

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNotes = filteredNotes.slice(startIndex, endIndex);
  }, []);

  // const sortedNotes = filteredNotes.sort((a, b) => {
  //   const dateA = parse(a.date, "dd-MM-yyyy", new Date());
  //   const dateB = parse(b.date, "dd-MM-yyyy", new Date());

  //   return dateB.getTime() - dateA.getTime();
  // });

  return (
    <div className={s.root}>
      <div className={s.info}>
        <h3>Сегодня</h3>
        <Link to="add">
          <Button size="lg">Новая запись</Button>
        </Link>
      </div>
      {sortedNotes.length !== 0 ? (
        sortedNotes.map((note) => <NoteItem key={note.id} {...note} />)
      ) : (
        <div>Добвьте перую запись</div>
      )}
    </div>
  );
};
