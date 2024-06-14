import { useState } from "react";

import { Container } from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from "@/components/common/accordion";

import s from "./FAQSection.module.scss";

const faqData = [
  {
    key: "whoIsMindEchoFor",
    question: "Кому подойдет MindEcho?",
    answer:
      "MindEcho подходит всем, кто хочет улучшить свое психологическое здоровье и развить навыки саморефлексии и управления эмоциями. Приложение будет особенно полезно людям, проходящим терапию по методам КПТ, а также тем, кто ищет инструменты для самопомощи и саморазвития.",
  },
  {
    key: "needCbtExperience",
    question: "Нужно ли мне иметь опыт в КПТ, чтобы использовать MindEcho?",
    answer:
      "Нет, опыт в КПТ не требуется. MindEcho разработан для того, чтобы быть интуитивно понятным и полезным для всех пользователей, независимо от их предыдущего опыта с когнитивно-поведенческой терапией. Приложение включает в себя инструкции и советы, которые помогут вам освоить основные принципы КПТ.",
  },
  {
    key: "featuresOfMindEcho",
    question: "Какие функции предлагает MindEcho?",
    answer:
      "Основные функции MindEcho включают: запись и анализ автоматических мыслей, отслеживание эмоций и поведения, рекомендации по изменению негативных мыслительных паттернов, визуализация прогресса и отчетов.",
  },
  {
    key: "mobileUsage",
    question: "Могу ли я использовать MindEcho на мобильных устройствах?",
    answer:
      "Да, MindEcho доступен для использования на всех устройствах с интернет-браузером, включая мобильные телефоны и планшеты. ",
  },
  {
    key: "pricing",
    question: "Сколько стоит MindEcho?",
    answer:
      "MindEcho в настоящее время находится в бета-режиме и полностью бесплатен для всех пользователей.",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={s.root}>
      <Container>
        <div className={s.content}>
          <h2>Часто задаваемые вопросы</h2>
          <div className={s.questions}>
            {faqData.map((item, index) => (
              <Accordion
                key={item.key}
                isOpen={activeIndex === index}
                toggle={() => toggleAccordion(index)}
              >
                <AccordionHeader>{item.question}</AccordionHeader>
                <AccordionContent>{item.answer}</AccordionContent>
              </Accordion>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
