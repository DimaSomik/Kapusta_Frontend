import { Link } from "react-router-dom";
import styles from "../ReportsButton/ReportsButton.module.css";

function ReportsButton() {
  return (
    <>
      <Link className={styles.link} to="/transaction/expense-categories">
        Reports
        <svg className={styles.icon}>
          <use href="/src/assets/svgs-sprite.svg#icon-bar_chart" />
        </svg>
      </Link>
    </>
  );
}

export default ReportsButton;
