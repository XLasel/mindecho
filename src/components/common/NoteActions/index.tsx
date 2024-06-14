import FeatherIcon from "feather-icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button, buttonVariants } from "../Button";
import { DateUI } from "../DateUI";

import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import { deleteNote } from "@/redux/noteSlice";

import s from "./NoteActions.module.scss";
import { useState } from "react";
import { Modal } from "../Modal";
import { useBackNavigation } from "@/hook/useBackNavigation";

export const NoteActions = ({ date, id, isEditMode, saveEdit }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { goBack } = useBackNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(id);

  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteNote(taskToDelete));
    navigate("/diary");
    setIsModalOpen(false);
  };

  const handleEditMode = () => {
    if (isEditMode) {
      saveEdit();
      goBack();
      return;
    }
    navigate(`/diary/${id}/edit`);
  };

  return (
    <div className={s.root}>
      <DateUI date={date} />
      <div className={s.modify}>
        <Button
          size="icon"
          variant="ghostMuted"
          animation="scale"
          type="button"
          onClick={() => handleDeleteClick(id)}
        >
          <FeatherIcon icon="trash-2" size={22} />
        </Button>
        <Button
          size="icon"
          variant="ghostMuted"
          animation="scale"
          onClick={handleEditMode}
        >
          <FeatherIcon icon={isEditMode ? "check" : "edit-2"} size={22} />
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
