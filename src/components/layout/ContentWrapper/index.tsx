import { LinkBack } from '@/components/common/LinkBack';
import { type UseBackNavigationProps } from '@/hook/useBackNavigation';

import s from './ContentWrapper.module.scss';

interface ContentWrapperProps {
  children: JSX.Element | JSX.Element[];
  defaultHref?: UseBackNavigationProps;
}

export const ContentWrapper = ({
  children,
  defaultHref,
}: ContentWrapperProps) => (
  <div className={s.root}>
    <LinkBack defaultHref={defaultHref} />
    {children}
  </div>
);
