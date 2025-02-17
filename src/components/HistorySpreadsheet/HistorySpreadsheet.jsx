import { useState, useEffect } from "react";
import styles from "./HistorySpreadsheet.module.css";

const API_URL = "https://..."; // Podmienić na właściwy URL backendu

const HistorySpreadsheet = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error("Błąd pobierania danych", err));
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Czy na pewno chcesz usunąć ten wiersz?")) return;

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Błąd podczas usuwania");

        setRecords((prevRecords) =>
          prevRecords.filter((record) => record.id !== id)
        );
      })
      .catch((err) => console.error("Błąd:", err));
  };

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
          {records.map((record) => (
            <tr key={record.id} className={styles.row}>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td>{record.category}</td>
              <td className={styles.sum}>{record.sum} UAH</td>
              <td>
                <button onClick={() => handleDelete(record.id)}>
                  <svg className={styles.deleteBtn} width="18" height="18">
                    <use href="/src/assets/svgs-sprite.svg#icon-bin" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
          {records.length === 0 && (
            <tr>
              <td colSpan="5" className={styles.emptyMessage}>
                Brak danych
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySpreadsheet;
