import { useState } from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from "@/components/common/accordion";
import { SectionContent, SectionTitle, SectionWrapper } from "../sectionLayout";

import { aimationSlideDown } from "../anim";

const faqData = [
  {
    key: "whoIsMindEchoFor",
    question: "Кому подойдет MindEcho?",
    answer:
      "MindEcho подходит всем, кто хочет улучшить свое психологическое здоровье и\xa0развить навыки саморефлексии и\xa0управления эмоциями. Приложение будет особенно полезно людям, проходящим терапию по\xa0методам КПТ, а\xa0также тем, кто ищет инструменты для самопомощи и\xa0саморазвития.",
  },
  {
    key: "needCbtExperience",
    question:
      "Нужно\xa0ли мне иметь опыт в\xa0КПТ, чтобы использовать MindEcho?",
    answer:
      "Нет, опыт в\xa0КПТ не\xa0требуется. MindEcho разработан для того, чтобы быть интуитивно понятным и\xa0полезным для всех пользователей, независимо от\xa0их\xa0предыдущего опыта с\xa0когнитивно-поведенческой терапией. Приложение включает в себя инструкции и\xa0советы, которые помогут вам освоить основные принципы КПТ.",
  },
  {
    key: "featuresOfMindEcho",
    question: "Какие функции предлагает MindEcho?",
    answer:
      "Основные функции MindEcho включают: запись и\xa0анализ автоматических мыслей, отслеживание эмоций и\xa0поведения, рекомендации по\xa0изменению негативных мыслительных паттернов, визуализация прогресса и\xa0отчетов.",
  },
  {
    key: "mobileUsage",
    question: "Могу ли\xa0я использовать MindEcho на\xa0мобильных устройствах?",
    answer:
      "Да, MindEcho доступен для использования на\xa0всех устройствах с\xa0интернет-браузером, включая мобильные телефоны и\xa0планшеты. ",
  },
  {
    key: "pricing",
    question: "Сколько стоит MindEcho?",
    answer:
      "MindEcho в\xa0настоящее время находится в\xa0бета-режиме и\xa0полностью бесплатен для всех пользователей.",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <SectionTitle>Часто задаваемые вопросы</SectionTitle>
      <SectionContent>
        {/* <div className={s.questions}> */}
        {/* <AnimatePresence initial={false}> */}
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={aimationSlideDown}
            // initial="hidden"
            // animate="visible"
          >
            <Accordion
              isOpen={activeIndex === item.key}
              toggle={() => toggleAccordion(item.key)}
            >
              <AccordionHeader>{item.question}</AccordionHeader>
              <AccordionContent>{item.answer}</AccordionContent>
            </Accordion>
          </motion.div>
        ))}
        {/* </AnimatePresence> */}
        {/* </div> */}
      </SectionContent>
    </SectionWrapper>
  );
};
