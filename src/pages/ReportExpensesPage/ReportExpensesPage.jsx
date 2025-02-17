import { useState, useEffect } from "react";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { BalanceComponent } from "../../components/Balance/Balance";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { ExpensesDetailedReport } from "../../components/ExpensesDetailedReport/ExpensesDetailedReport";
import { ExpensesChart } from "../../components/ExpensesChart/ExpensesChart";
import css from "./ReportExpensesPage.module.css";

const ReportExpensesPage = () => {
  const [date, setDate] = useState(new Date());
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        // const response = await fetch(`http://localhost:3001/transaction/period-data?date=${formattedDate}`, {
        const response = await fetch(`http://localhost:3001/transaction?date=${formattedDate}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer token`,
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Unknown error");
        }

        const data = await response.json();
        const transaction = data[0]; //to delete
        console.log({ transaction })
        setTotalExpenses(transaction.expenses.total || 0); //need to change from transaction to data
        setTotalIncome(transaction.incomes.total || 0);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
        setTotalExpenses(0);
        setTotalIncome(0);
      }
    };

    fetchTransactionData();
  }, [date]);

  return (
    <div className={css["reports-page-main-container"]}>
      <div className={css["reports-page-first-container"]}>
        <MainPageButton />
        <BalanceComponent />
        <CurrentPeriodButton date={date} setDate={setDate} />
      </div>

      <div className={css["reports-page-second-container"]}>
        <IncomeExpensesComparison expenses={totalExpenses} income={totalIncome} />
      </div>
      <div className={css["reports-page-third-container"]}>
        <ExpensesDetailedReport />
      </div>
      <div className={css["reports-page-fourth-container"]}>
        <ExpensesChart />
      </div>
    </div>
  );
};

export default ReportExpensesPage;