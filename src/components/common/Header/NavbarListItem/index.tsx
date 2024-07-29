import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavbarListItem.module.scss';

interface NavbarListItemProps {
  label: string;
  route: string;
  onClick?: () => void;
}

export const NavbarListItem = React.forwardRef<
  HTMLLIElement,
  NavbarListItemProps
>(({ label, route, onClick }, ref) => (
  <li className={s.root} ref={ref} onClick={onClick}>
    <NavLink to={route} className={s.link}>
      {label}
    </NavLink>
  </li>
));

NavbarListItem.displayName = 'NavbarListItem';
