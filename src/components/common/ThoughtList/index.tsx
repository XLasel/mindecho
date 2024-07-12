import { Note } from "@/redux/noteSlice";

import s from "./ThoughtList.module.scss";

export const ThoughtList = ({
  thoughts,
}: {
  thoughts: Note["automaticThoughts"];
}) => {
  if (!thoughts.length) return null;

  return (
    <ol className={s.root}>
      {thoughts.map((el, index) => (
        <li key={index}>
          <span className={s.thought}>{el.thought}</span>
          {" -> " + el.response}
        </li>
      ))}
    </ol>
  );
};
