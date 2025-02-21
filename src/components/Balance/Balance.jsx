import { useEffect, useState } from "react";
import styles from "./Balance.module.css";
import { BalanceModal } from "../BalanceModal/BalanceModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserData, updateBalance } from "../../redux/controllers/userController";
import { selectUserBalance } from "../../redux/slices/userSlice";
import { selectAccessToken } from "../../redux/slices/authSlice";

export const BalanceComponent = () => {
  const userBalance = useSelector(selectUserBalance);
  const dispatch = useDispatch();
  const [newBalance, setNewBalance] = useState(userBalance);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData());
    };

    const modal = document.querySelector("#modal");
    setNewBalance(userBalance);

    if (userBalance !== 0) {
      modal.style.display = "none";
    }
  }, [userBalance, accessToken]);

  const handleSubmit = () => {
    dispatch(
      updateBalance({
        newBalance: Number(newBalance),
      })
    );
  };

  return (
    <>
      <div className={styles.balanceContainer}>
        <span className={styles.balanceLabel}>Balance:</span>
        <div className={styles.balanceWrapper}>
          <input
            name="balanceInput"
            id="balance"
            type="number"
            className={styles.balanceInput}
            value={newBalance}
            onChange={(e) => {
              setNewBalance(e.target.value);
            }}
          />
          <div id="modal" className={styles.balanceModal}>
            {<BalanceModal />}
          </div>
          <button className={styles.confirmButton} onClick={handleSubmit}>
            CONFIRM
          </button>
        </div>
      </div>
    </>
  );
};
