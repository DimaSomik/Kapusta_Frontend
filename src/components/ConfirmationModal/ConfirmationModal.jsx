import { useDispatch } from "react-redux";
import css from "./ConfirmationModal.module.css";
import { logOut } from "../../redux/controllers/authController";

export const ConfirmationModal = ({ message, onDelete, onCancel }) => {
  const dispatch = useDispatch();

  const onConfirm = () => {
    if (message === "Do you really want to leave?") {
      dispatch(logOut());
    } else if (message === "Are you sure you want to delete this record?") {
      onDelete();
    }
  };

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
