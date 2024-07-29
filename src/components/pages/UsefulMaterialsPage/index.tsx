import { NavLink } from 'react-router-dom';

import { Container } from '@/components/layout/Container';
import { InnerPageLayout } from '@/components/layout/InnerPageLayout';
import { ROUTES } from '@/constants';

import { materials } from './content';

import s from './UsefulMaterialsPage.module.scss';

export const UsefulMaterialsPage = () => {
  return (
    <Container>
      <InnerPageLayout>
        <div className={s.content}>
          <h1>Полезные материалы</h1>
          <div className={s.description}>
            <p>
              Здесь вы найдете тематические статьи, которые помогут вам лучше
              понять и применять принципы когнитивно-поведенческой терапии (КПТ)
              в вашей жизни.
            </p>
          </div>
        </div>
        <ul className={s.list}>
          {materials.map((material, i) => (
            <li key={i}>
              <NavLink
                to={ROUTES.MATERIALS_ENTRY(material.id)}
                className={s.item}
              >
                <div className={s.image}>
                  <img src={material.image} />
                </div>
                <h3>{material.title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </InnerPageLayout>
    </Container>
  );
};
