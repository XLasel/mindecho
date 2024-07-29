import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FeatherIcon from 'feather-icons-react';

import { Button } from '@/components/common/Button';

import s from './ModalForConfirmation.module.scss';

interface ModalForConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  buttonConfirmStyle?: 'default' | 'destructive';
  confirmButtonText?: string;
  cancelButtonText?: string;
  children?: React.ReactNode;
}

export const ModalForConfirmation: React.FC<ModalForConfirmationProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  buttonConfirmStyle = 'default',
  confirmButtonText = 'Подтвердить',
  cancelButtonText = 'Отмена',
  children,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={s.root}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={s.container}>
        <header className={s.header}>
          <h4 id="modal-title">{title}</h4>
          <Button
            type="button"
            variant="ghostBlack"
            className="px-2"
            onClick={onClose}
            aria-label="Закрыть"
            title="Закрыть"
          >
            <FeatherIcon icon="x" />
          </Button>
        </header>
        <p id="modal-description">{message}</p>
        {children}
        <div className={s.actions}>
          <Button variant="ghostBlack" onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button variant={buttonConfirmStyle} onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>,
    portalRoot
  );
};
