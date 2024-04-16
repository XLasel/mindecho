import { Link } from "react-router-dom";

import { Logo } from "../Logo";

import { sidebarLinks } from "@constants/index.ts";

import s from "./Sidebar.module.scss";
import { SidebarListItem } from "./SidebarListItem";

export const Sidebar = () => (
  <div className={s.root}>
    <nav className={s.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={s.navLinks}>
        {sidebarLinks.map((link) => (
          <SidebarListItem key={link.label} {...link} />
        ))}
      </ul>
    </nav>
  </div>
);
