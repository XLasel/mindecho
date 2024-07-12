import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { cn, filterThoughts, filteredBiases } from "@/lib/utils";

import { CognitiveBiasBadgeList } from "@/components/common/CognitiveBiasBadgeList";
import { NoteActions } from "@/components/common/NoteActions";
import { buttonVariants } from "@/components/common/Button";
import { ThoughtList } from "@/components/common/ThoughtList";

import { Note } from "@/redux/noteSlice";
import { biases } from "@/constants";

import s from "./NoteItem.module.scss";

interface NoteItemProps {
  id: Note["id"];
  title: Note["title"];
  date: Note["date"];
  situation?: Note["situation"];
  automaticThoughts?: Note["automaticThoughts"];
  cognitiveDistortions?: Note["cognitiveDistortions"];
}

export const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  date,
  situation,
  automaticThoughts,
  cognitiveDistortions,
}) => {
  const currentBiasData = filteredBiases(cognitiveDistortions, biases);
  const filterThoughtsForView = filterThoughts(automaticThoughts);

  return (
    <div className={s.root}>
      <div className={s.title}>
        <h4>{title}</h4>
        <Link
          aria-label="Перейти к записи"
          title="Перейти к записи"
          to={`/diary/${id}`}
          className={cn(
            buttonVariants({ size: "icon", variant: "ghostMuted" }),
            "p-0"
          )}
        >
          <FeatherIcon icon="arrow-up-right" size={32} />
        </Link>
      </div>
      <div className={s.content}>
        {!!situation && (
          <div className={s.group}>
            <span className={s.fieldName}>Ситуация:</span>
            <p>{situation}</p>
          </div>
        )}
        {!!currentBiasData.length && (
          <CognitiveBiasBadgeList biasesData={currentBiasData} />
        )}
        {!!filterThoughtsForView.length && (
          <div className={s.group}>
            <span className={s.fieldName}>Мысли:</span>
            <ThoughtList thoughts={filterThoughtsForView} />
          </div>
        )}
      </div>
      <NoteActions date={date} id={id} />
    </div>
  );
};
