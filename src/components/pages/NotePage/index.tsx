import { useParams } from "react-router-dom";

import s from "./NotePage.module.scss";

export const NotePage = () => {
  const { id } = useParams();

  return <div>index</div>;
};
