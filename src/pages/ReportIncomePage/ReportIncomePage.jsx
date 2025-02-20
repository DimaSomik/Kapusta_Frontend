import { useState, useEffect } from "react";
import Main from "../../components/Navigation/Main";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { BalanceComponent } from "../../components/Balance/Balance";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { IncomeDetailedReport } from "../../components/IncomeDetailedReport/IncomeDetailedReport";
import { IncomeChart } from "../../components/IncomeChart/IncomeChart";
import css from "./ReportIncomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataForPeriod } from "../../redux/controllers/userController";
import { selectUserCurrentExpenses, selectUserCurrentIncome, selectUserIncomeData } from "../../redux/slices/userSlice";
import { selectAccessToken } from "../../redux/slices/authSlice";

const ReportIncomePage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const dispatch = useDispatch();
  const currentIncome = useSelector(selectUserCurrentIncome);
  const currentExpenses = useSelector(selectUserCurrentExpenses);
  const incomeData = useSelector(selectUserIncomeData);
  const token = useSelector(selectAccessToken);

  const getSelectedExpenses = (selectedIcon, incomesData) => {
    if (selectedIcon && incomesData[selectedIcon]) {
      const selectedIncome = { ...incomesData[selectedIcon] };
      delete selectedIncome.total;
      return selectedIncome;
    }
    return null;
  };

  useEffect(() => {
    if (token) dispatch(getDataForPeriod(String(date.getFullYear()) + "-" + String(date.getMonth() + 1).padStart(2, "0")));

    if (incomeData) {
      const selected = getSelectedExpenses(selectedIcon, incomeData);

      setSelectedIncome(selected);
    }
  }, [selectedIcon, date, token]);


  return (
    <>
    <Main></Main>
    <div className={css["reports-page-main-container"]}>
      <div className={css["reports-page-first-container"]}>
        <MainPageButton />
        <BalanceComponent />
        <CurrentPeriodButton date={date} setDate={setDate} />
      </div>

      <div className={css["reports-page-second-container"]}>
        <IncomeExpensesComparison expenses={currentExpenses} income={currentIncome} />
      </div>
      <div className={css["reports-page-third-container"]}>
        <IncomeDetailedReport transactionsData={incomeData} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      </div>
      <div className={css["reports-page-fourth-container"]}>
        <IncomeChart income={selectedIncome} />
      </div>
    </div>
    </>
  );
};

export default ReportIncomePage;