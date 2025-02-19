import PropTypes from "prop-types";
import icon from "../../../assets/svgs-sprite.svg";
import css from "./ExpensesIncomeSwitcher.module.css";



export const ExpensesIncomeSwitcher = ({ expensesIncomeText, toggleTransactionType }) => {


  return (
    <div className={css["reports-expenses-income-switcher-main-container"]}>
      <svg
        className={css["reports-expenses-income-switcher-arrow"]}
        width="7"
        height="12"
        onClick={toggleTransactionType}>
        <use href={`${icon}#icon-previous`}></use>
      </svg>
      <p className={css["reports-expenses-income-switcher-name"]}>
        {expensesIncomeText}
      </p>
      <svg
        className={css["reports-expenses-income-switcher-arrow"]}
        width="7"
        height="12"
        onClick={toggleTransactionType}>
        <use href={`${icon}#icon-next`}></use>
      </svg>
    </div>
  );
};

//PropTypes from ExpensesDetailedReport
ExpensesIncomeSwitcher.propTypes = {
  expensesIncomeText: PropTypes.string.isRequired,
  toggleTransactionType: PropTypes.func.isRequired,
};
