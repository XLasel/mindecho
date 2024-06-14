import { useContext } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { sectionData } from "@/constants";
import { SectionContext } from "@/context/useSectionContextValues";

import s from "./NavigationSection.module.scss";

const itemAnimate = {
  initial: { opacity: 0, translateX: 0.5 },
  enter: (i: number) => ({
    opacity: 1,
    translateX: 0.4,
    transition: { delay: 0.3 + i * 0.1 },
  }),
  exit: { opacity: 0 },
};

export const NavigationSection = ({ scrollToSection }) => {
  const sectionContext = useContext(SectionContext);
  const { activeSection } = sectionContext;
  return (
    <motion.nav className={s.root}>
      <motion.ul className={s.list}>
        {Object.values(sectionData).map((section, i) => (
          <motion.li
            key={i}
            variants={itemAnimate}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            whileHover={{
              scale: 1.05,
            }}
            className={clsx(
              s.item,
              activeSection === section.idFormInput && s.itemActive
            )}
            onClick={() => scrollToSection(section.idFormInput)}
          >
            {/* <HashLink
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              to={`#${section.idFormInput}-label`}
            > */}
            {section.title}
            {/* </HashLink> */}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
