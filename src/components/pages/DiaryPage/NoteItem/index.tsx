import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { cn } from "@/lib/utils";

import { CognitiveBiasList } from "@/components/common/CognitiveBiasList";
import { NoteActions } from "@/components/common/NoteActions";
import { buttonVariants } from "@/components/common/Button";

import s from "./NoteItem.module.scss";
import { Note } from "@/redux/noteSlice";

interface NoteItemProps {
  id: Note["id"];
  title: Note["title"];
  date: Note["date"];
  situation?: Note["situation"];
  cognitiveDistortions?: Note["cognitiveDistortions"];
}

export const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  date,
  situation,
  cognitiveDistortions,
}) => {
  const hasContent =
    situation || (cognitiveDistortions && cognitiveDistortions.length);

  return (
    <div className={s.root}>
      <div className={s.title}>
        <div>
          <h4>{title}</h4>
        </div>
        <Link
          to={`/diary/${id}`}
          className={cn(
            buttonVariants({ size: "icon", variant: "ghostMuted" }),
            "p-0"
          )}
        >
          <FeatherIcon icon="arrow-up-right" size={32} />
        </Link>
      </div>
      {hasContent && (
        <div className={s.content}>
          {situation && <p>{situation}</p>}
          {cognitiveDistortions && (
            <CognitiveBiasList cognitiveDistortions={cognitiveDistortions} />
          )}
        </div>
      )}
      <NoteActions date={date} id={id} />
    </div>
  );
};
