import css from "./InputIncomePage.module.css";
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
            <Calculator isExpense={false}/>
            <div className={css.mainContainer}>
            <HistorySpreadsheet isExpense={false}/>
            <SummaryList isExpense={false}/>
            </div>
        </div>
    );
}

export default InputExpensesPage;