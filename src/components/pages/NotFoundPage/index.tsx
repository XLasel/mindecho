import { Link } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Container } from '@/components/layout/Container';
import { IMAGE, ROUTES } from '@/constants';

import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={s.root}>
    <Container>
      <div className={s.wrapper}>
        <div className={s.illustration}>
          <img src={IMAGE.noContent} />
        </div>
        <div className={s.content}>
          <h1>Упс! Страница не&nbsp;найдена</h1>
          <p className={s.message}>
            Может быть, желаете перейти к&nbsp;странице дневника?
          </p>
          <Link to={ROUTES.DIARY}>
            <Button size="lg">К записям</Button>
          </Link>
        </div>
      </div>
    </Container>
  </div>
);
