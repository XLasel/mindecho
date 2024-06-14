import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";

import { Logo } from "@/components/common/Logo";
import { NavbarListItem } from "./NavbarListItem";

import { navLinks } from "@/constants/index";

import s from "./Header.module.scss";

interface SidebarProps {
  className?: string;
}

const parentVariants = {
  visible: {
    y: 0,
  },
  hidden: { y: "calc(-1 * var(--header-height))" },
};

export const Header: React.FC<SidebarProps> = ({ className }) => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(0);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prev);
    setPrev(latest);
  });

  return (
    <motion.header
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      className={clsx(s.root, className)}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      }}
    >
      <nav className={s.nav}>
        <span className={s.logo} onClick={handleLogoClick}>
          <Logo />
        </span>
        <motion.ul className={s.navLinks}>
          {navLinks.map((link) => (
            <NavbarListItem key={link.label} {...link} />
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};
