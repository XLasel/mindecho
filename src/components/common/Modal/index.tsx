import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.scss";
import { Button } from "../Button";

export const Modal = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className={s.root}>
      <div className={s.container}>
        <h4>Подтверждение удаления</h4>
        <p>Вы уверены, что хотите удалить эту запись?</p>
        <div className={s.actions}>
          <Button variant="ghostBlack" onClick={onClose}>
            Отмена
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Удалить
          </Button>
        </div>
      </div>
    </div>,
    portalRoot
  );
};
