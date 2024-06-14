import IMAGE from "@/images";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";

import s from "./CallToActionSection.module.scss";

export const CallToActionSection = () => (
  <section className={s.root}>
    <Container>
      <div className={s.content}>
        <img className={s.image} src={IMAGE.invitation} />
        <div className={s.offer}>
          <h2>Готовы начать свой путь к&nbsp;лучшему самочувствию?</h2>
          <div className={s.text}>
            <p>
              Присоединяйтесь к MindEcho и&nbsp;сделайте первую запись
              уже&nbsp;сегодня!
            </p>
            <Button size="lg" variant="secondary" className={s.ctaButton}>
              Cделать запись
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
