import { Container } from "@/components/layout/Container";

import s from "./FeaturesSection.module.scss";

const cards = [
  {
    title: "Отслеживание мыслей",
    text: "Записывайте свои автоматические мысли и анализируйте их с помощью структурированных дневниковых записей.",
  },
  {
    title: "Идентификация когнитивных искажений",
    text: "Учитесь распознавать и корректировать когнитивные искажения, которые могут влиять на ваше эмоциональное состояние.",
  },
  {
    title: "Анализ и статистика",
    text: "Используйте встроенные инструменты для анализа своих записей и наблюдайте за прогрессом.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className={s.root}>
      <Container>
        <div className={s.content}>
          <h2 className={s.title}>MindEcho - это:</h2>
          <div className={s.cards}>
            {cards.map((card, index) => (
              <div key={index} className={s.card}>
                <h3>{card.title}</h3>
                <p className={s.cardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
