import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ExpensesIncomeSwitcher } from "./ExpensesIncomeSwitcher/ExpensesIncomeSwitcher";
import { ExpensesIncomeGroupIcons } from "./ExpensesIncomeGroupIcons/ExpensesIncomeGroupIcons";
import css from "./IncomeDetailedReport.module.css";

export const TRANSACTION = Object.freeze({
  EXPENSES: "Expences",
  INCOME: "Income",
});

const ROUTES = Object.freeze({
  EXPENSES: "expense-categories",
  INCOME: "income-categories",
});

export const IncomeDetailedReport = ({ transactionsData, selectedIcon, setSelectedIcon }) => {
  const location = useLocation();
  const lastSegmentPageUrl = location.pathname.split("/").filter(Boolean).pop();
  const [expensesIncomeText, setExpensesIncomeText] = useState(
    lastSegmentPageUrl === ROUTES.EXPENSES
      ? TRANSACTION.EXPENSES
      : TRANSACTION.INCOME
  );
  const navigate = useNavigate();

  useEffect(() => {
    setExpensesIncomeText(
      lastSegmentPageUrl === ROUTES.EXPENSES
        ? TRANSACTION.EXPENSES
        : TRANSACTION.INCOME
    );
  }, [lastSegmentPageUrl]);

  const toggleTransactionType = () => {
    const isExpenses = expensesIncomeText === TRANSACTION.EXPENSES;
    const newText = isExpenses ? TRANSACTION.INCOME : TRANSACTION.EXPENSES;
    const newRoute = isExpenses ? ROUTES.INCOME : ROUTES.EXPENSES;

    setExpensesIncomeText(newText);
    navigate(`/transaction/${newRoute}`);
  };


  return (
    <div className={css["reports-detailed-main-container"]}>
      <ExpensesIncomeSwitcher expensesIncomeText={expensesIncomeText}
        toggleTransactionType={toggleTransactionType} />
      <ExpensesIncomeGroupIcons transactionsData={transactionsData} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
    </div>
  );
};

IncomeDetailedReport.propTypes = {
  transactionsData: PropTypes.arrayOf(PropTypes.object),
  selectedIcon: PropTypes.string,
  setSelectedIcon: PropTypes.func.isRequired,
};