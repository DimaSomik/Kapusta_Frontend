import PropTypes from "prop-types";
import icon from "../../assets/svgs-sprite.svg";
import css from "./IncomeExpensesComparison.module.css";

export const IncomeExpensesComparison = ({ expenses, income }) => {

  const formatCurrency = (value) => {
    return value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(",", ".");
  };

  return (
    <div className={css["reports-expenses-income-row-main-container"]}>
      <div className={css["reports-expenses-income-row-container"]}>
        <p className={css[""]}>Expenses:</p>
        <p className={`${css["reports-value"]} ${css["reports-expenses-value"]}`}>
          - {formatCurrency(expenses)} $
        </p>
      </div>
      <svg className={css["reports-icon-divider"]} >
        <use href={`${icon}#icon-divider`}></use>
      </svg>
      <div className={css["reports-expenses-income-row-container"]}>
        <p className={css[""]}>Income:</p>
        <p className={`${css["reports-value"]} ${css["reports-income-value"]}`}>
          + {formatCurrency(income)} $
        </p>
      </div>
    </div>
  );
};

//PropTypes from ReportPage
IncomeExpensesComparison.propTypes = {
  expenses: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
};