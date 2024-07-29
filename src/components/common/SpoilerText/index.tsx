import { ReactNode, useState } from 'react';

import { AnimatedCollapse } from '../AnimatedCollapse';
import { Button } from '../Button';

import s from './SpoilerText.module.scss';

interface SpoilerTextProps {
  titleOpen?: string;
  titleClosed?: string;
  statusOpen?: boolean;
  children: ReactNode;
}

export const SpoilerText: React.FC<SpoilerTextProps> = ({
  titleOpen = 'Закрыть',
  titleClosed = 'Открыть',
  statusOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(() => statusOpen);

  const toggleSpoiler = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button variant="link" size="sm" type="button" onClick={toggleSpoiler}>
        {isOpen ? titleOpen : titleClosed}
      </Button>
      <AnimatedCollapse className={s.content} isOpen={isOpen}>
        {children}
      </AnimatedCollapse>
    </div>
  );
};
