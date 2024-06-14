import FeatherIcon from "feather-icons-react";

import { formatDateForUI } from "@/lib/dateUtils";

import s from "./DateUI.module.scss";

export const DateUI = ({ date }: { date: string }) => {
  const formattedDate = formatDateForUI(date);

  return (
    <span className={s.root}>
      <FeatherIcon icon="clock" size={20} />
      {formattedDate}
    </span>
  );
};
