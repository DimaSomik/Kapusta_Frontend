import css from "./InputExpensesPage.module.css";
import Main from "../../components/Navigation/Main";
import { BalanceComponent } from "../../components/Balance/Balance";
import Calculator from "../../components/Calculator/Calculator";
import HistorySpreadsheet from "../../components/HistorySpreadsheet/HistorySpreadsheet";
import SummaryList from "../../components/SummaryList/SummaryList";

const InputExpensesPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.background}></div>
      <Main />
      <BalanceComponent />
      <div className={css.wrapper}>
        <Calculator isExpense={true} />

        <HistorySpreadsheet isExpense={true} />
      </div>
      <SummaryList isExpense={true} />
    </div>
  );
};

export default InputExpensesPage;
