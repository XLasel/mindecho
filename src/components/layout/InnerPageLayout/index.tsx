import s from './InnerPageLayout.module.scss';

export const InnerPageLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className={s.root}>{children}</div>;
};
