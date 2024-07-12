import { LinkBack } from "../LinkBack";

import s from "./NoteWrapper.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const NoteWrapper = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <LinkBack />
      {children}
    </div>
  );
};
