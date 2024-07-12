import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";

import { deleteNote } from "@/redux/noteSlice";

export const useDeleteNote = (
  initialId?: string,
  handleDelete?: () => void,
  shouldNavigate: boolean = true,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(initialId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = (id?: string) => {
    if (id) {
      setTaskToDelete(id);
    }
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (handleDelete) {
      handleDelete();
    } else if (taskToDelete) {
      dispatch(deleteNote(taskToDelete));
    }
    if (shouldNavigate) {
      navigate("/diary");
    }
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleDeleteClick,
    handleConfirmDelete,
    closeModal: () => setIsModalOpen(false),
  };
};
