import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { Button } from '@/components/common/Button';
import { Logo } from '@/components/common/Logo';
import { Container } from '@/components/layout/Container';

import s from './Footer.module.scss';

export const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setShowScrollToTop(documentHeight > windowHeight);
    };

    handleScroll();

    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div className={s.root}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.logoPanel}>
            <Logo theme="monochrome" />
            {showScrollToTop && (
              <Button
                variant="ghost"
                className="hover:text-secondary-foreground/80"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                <FeatherIcon icon="arrow-up" />
                Наверх
              </Button>
            )}
          </div>
          <p className={s.copy}>2024&copy;MindEcho. All rights reserved</p>
        </div>
      </Container>
    </div>
  );
};
