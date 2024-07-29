import { useParams } from 'react-router-dom';

import { Container } from '@/components/layout/Container';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { ROUTES } from '@/constants';

import { materials } from '../content';
import { MaterialNotFound } from '../MaterialNotFoundPage';

import s from './UsefulMaterialTemplate.module.scss';

export const UsefulMaterialTemplate = () => {
  const { id } = useParams();
  const material = materials.find((materialItem) => materialItem.id === id);

  if (!material) {
    return <MaterialNotFound />;
  }

  const ContentComponent = material.content;

  return (
    <Container>
      <ContentWrapper defaultHref={ROUTES.USEFUL_MATERIALS}>
        <div className={s.root}>
          <header className={s.titleContainer}>
            <h1>{material.title}</h1>
            <p>{material.description}</p>
          </header>
          <main>
            <div>
              <div className={s.image}>
                <img src={material.image} alt={material.title} />
              </div>
              <ContentComponent />
            </div>
          </main>
        </div>
      </ContentWrapper>
    </Container>
  );
};
