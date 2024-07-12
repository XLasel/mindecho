import React from "react";

import { ModalForConfirmation } from "@/components/common/ModalForConfirmation";

interface ModalForDeletionProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ModalForDeletion: React.FC<ModalForDeletionProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <ModalForConfirmation
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Подтверждение"
      message="Вы уверены, что хотите удалить эту запись?"
      buttonConfirmStyle="destructive"
      confirmButtonText="Удалить"
      cancelButtonText="Отмена"
    />
  );
};
