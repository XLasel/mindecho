import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { buttonVariants } from '@/components/common/Button';
import {
  useBackNavigation,
  type UseBackNavigationProps,
} from '@/hook/useBackNavigation';
import { cn } from '@/utils/helpers';

export const LinkBack = ({
  defaultHref,
}: {
  defaultHref?: UseBackNavigationProps;
}) => {
  const { href } = useBackNavigation(defaultHref);
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof href === 'string') {
      navigate(href, { preventScrollReset: true });
    } else {
      navigate(href);
    }
  };

  return (
    <a
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'self-start gap-1 cursor-pointer'
      )}
    >
      <FeatherIcon icon="chevron-left" /> Назад
    </a>
  );
};
