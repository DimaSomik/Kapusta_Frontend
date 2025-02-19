import { useState, useEffect } from "react";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { BalanceComponent } from "../../components/Balance/Balance";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { IncomeDetailedReport } from "../../components/IncomeDetailedReport/IncomeDetailedReport";
import { IncomeChart } from "../../components/IncomeChart/IncomeChart";
import css from "./ReportIncomePage.module.css";

const dataFromDB = //format danych z backendu - do usunięcia
{
  "incomes": {
    "total": 18000,
    "incomesData": {
      "Salary": {
        "total": 12000,
        "Awans": 5000,
        "Pensja": 7000
      },
      "Add. Income": {
        "total": 6000,
        "Umowa": 4500,
        "Wynajem": 1500
      }
    }
  },
  "expenses": {
    "total": 5200,
    "expensesData": {
      "Transport": {
        "total": 4000,
        "Wyjazd": 3500,
        "Przyjazd": 500
      },
      "Alcohol": {
        "total": 1200,
        "Piwo": 150,
        "Drink": 1050
      }
    }
  }
}

const ReportIncomePage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedIncome, setSelectedIncome] = useState(null);

  const getSelectedExpenses = (selectedIcon, incomesData) => {
    if (selectedIcon && incomesData[selectedIcon]) {
      const selectedIncome = { ...incomesData[selectedIcon] };
      delete selectedIncome.total;
      return selectedIncome;
    }
    return null;
  };

  useEffect(() => {
    if (dataFromDB && dataFromDB.incomes.incomesData) {
      const selected = getSelectedExpenses(selectedIcon, dataFromDB.incomes.incomesData);

      setSelectedIncome(selected);
      console.log("Income Zaznaczona ikona:", selectedIcon, "Dane:", selected, "dataFromDB: ", dataFromDB.incomes.incomesData);
    }
  }, [selectedIcon]);


  return (
    <div className={css["reports-page-main-container"]}>
      <div className={css["reports-page-first-container"]}>
        <MainPageButton />
        <BalanceComponent />
        <CurrentPeriodButton date={date} setDate={setDate} />
      </div>

      <div className={css["reports-page-second-container"]}>
        <IncomeExpensesComparison expenses={dataFromDB.expenses.total} income={dataFromDB.incomes.total} />
      </div>
      <div className={css["reports-page-third-container"]}>
        <IncomeDetailedReport transactionsData={dataFromDB} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      </div>
      <div className={css["reports-page-fourth-container"]}>
        <IncomeChart income={selectedIncome} />
      </div>
    </div>
  );
};

export default ReportIncomePage;