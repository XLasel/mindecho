import { Link } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/layout/Container';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { IMAGE, ROUTES } from '@/constants';

import s from './MaterialNotFoundPage.module.scss';

export const MaterialNotFound = () => {
  return (
    <Container>
      <ContentWrapper defaultHref={ROUTES.USEFUL_MATERIALS}>
        <div className={s.root}>
          <div className={s.wrapper}>
            <div className={s.illustration}>
              <img src={IMAGE.noContent} />
            </div>
            <div className={s.content}>
              <h1>Упс! Такой записи ещё нет</h1>
              <p className={s.message}>
                Может быть, желаете перейти к&nbsp;списку полезных материалов?
              </p>
              <Link to={ROUTES.USEFUL_MATERIALS}>
                <Button size="lg">К спику материалов</Button>
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
};
