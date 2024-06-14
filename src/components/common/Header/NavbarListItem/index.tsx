import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavbarListItem.module.scss";

type NavbarListItemProps = {
  label: string;
  route: string;
  img?: string;
};

export const NavbarListItem = React.forwardRef<
  HTMLLIElement,
  NavbarListItemProps
>(({ label, route }, ref) => {
  return (
    <li className={s.root} ref={ref}>
      <NavLink to={route} className={s.link}>
        {label}
      </NavLink>
    </li>
  );
});
