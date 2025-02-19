import { useEffect, useState } from "react";
import styles from "./balance.module.css";
// import { BalanceModal } from "../BalanceModal/BalanceModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBalance } from "../../redux/controllers/userController";
import { selectUserBalance } from "../../redux/slices/userSlice";

export const BalanceComponent = () => { 
  const userBalance = useSelector(selectUserBalance);
  const dispatch = useDispatch();
  const [newBalance, setNewBalance] = useState(userBalance);

  useEffect(() => {
    const modal = document.querySelector("#modal");
    setNewBalance(userBalance)

    if (userBalance !== 0) {
      modal.style.display = "none";
    }
  }, [userBalance]);

  const handleSubmit = () => {
    dispatch(updateBalance({
      newBalance: Number(newBalance)
    }))
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
            onChange={(e) => {setNewBalance(e.target.value)}}
          />
          <div id="modal" className={styles.balanceModal}>
            {/* <BalanceModal /> */}
          </div>
          <button className={styles.confirmButton} onClick={handleSubmit}>CONFIRM</button>
        </div>
      </div>
    </>
  );
};
