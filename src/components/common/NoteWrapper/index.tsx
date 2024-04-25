import FeatherIcon from "feather-icons-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/common/Button";

import s from "./NoteWrapper.module.scss";

type Props = {
  children: JSX.Element;
};

export const NoteWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant="link"
        className="self-start gap-1"
      >
        <FeatherIcon icon="chevron-left" /> Назад к записям
      </Button>
      {children}
    </div>
  );
};
