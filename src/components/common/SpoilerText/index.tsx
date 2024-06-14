import { useState, ReactNode } from "react";

import { Button } from "../Button";
import { AnimatedCollapse } from "../AnimatedCollapse";

import s from "./SpoilerText.module.scss";

type SpoilerTextProps = {
  titleOpen?: string;
  titleClosed?: string;
  statusOpen?: boolean;
  children: ReactNode;
};

export const SpoilerText: React.FC<SpoilerTextProps> = ({
  titleOpen = "Закрыть",
  titleClosed = "Открыть",
  statusOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(() => statusOpen);

  const toggleSpoiler = () => setIsOpen(!isOpen);

  return (
    <div className={s.root}>
      <Button variant="link" size="sm" type="button" onClick={toggleSpoiler}>
        {isOpen ? titleOpen : titleClosed}
      </Button>
      <AnimatedCollapse className={s.content} isOpen={isOpen}>
        {children}
      </AnimatedCollapse>
    </div>
  );
};
