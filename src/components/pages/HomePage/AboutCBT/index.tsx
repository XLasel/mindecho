import { Container } from "@/components/layout/Container";

import IMAGE from "@/images";

import s from "./AboutCBT.module.scss";

export const AboutCBT = () => {
  return (
    <section className={s.root}>
      <Container>
        <div className={s.primary}>
          <h2>Что такое когнитивно-поведенческая терапия?</h2>
          <div className={s.description}>
            <p>
              <strong>Когнитивно-поведенческая терапия (КПТ)</strong> - это
              научно обоснованный метод психотерапии, который помогает людям
              осознать и изменить негативные мыслительные шаблоны.
            </p>
            <p>
              <strong>КПТ</strong> фокусируется на текущих проблемах и помогает
              развивать навыки для управления ими.
            </p>
          </div>
        </div>
      </Container>
      <div className={s.accent}>
        <Container>
          <div className={s.illustration}>
            <p>
              Основой КПТ является идея, что наши <span>мысли</span>,{" "}
              <span>эмоции</span> и <span>поведение</span> взаимосвязаны, и
              изменение одного элемента может повлиять на другие
            </p>
            <img src={IMAGE.kptDiagram2} alt="" />
          </div>
        </Container>
      </div>
    </section>
  );
};
