import { Link } from 'react-router-dom';
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

  return (
    <Link
      to={href}
      preventScrollReset={false}
      className={cn(buttonVariants({ variant: 'link' }), 'self-start gap-1')}
    >
      <FeatherIcon icon="chevron-left" /> Назад
    </Link>
  );
};
