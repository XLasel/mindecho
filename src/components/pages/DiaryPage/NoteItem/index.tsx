import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { Button } from '@/components/common/Button';
import { CognitiveBiasBadgeList } from '@/components/common/CognitiveBiasBadgeList';
import { NoteActions } from '@/components/common/NoteActions';
import { ThoughtList } from '@/components/common/ThoughtList';
import { biases, ROUTES } from '@/constants';
import { cn, filteredBiases, filterThoughts } from '@/utils/helpers';

import s from './NoteItem.module.scss';

interface NoteItemProps {
  id: Note['id'];
  title: Note['title'];
  date: Note['date'];
  situation: Note['situation'];
  automaticThoughts: Note['automaticThoughts'];
  cognitiveDistortions: Note['cognitiveDistortions'];
}

export const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  date,
  situation,
  automaticThoughts,
  cognitiveDistortions,
}) => {
  const currentBiasData = filteredBiases(cognitiveDistortions, biases);
  const filterThoughtsForView = filterThoughts(automaticThoughts);

  return (
    <div className={s.root}>
      <Link
        to={ROUTES.DIARY_ENTRY(id)}
        className={cn(s.title, 'group')}
        aria-label="Перейти к записи"
        title="Перейти к записи"
      >
        <h3>{title}</h3>
        <Button
          size="icon"
          variant="ghostMuted"
          className="group-hover:text-foreground"
        >
          <FeatherIcon icon="arrow-up-right" size={32} />
        </Button>
      </Link>
      <div className={s.content}>
        {!!situation && (
          <div className={s.group}>
            <span className={s.fieldName}>Ситуация:</span>
            <p>{situation}</p>
          </div>
        )}
        {!!currentBiasData.length && (
          <div className={s.group}>
            <span className={s.fieldName}>Когнитивные искажения:</span>
            <CognitiveBiasBadgeList biasesData={currentBiasData} />
          </div>
        )}
        {!!filterThoughtsForView.length && (
          <div className={s.group}>
            <span className={s.fieldName}>Мысли:</span>
            <ThoughtList thoughts={filterThoughtsForView} />
          </div>
        )}
      </div>
      <NoteActions date={date} id={id} />
    </div>
  );
};
