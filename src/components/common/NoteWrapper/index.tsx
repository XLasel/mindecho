import FeatherIcon from "feather-icons-react";
import { Link, useNavigate } from "react-router-dom";

import { Button, buttonVariants } from "@/components/common/Button";

import s from "./NoteWrapper.module.scss";
import { cn } from "@/lib/utils";
import { LinkBack } from "../LinkBack";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const NoteWrapper = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <LinkBack />
      {/* <NoteActions date={note?.date} id={id} /> */}
      {children}
    </div>
  );
};
