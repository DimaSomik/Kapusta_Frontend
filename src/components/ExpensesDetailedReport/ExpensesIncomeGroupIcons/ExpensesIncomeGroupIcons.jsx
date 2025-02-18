import React from "react";
import PropTypes from "prop-types";
import { ExpensesIncomeIcon } from "../ExpensesIncomeIcon/ExpencesIncomeIcon";
import css from "./ExpensesIncomeGroupIcons.module.css";

const dataToGroupIconsExpenses = [
  {
    name: "Products",
    iconName: "icon-icon-products",
  },
  {
    name: "Alcohol",
    iconName: "icon-icon-alcohol",
  },
  {
    name: "Entertainment",
    iconName: "icon-icon-entertainment",
  },
  {
    name: "Health",
    iconName: "icon-icon-health",
  },
  {
    name: "Transport",
    iconName: "icon-icon-transport",
  },
  {
    name: "Housing",
    iconName: "icon-icon-housing",
  },
  {
    name: "Technique",
    iconName: "icon-icon-technique",
  },
  {
    name: "Communal, Communnication",
    iconName: "icon-icon-communal",
  },
  {
    name: "Sports, Hobbies",
    iconName: "icon-icon-sport",
  },
  {
    name: "Education",
    iconName: "icon-icon-education",
  },

  {
    name: "Other",
    iconName: "icon-icon-other",
  },
];

export const ExpensesIncomeGroupIcons = ({ transactionsData, selectedIcon, setSelectedIcon }) => {

  const dataIcons = mapExpensesData(
    dataToGroupIconsExpenses,
    transactionsData.expenses.expensesData
  );

  const handleIconClick = (name) => {
    setSelectedIcon(name);
  };

  return (
    <div className={css["reports-group-icons-main-container"]}>
      {dataIcons.map(({ name, iconName, amount }, index) => (
        <React.Fragment key={name}>
          <ExpensesIncomeIcon
            name={name}
            iconName={iconName}
            amount={amount}
            isSelected={selectedIcon === name}
            onClick={() => handleIconClick(name)}
          />
          {(index + 1) % 3 === 0 && (
            <hr className={css["reports-icon-vector"]} />
          )}
        </React.Fragment>
      ))}
      {dataIcons.length % 3 !== 0 && (
        <hr className={css["reports-icon-vector"]} />
      )}
    </div>
  );
};

function mapExpensesData(dataToGroupIconsExpenses, dataFromDB) {
  const expensesData = dataFromDB || {};

  return dataToGroupIconsExpenses.map(({ name, iconName }) => {
    const normalizedName = name.toLowerCase().replace(/\s/g, "");
    const matchedExpense = Object.keys(expensesData).find(
      (expenseName) => expenseName.toLowerCase().trim() === normalizedName
    );

    return {
      name,
      iconName,
      amount: matchedExpense ? expensesData[matchedExpense].total : 0,
    };
  });
}

ExpensesIncomeGroupIcons.propTypes = {
  transactionsData: PropTypes.arrayOf(PropTypes.object),
  selectedIcon: PropTypes.string,
  setSelectedIcon: PropTypes.func.isRequired,
};



