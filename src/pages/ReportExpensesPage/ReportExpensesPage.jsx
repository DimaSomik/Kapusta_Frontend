import { useState, useEffect } from "react";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { BalanceComponent } from "../../components/Balance/Balance";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { ExpensesDetailedReport } from "../../components/ExpensesDetailedReport/ExpensesDetailedReport";
import { ExpensesChart } from "../../components/ExpensesChart/ExpensesChart";
import css from "./ReportExpensesPage.module.css";

const dataFromDB =
  //format danych z backendu - do usunięcia
  {
    incomes: {
      total: 18000,
      incomesData: {
        Salary: {
          total: 12000,
          Awans: 5000,
          Pensja: 7000,
        },
        "Add. Income": {
          total: 6000,
          Umowa: 4500,
          Wynajem: 1500,
        },
      },
    },
    expenses: {
      total: 5200,
      expensesData: {
        Transport: {
          total: 4000,
          Wyjazd: 3500,
          Przyjazd: 500,
        },
        Alcohol: {
          total: 1200,
          Piwo: 150,
          Drink: 1050,
        },
      },
    },
  };

const ReportExpensesPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const getSelectedExpenses = (selectedIcon, expensesData) => {
    if (selectedIcon && expensesData[selectedIcon]) {
      const selectedExpense = { ...expensesData[selectedIcon] };
      delete selectedExpense.total;
      return selectedExpense;
    }
    return null;
  };

  useEffect(() => {
    if (dataFromDB && dataFromDB.expenses.expensesData) {
      const selected = getSelectedExpenses(
        selectedIcon,
        dataFromDB.expenses.expensesData
      );
      setSelectedExpense(selected);
      console.log("Zaznaczona ikona:", selectedIcon, "Dane:", selected);
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
        <IncomeExpensesComparison
          expenses={dataFromDB.expenses.total}
          income={dataFromDB.incomes.total}
        />
      </div>
      <div className={css["reports-page-third-container"]}>
        <ExpensesDetailedReport
          transactionsData={dataFromDB}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
      </div>
      <div className={css["reports-page-fourth-container"]}>
        <ExpensesChart expenses={selectedExpense} />
      </div>
    </div>
  );
};

export default ReportExpensesPage;
