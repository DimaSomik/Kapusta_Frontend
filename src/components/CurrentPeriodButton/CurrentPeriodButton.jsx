import PropTypes from "prop-types";
import icon from "../../assets/svgs-sprite.svg";
import css from "./CurrentPeriodButton.module.css";

export const CurrentPeriodButton = ({ date, setDate }) => {

  const handlePrevMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  const formattedDate = date.toLocaleString("en-US", { month: "long", year: "numeric" });

  return (
    <div className={css["reports-calendar-month-container"]}>
      <p className={css["reports-calendar-month-text"]}>Current period:</p>
      <div className={css["reports-calendar-month-date-container"]}>
        <svg className={css["reports-calendar-month-arrow"]} width="7" height="12" onClick={handlePrevMonth}>
          <use href={`${icon}#icon-previous`} ></use>
        </svg>
        <p className={css["reports-calendar-month-name"]}>{formattedDate}</p>
        <svg className={css["reports-calendar-month-arrow"]} width="7" height="12" onClick={handleNextMonth}>
          <use href={`${icon}#icon-next`}></use>
        </svg>
      </div>
    </div>
  );
};

//PropTypes from ReportPage
CurrentPeriodButton.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};