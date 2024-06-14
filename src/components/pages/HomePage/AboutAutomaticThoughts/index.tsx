import { Container } from "@/components/layout/Container";

import s from "./AboutAutomaticThoughts.module.scss";

export const AboutAutomaticThoughts = () => {
  return (
    <section className={s.root}>
      <Container>
        <div className={s.content}>
          <h2>Что такое автоматические мысли?</h2>
          <div className={s.description}>
            <p>
              <strong>Автоматические мысли</strong> - это спонтанные,
              непроизвольные мысли, которые возникают в ответ на различные
              события и ситуации.
            </p>
            <p>
              Они могут быть негативными и приводить к эмоциям, таким как
              тревога, грусть или гнев.
            </p>
            <p>
              <strong className={s.accent}>MindEcho</strong> создан, чтобы
              помочь вам идентифицировать и анализировать эти мысли.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
