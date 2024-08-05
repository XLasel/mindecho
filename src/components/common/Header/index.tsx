import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { Logo } from '@/components/common/Logo';
import { Container } from '@/components/layout/Container';
import { navLinks, ROUTES } from '@/constants';
import { useMediaQueries } from '@/hook/useMediaQueries';
import { cn } from '@/utils/helpers';

import { BurgerMenu } from './BurgerMenu';
import { BurgerToggle } from './BurgerToggle';
import { NavbarListItem } from './NavbarListItem';

import s from './Header.module.scss';

interface SidebarProps {
  className?: string;
}

const parentVariants = {
  visible: {
    y: 0,
  },
  hidden: { y: 'calc(-1 * var(--header-height))' },
};

export const Header: React.FC<SidebarProps> = ({ className }) => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const { isTablet } = useMediaQueries();

  const updateScroll = (latest: number, previous: number): void => {
    if (latest < previous) {
      setHidden(false);
    } else if (latest > 100 && latest > previous) {
      setHidden(true);
    }
  };

  const handleLogoClick = () => {
    if (isBurgerMenuOpen) {
      setIsBurgerMenuOpen(false);
    }
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate(ROUTES.HOME);
    }
  };

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (isBurgerMenuOpen) return;
    updateScroll(latest, prevScrollY);
    setPrevScrollY(latest);
  });

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useEffect(() => {
    if (isBurgerMenuOpen) {
      setHidden(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isBurgerMenuOpen]);

  return (
    <>
      <motion.header
        variants={parentVariants}
        animate={hidden ? 'hidden' : 'visible'}
        className={cn(s.root, className)}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
        }}
      >
        <Container>
          <nav className={s.nav}>
            <span className={s.logo} onClick={handleLogoClick}>
              <Logo />
            </span>
            {isTablet ? (
              <BurgerToggle
                isOpen={isBurgerMenuOpen}
                handleBurger={toggleBurgerMenu}
              />
            ) : (
              <motion.ul className={s.navLinks}>
                {navLinks.map((link) => (
                  <NavbarListItem key={link.label} {...link} />
                ))}
              </motion.ul>
            )}
          </nav>
        </Container>
      </motion.header>
      {isTablet && (
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={toggleBurgerMenu} />
      )}
    </>
  );
};
