import { useParams } from "react-router-dom";

import s from "./EntryPage.module.scss";

export const EntryPage = () => {
  const { userId } = useParams();

  return <div>index</div>;
};
