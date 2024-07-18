import FeatherIcon from "feather-icons-react";

import { Button } from "../Button";
import { Logo } from "../Logo";

import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.logoPanel}>
        <Logo theme="monochrome" />
        <Button
          variant="ghost"
          className="hover:text-secondary-foreground/80"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FeatherIcon icon="arrow-up" />
          Наверх
        </Button>
      </div>
      <p className={s.copy}>2024&copy;MindEcho. All rights reserved</p>
    </div>
  );
};
