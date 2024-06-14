import s from "./CognitiveBiasBadge.module.scss";

export const CognitiveBiasBadge = ({ title }: { title: string }) => {
  return <div className={s.root}>{title}</div>;
};
