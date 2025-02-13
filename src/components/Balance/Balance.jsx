import React from "react";
import styles from "./balance.module.css";

const BalanceComponent = () => {
  return (
    <div className={styles.balanceContainer}>
      <span className={styles.balanceLabel}>Balance:</span>
      <div className={styles.balanceWrapper}>
        <input type="text" className={styles.balanceInput} value="00.00 $" readOnly />
        <button className={styles.confirmButton}>CONFIRM</button>
      </div>
    </div>
  );
};

export default BalanceComponent;