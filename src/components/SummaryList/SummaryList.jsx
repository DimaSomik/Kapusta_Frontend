import styles from "./SummaryList.module.css";

const SummaryList = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>Summary</div>
      <table>
        <tr>
          <td>November</td>
          <td>10 000.00</td>
        </tr>
        <tr>
          <td>October</td>
          <td>30 000.00</td>
        </tr>
        <tr>
          <td>September</td>
          <td>30 000.00</td>
        </tr>
        <tr>
          <td>August</td>
          <td>20 000.00</td>
        </tr>
        <tr>
          <td>July</td>
          <td>15 000.00</td>
        </tr>
        <tr>
          <td>June</td>
          <td>18 000.00</td>
        </tr>
      </table>
    </div>
  );
};

export default SummaryList;
