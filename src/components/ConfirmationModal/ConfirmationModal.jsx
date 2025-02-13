import css from "./ConfirmationModal.module.css";

export const ConfirmationModal = () => {
  return (
    <div className={css.backgroundModal}>
      <div className={css.modalContent}>
        <p className={css.paragraph}>Are you sure?</p>
        <div className={css.divButton}>
          <button className={css.button}>YES</button>
          <button className={css.button}>NO</button>
        </div>
      </div>
    </div>
  );
};
