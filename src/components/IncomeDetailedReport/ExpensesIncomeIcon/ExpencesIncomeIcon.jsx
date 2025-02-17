import PropTypes from "prop-types";
import css from "./ExpencesIncomeIcon.module.css";
import icon from "../../../assets/svgs-sprite.svg";



export const ExpensesIncomeIcon = ({ name, iconName, amount }) => {

  const formatCurrency = (value) => {
    const numericValue = typeof value === "number" ? value : parseFloat(value);
    return numericValue.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(",", ".");
  };

  const splitName = name.split(" ");

  return (
    <div className={css["reports-icon-main-container"]}>
      <p>{formatCurrency(amount)}</p>
      <svg
        className={css["reports-icon"]}>
        <use href={`${icon}#${iconName}`}></use>
      </svg>
      {splitName.length > 1 ? (
        <>
          <p>{splitName[0]}</p>
          <p>{splitName[1]}</p>
        </>
      ) : (
        <p>{name}</p>
      )}
    </div >
  );
};

ExpensesIncomeIcon.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};