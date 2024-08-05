import { useLayoutEffect, useState } from 'react';

import { Button } from '@/components/common/Button';
import { ModalForDeletion } from '@/components/common/ModalForDeletion';
import { useDeleteNote } from '@/hook/useDeleteNote';
import { useAppDispatch } from '@/redux/hook';
import { updateNote } from '@/redux/noteSlice';
import { cn } from '@/utils/helpers';

import { PostCheckoutForm } from './PostCheckoutForm';

import s from './PostCheckout.module.scss';

interface PostCheckoutProps extends React.ComponentPropsWithoutRef<'section'> {
  note: Note;
}

export const PostCheckout: React.FC<PostCheckoutProps> = ({
  note,
  className,
}) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isDrity, setIsDrity] = useState(true);

  const handleDelete = () => {
    dispatch(
      updateNote({
        ...note,
        postComment: undefined,
        newDiscomfortLevel: undefined,
      })
    );
  };

  const { isModalOpen, handleDeleteClick, handleConfirmDelete, closeModal } =
    useDeleteNote(undefined, handleDelete, false);

  useLayoutEffect(() => {
    if (!!note.postComment || typeof note.newDiscomfortLevel !== 'undefined') {
      setIsDrity(false);
      return;
    }
    setIsDrity(true);
  }, [note.postComment, note.newDiscomfortLevel]);

  return (
    <section className={cn(s.root, className)}>
      <h3>Инсайт</h3>
      {!isEditing && (
        <div className={s.inner}>
          {isDrity && (
            <>
              <p>
                Теперь, взглянув на ситуацию и мысли свежим взглядом - есть ли у
                вас что-то, что вы хотите сказать себе?
              </p>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setIsEditing(true)}
              >
                Добавить
              </Button>
            </>
          )}
          {!isDrity && (
            <>
              <div className={s.section}>
                <h4>Комментарий</h4>
                <div className={s.area}>
                  {note.postComment !== '' ? <p>{note.postComment}</p> : '...'}
                </div>
              </div>
              <div className={s.layout}>
                <div className={s.section}>
                  <h4>Уровень дискомфорта</h4>
                  <div className={s.area}>
                    {note.newDiscomfortLevel
                      ? `${note.newDiscomfortLevel} / 10`
                      : 'Ощущение комфорта'}
                  </div>
                </div>
                <div className={s.buttons}>
                  <Button
                    size="sm"
                    variant="neutral"
                    onClick={() => setIsEditing(true)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDeleteClick()}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
              <ModalForDeletion
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleConfirmDelete}
              />
            </>
          )}
        </div>
      )}
      {isEditing && (
        <PostCheckoutForm note={note} editModeHandler={setIsEditing} />
      )}
    </section>
  );
};
