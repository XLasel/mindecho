import s from './CognitiveBiasBadge.module.scss';

export const CognitiveBiasBadge = ({ title }: { title: string }) => (
  <div className={s.root}>{title}</div>
);
