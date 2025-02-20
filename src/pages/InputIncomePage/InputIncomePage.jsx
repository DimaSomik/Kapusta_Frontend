import css from "./InputIncomePage.module.css";
import Main from "../../components/Navigation/Main";
import { BalanceComponent } from "../../components/Balance/Balance";
import Calculator from "../../components/Calculator/Calculator";
import HistorySpreadsheet from "../../components/HistorySpreadsheet/HistorySpreadsheet";
import SummaryList from "../../components/SummaryList/SummaryList";
import ReportsButton from "../../components/ReportsButton/ReportsButton";
import sprite from "../../assets/svgs-sprite.svg";

const InputExpensesPage = () => {
  //not working while resizing window
  const displayingSummaryIn = () => {
    if (window.innerWidth > 1280) {
      return <SummaryList isExpense={true} />;
    }
  };
  const displayingSummaryOut = () => {
    if (window.innerWidth < 1280) {
      return <SummaryList isExpense={true} />;
    }
  };

  return (
    <>
      <div className={css.mainContainer}>
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
        <Main />
        <div className={css.upperWrapper}>
          <div className={css.a}>
            <ReportsButton />
          </div>
          <div className={css.b}>
            <BalanceComponent />
          </div>
        </div>

        <div className={css.wrapper}>
          <Calculator isExpense={false} />
          <div className={css.desktopWrapper}>
            <HistorySpreadsheet isExpense={false} />
            {displayingSummaryIn()}
          </div>
        </div>
        {displayingSummaryOut()}
      </div>
    </>
  );
};

export default InputExpensesPage;
