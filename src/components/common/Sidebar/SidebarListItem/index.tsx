import { NavLink } from "react-router-dom";

import { IconNav } from "../IconNav";

import s from "./SidebarListItem.module.scss";

type SidebarListItemProps = {
  label: string;
  route: string;
  img?: string;
};

export const SidebarListItem: React.FC<SidebarListItemProps> = ({
  label,
  route,
}) => {
  return (
    <li className={s.root}>
      <NavLink to={route} className={s.link}>
        <IconNav item={label} />
        {label}
      </NavLink>
    </li>
  );
};
