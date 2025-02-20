import { useState, useEffect } from "react";
import styles from "./HistorySpreadsheet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserTransactions } from "../../redux/slices/userSlice";
import { deleteTransaction } from "../../redux/controllers/userController";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";

const HistorySpreadsheet = ({ isExpense }) => {
  const [records, setRecords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const transactions = useSelector(selectUserTransactions);

  useEffect(() => {
    setRecords(transactions);
  }, [transactions]);

  const handleDelete = (id) => {
    setSelectedId(id); // Zapisujemy ID do usunięcia
    setShowModal(true); // Otwieramy modal
  };

  const confirmDelete = () => {
    if (!selectedId) return;

    dispatch(deleteTransaction(selectedId));

    const newRecords = records.filter((record) => record._id !== selectedId);
    setRecords(newRecords);

    setShowModal(false);
    setSelectedId(null);
  };

  // const handleDelete = (id) => {
  //   if (!window.confirm("Are you sure you want to delete this record?")) return;

  //   dispatch(deleteTransaction(id));

  //   const newRecords = [...records];
  //   const index = records.findIndex((record) => record._id === id);
  //   if (index !== -1) {
  //     newRecords.splice(index, 1);
  //   }
  //   setRecords(newRecords);
  // };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeaderWrapper}>
            <th className={styles.tableHeader}>DATE</th>
            <th className={styles.tableHeader}>DESCRIPTION</th>
            <th className={styles.tableHeader}>CATEGORY</th>
            <th className={styles.tableHeader}>SUM</th>
            <th className={styles.tableHeader}></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {records.map((record) => {
            if (isExpense) {
              if (
                record.category !== "Salary" &&
                record.category !== "Additional income"
              ) {
                return (
                  <tr key={record._id} className={styles.row}>
                    <td className={`${styles.date}`}>{record.date}</td>
                    <td className={`${styles.desc}`}>{record.description}</td>
                    <td className={`${styles.category}`}>{record.category}</td>
                    <td className={`${styles.sum}`}>-{record.amount} $</td>
                    <td className={`${styles.bin}`}>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(record._id)}
                      >
                        <svg
                          className={styles.deleteBtn}
                          width="18"
                          height="18"
                        >
                          <use href="/src/assets/svgs-sprite.svg#icon-bin" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              }
            } else if (!isExpense) {
              if (
                record.category == "Salary" ||
                record.category == "Additional income"
              ) {
                return (
                  <tr key={record._id} className={styles.row}>
                    <td className={`${styles.date}`}>{record.date}</td>
                    <td className={`${styles.desc}`}>{record.description}</td>
                    <td className={`${styles.category}`}>{record.category}</td>
                    <td className={`${styles.sumIncome}`}>{record.amount} $</td>
                    <td className={`${styles.bin}`}>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(record._id)}
                      >
                        <svg
                          className={styles.deleteBtn}
                          width="18"
                          height="18"
                        >
                          <use href="/src/assets/svgs-sprite.svg#icon-bin" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              }
            }
          })}
          {records.length === 0 && (
            <tr>
              <td colSpan="5" className={styles.emptyMessage}>
                There are no transactions yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this record?"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default HistorySpreadsheet;
