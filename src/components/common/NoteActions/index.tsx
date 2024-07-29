import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import { Button } from '@/components/common/Button';
import { DateUI } from '@/components/common/DateUI';
import { ModalForDeletion } from '@/components/common/ModalForDeletion';
import { ROUTES } from '@/constants';
import { useBackNavigation } from '@/hook/useBackNavigation';
import { useDeleteNote } from '@/hook/useDeleteNote';

import s from './NoteActions.module.scss';

interface NoteActionsProps {
  id: Note['id'];
  date: Note['date'];
  isEditMode?: boolean;
  saveEdit?: () => void;
  resetChanges?: () => void;
}

export const NoteActions: React.FC<NoteActionsProps> = ({
  id,
  date,
  isEditMode = false,
  saveEdit,
  resetChanges,
}) => {
  const navigate = useNavigate();
  const { goBack } = useBackNavigation();
  const { isModalOpen, handleDeleteClick, handleConfirmDelete, closeModal } =
    useDeleteNote(id);

  const handleEditMode = () => {
    if (isEditMode && saveEdit) {
      saveEdit();
      goBack();
      return;
    }
    navigate(ROUTES.DIARY_EDIT(id));
  };

  const resetChange = () => {
    if (resetChanges) {
      resetChanges();
    }
    goBack();
  };

  return (
    <div className={s.root}>
      <DateUI date={date} />
      <div className={s.modify}>
        <Button
          type="button"
          size="icon"
          variant="ghostMuted"
          animation="scale"
          onClick={() => handleDeleteClick(id)}
          aria-label="Удалить запись"
          title="Удалить запись"
        >
          <FeatherIcon icon="trash-2" size={22} />
        </Button>
        {isEditMode && (
          <Button
            type="button"
            size="icon"
            variant="ghostMuted"
            animation="scale"
            onClick={resetChange}
            aria-label="Сбросить изменения"
            title="Сбросить изменения"
          >
            <FeatherIcon icon="x" size={22} />
          </Button>
        )}
        <Button
          type="button"
          size="icon"
          variant="ghostMuted"
          animation="scale"
          onClick={handleEditMode}
          aria-label={isEditMode ? 'Сохранить' : 'Редактировать'}
          title={isEditMode ? 'Сохранить' : 'Редактировать'}
        >
          <FeatherIcon icon={isEditMode ? 'check' : 'edit-2'} size={22} />
        </Button>
      </div>
      <ModalForDeletion
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
