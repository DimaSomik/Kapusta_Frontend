import { useRef, useEffect } from "react";
import styles from "./balance.module.css";
import { BalanceModal } from "../BalanceModal/BalanceModal";

export const BalanceComponent = () => {
  const inputRef = useRef();
  useEffect(() => {
    const value = inputRef.current.value;
    const modal = document.querySelector("#modal");

    //zmienić z value inputa na faktyczną wartość z backendu
    if (value !== "00.00 $") {
      modal.style.display = "none";
    }
  });

  return (
    <>
      <div className={styles.balanceContainer}>
        <span className={styles.balanceLabel}>Balance:</span>
        <div className={styles.balanceWrapper}>
          <input
            ref={inputRef}
            type="text"
            className={styles.balanceInput}
            value="00.00 $"
            readOnly
          />
          <div id="modal" className={styles.balanceModal}>
            <BalanceModal />
          </div>
          <button className={styles.confirmButton}>CONFIRM</button>
        </div>
      </div>
    </>
  );
};

// export default BalanceComponent;
