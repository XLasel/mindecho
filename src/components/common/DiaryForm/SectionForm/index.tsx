import { SectionDataProps, NameSectionProps } from "@/constants";
import { SectionContext } from "@/context/useSectionContextValues";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, {
  HTMLAttributes,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from "react";
import s from "./SectionForm.module.scss";

interface SectionFormProps extends HTMLAttributes<HTMLElement> {
  section: NameSectionProps;
  description: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}

export const SectionForm = forwardRef<HTMLElement, SectionFormProps>(
  ({ section, description, children, ...props }, ref) => {
    const sectionContext = useContext(SectionContext);
    //   if (sectionContext == null) return;
    console.log(section);
    console.log(section.idFormInput);

    const { setActiveSection } = sectionContext;
    // const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const { scrollY } = useScroll();

    console.log(scrollY);
    console.log(scrollYProgress);

    useMotionValueEvent(scrollYProgress, "change", (value) => {
      console.log(`prevent ${section.idFormInput} ${value}`);

      if (value > 0 && value < 1) {
        setActiveSection(section.idFormInput);
        console.log(`${section.idFormInput} ${value}`);
      }
    });
    // console.log(
    //   window.location.hash.substring(1) === `${section.idFormInput}-label`
    // );

    // useEffect(() => {
    //   const handleHashChange = () => {
    //     const hash = window.location.hash.substring(1);
    //     if (hash === `${section.idFormInput}-label` && container.current) {
    //       console.log(hash === `${section.idFormInput}-label`);

    //       container.current.scrollIntoView({ behavior: "smooth" });
    //       // Программно обновляем scrollYProgress
    //       const containerTop = container.current.getBoundingClientRect().top;
    //       const windowHeight = window.innerHeight;
    //       const progress = Math.max(0, Math.min(1, containerTop / windowHeight));
    //       scrollYProgress.set(progress);
    //     }
    //   };

    //   window.addEventListener("hashchange", handleHashChange, false);

    //   // Initial check if the hash matches this section
    //   handleHashChange();

    //   return () => {
    //     window.removeEventListener("hashchange", handleHashChange, false);
    //   };
    // }, [section.idFormInput, scrollYProgress]);

    return (
      <section
        className={s.root}
        aria-labelledby={`${section.idFormInput}-label`}
        ref={ref}
        {...props}
      >
        <h3 id={`${section.idFormInput}-label`}>{section.title}</h3>
        <div className={s.description}>{description}</div>
        {children}
      </section>
    );
  }
);
