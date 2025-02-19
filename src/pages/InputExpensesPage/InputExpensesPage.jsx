import css from "./InputExpensesPage.module.css";
import Main from "../../components/Navigation/Main";
import { BalanceComponent } from "../../components/Balance/Balance";
import Calculator from "../../components/Calculator/Calculator";
import HistorySpreadsheet from "../../components/HistorySpreadsheet/HistorySpreadsheet";
import SummaryList from "../../components/SummaryList/SummaryList";

const InputExpensesPage = () => {
    return (
        <div>
            <Main />
            <BalanceComponent />
            <Calculator isExpense={true}/>
            <div className={css.mainContainer}>
            <HistorySpreadsheet isExpense={true}/>
            <SummaryList isExpense={true}/>
            </div>
        </div>
    );
}

export default InputExpensesPage;