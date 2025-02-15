import styles from "./HistorySpreadsheet.module.css";
import sprite from "../../assets/svgs-sprite.svg";

const HistorySpreadsheet = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>DATE</th>
            <th className={styles.tableHeader}>DESCRIPTION</th>
            <th className={styles.tableHeader}>CATEGORY</th>
            <th className={styles.tableHeader}>SUM</th>
            <th className={styles.tableHeader}></th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td>21.11.2019</td>
            <td>Underground (Lorem ipsum dol...)</td>
            <td>Transport</td>
            <td className={styles.sum}>- 30.00 UAH.</td>
            <td>
              <button>
                <svg className={styles.deleteBtn} width="18" height="18">
                  <use href="/src/assets/svgs-sprite.svg#icon-bin" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td>21.11.2019</td>
            <td>Bananas</td>
            <td>Products</td>
            <td className={styles.sum}>- 50.00 UAH.</td>
            <td>
              <button>
                <svg className={styles.deleteBtn} width="18" height="18">
                  <use href="/src/assets/svgs-sprite.svg#icon-bin" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.sum}></td>
            <td></td>
          </tr>
          <tr className={styles.row}>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.sum}></td>
            <td></td>
          </tr>
          <tr className={styles.row}>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.sum}></td>
            <td></td>
          </tr>
          <tr className={styles.row}>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.sum}></td>
            <td></td>
          </tr>
          <tr className={styles.row}>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.sum}></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistorySpreadsheet;
