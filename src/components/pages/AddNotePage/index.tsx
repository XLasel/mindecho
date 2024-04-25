import { useLocation, useNavigate, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { Button } from "@/components/common/Button";

import s from "./AddNotePage.module.scss";
import { DiaryForm } from "@/components/common/DiaryForm";
import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { NoteWrapper } from "@/components/common/NoteWrapper";

export const AddNotePage = () => {
  return (
    <NoteWrapper>
      <DiaryForm />
    </NoteWrapper>
  );
};
