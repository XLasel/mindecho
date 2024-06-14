import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";

import IMAGE from "@/images";

import s from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={s.root}>
      <Container width="full">
        <div className={s.content}>
          <div className={s.text}>
            <h1>
              <span>
                Mind<span>Echo</span>
              </span>{" "}
              - личный дневник автоматических мыслей
            </h1>
            <p>
              Преобразуем мысли и улучшаем качество жизни с помощью методов
              когнитивно-поведенческой терапии
            </p>
            <Button size="lg" className="">
              Начнём
            </Button>
          </div>
          <div className={s.image}>
            <img src={IMAGE.welcomeIllustration} />
          </div>
        </div>
      </Container>
    </section>
  );
};
