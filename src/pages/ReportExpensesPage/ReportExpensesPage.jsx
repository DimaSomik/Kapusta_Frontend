import { useState, useEffect } from "react";
import Main from "../../components/Navigation/Main";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { BalanceComponent } from "../../components/Balance/Balance";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { ExpensesDetailedReport } from "../../components/ExpensesDetailedReport/ExpensesDetailedReport";
import { ExpensesChart } from "../../components/ExpensesChart/ExpensesChart";
import css from "./ReportExpensesPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataForPeriod } from "../../redux/controllers/userController";
import {
  selectUserCurrentExpenses,
  selectUserCurrentIncome,
  selectUserExpenseData,
} from "../../redux/slices/userSlice";
import { selectAccessToken } from "../../redux/slices/authSlice";
import sprite from "../../assets/svgs-sprite.svg";

const ReportExpensesPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const dispatch = useDispatch();
  const currentIncome = useSelector(selectUserCurrentIncome);
  const currentExpenses = useSelector(selectUserCurrentExpenses);
  const expenseData = useSelector(selectUserExpenseData);
  const token = useSelector(selectAccessToken);

  const getSelectedExpenses = (selectedIcon, expensesData) => {
    if (selectedIcon && expensesData[selectedIcon]) {
      const selectedExpense = { ...expensesData[selectedIcon] };
      delete selectedExpense.total;
      return selectedExpense;
    }
    return null;
  };

  useEffect(() => {
    if (token)
      dispatch(
        getDataForPeriod(
          String(date.getFullYear()) +
            "-" +
            String(date.getMonth() + 1).padStart(2, "0")
        )
      );

    if (expenseData) {
      const selected = getSelectedExpenses(selectedIcon, expenseData);
      setSelectedExpense(selected);
    }
  }, [selectedIcon, date, token]);

  return (
    <>
      <Main></Main>
      <div className={css.background}>
        <svg className={css.kapustas}>
          <use href={`${sprite}#icon-upper-kapustas`}></use>
        </svg>
        <svg className={css.top}>
          <use href={`${sprite}#icon-two-kapustas`}></use>
        </svg>
        <svg className={css.bottom}>
          <use href={`${sprite}#icon-two-kapustas`}></use>
        </svg>
      </div>
      <div className={css["reports-page-main-container"]}>
        <div className={css["reports-page-first-container"]}>
          <MainPageButton />
          <BalanceComponent />
          <CurrentPeriodButton date={date} setDate={setDate} />
        </div>

        <div className={css["reports-page-second-container"]}>
          <IncomeExpensesComparison
            expenses={currentExpenses}
            income={currentIncome}
          />
        </div>
        <div className={css["reports-page-third-container"]}>
          <ExpensesDetailedReport
            transactionsData={expenseData}
            selectedIcon={selectedIcon}
            setSelectedIcon={setSelectedIcon}
          />
        </div>
        <div className={css["reports-page-fourth-container"]}>
          <ExpensesChart expenses={selectedExpense} />
        </div>
      </div>
    </>
  );
};

export default ReportExpensesPage;
