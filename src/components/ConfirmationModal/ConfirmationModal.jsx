import css from "./ConfirmationModal.module.css";

export const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={css.backgroundModal}>
      <div className={css.modalContent}>
        <p className={css.paragraph}>{message}</p>
        <div className={css.divButton}>
          <button className={css.button} onClick={onConfirm}>
            YES
          </button>
          <button className={css.button} onClick={onCancel}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};
