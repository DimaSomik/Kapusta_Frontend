import styles from "./SummaryList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses, getIncome } from "../../redux/controllers/userController";
import { selectAccessToken } from "../../redux/slices/authSlice";
import { selectUserMonthlyStats } from "../../redux/slices/userSlice";
import { selectUserTransactions } from "../../redux/slices/userSlice";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SummaryList = ({ isExpense }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const data = useSelector(selectUserMonthlyStats);
  const transactions = useSelector(selectUserTransactions);
  const tableData = [];

  useEffect(() => {
    if (token && isExpense) {
      dispatch(getExpenses());
    } else if (token && !isExpense) {
      dispatch(getIncome());
    }
  }, [token, transactions]) 

  for (const sum in data) {
    tableData.push(data[sum]);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>Summary</div>
      <table>
        <tbody>
          {months.map((month, index) => {
            if (tableData[index] !== "N/A" && data) {
              return <tr key={month}>
                        <td>{month}</td>
                        <td>{tableData[index]}</td>
                     </tr>
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryList;
