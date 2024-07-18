import { motion } from "framer-motion";

import { sectionData } from "@/constants";
import { useSectionContext } from "@/context/section";
import { cn } from "@/lib/utils";

import s from "./NavigationSection.module.scss";

const itemAnimate = {
  initial: { opacity: 0, x: 0.5 },
  enter: (i: number) => ({
    opacity: 1,
    x: 0.4,
    transition: { delay: 0.3 + i * 0.1 },
  }),
  exit: { opacity: 0 },
};

export const NavigationSection = ({ scrollToSection }) => {
  const { activeSection } = useSectionContext();
  return (
    <motion.nav className={s.root}>
      <h5>Быстрая навигация</h5>
      <motion.ul className={s.list}>
        {Object.values(sectionData).map((section, i) => (
          <motion.li
            key={i}
            variants={itemAnimate}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            className={cn(
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
