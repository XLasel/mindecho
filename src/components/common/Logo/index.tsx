import clsx from "clsx";
import s from "./Logo.module.scss";

type LogoProps = {
  theme?: "default" | "monochrome";
};

export const Logo: React.FC<LogoProps> = ({ theme = "default" }) => {
  return (
    <div className={clsx(s.root, s[theme])}>
      <svg
        className={s.icon}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 5L31.5237 14.6446L43.0211 18.8197L36.1735 28.9554L35.7557 41.1803L24 37.8L12.2443 41.1803L11.8265 28.9554L4.97887 18.8197L16.4763 14.6446L24 5Z"
          fill="currentColor"
          className={s.icon}
        />
      </svg>
      <span className={s.accent}>Mind</span>Echo
    </div>
  );
};
