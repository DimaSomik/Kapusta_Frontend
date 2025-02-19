import React from "react";
import PropTypes from "prop-types";
import { ExpensesIncomeIcon } from "../ExpensesIncomeIcon/ExpencesIncomeIcon";
import css from "./ExpensesIncomeGroupIcons.module.css";

const dataToGroupIconsIncome = [
  {
    name: "Salary",
    iconName: "icon-icon-additional-income",
  },
  {
    name: "Add. Income",
    iconName: "icon-icon-salary",
  },
]

export const ExpensesIncomeGroupIcons = ({ transactionsData, selectedIcon, setSelectedIcon }) => {

  const dataIcons = mapExpensesData(
    dataToGroupIconsIncome,
    transactionsData.incomes.incomesData
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

function mapExpensesData(dataToGroupIcons, dataFromDB) {
  const expensesData = dataFromDB || {};

  return dataToGroupIcons.map(({ name, iconName }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, "");

    const matchedExpense = Object.keys(expensesData).find((expenseName) => {
      const normalizedExpenseName = expenseName.toLowerCase().replace(/\s+/g, "");
      return normalizedExpenseName === normalizedName;
    });

    return {
      name,
      iconName,
      amount: matchedExpense ? expensesData[matchedExpense].total : 0,
    };
  });
}

//PropTypes from ExpensesDetailedReport
ExpensesIncomeGroupIcons.propTypes = {
  transactionsData: PropTypes.arrayOf(PropTypes.object),
  selectedIcon: PropTypes.string,
  setSelectedIcon: PropTypes.func.isRequired,
};


// const dataToGroupIconsIncome = [
//   {
//     nameDb: "Salary",
//     name: "Salary",
//     iconName: "icon-icon-additional-income",
//   },
//   {
//     nameDb: "Add.Income",
//     name: "Add. Income",
//     iconName: "icon-icon-salary",
//   },
// ]
// export const ExpensesIncomeGroupIcons = ({ transactionsData, selectedIcon, setSelectedIcon }) => {

//   const dataIcons = mapExpensesData(
//     dataToGroupIconsIncome,
//     transactionsData.incomes
//   );

//   const handleIconClick = (name) => {
//     setSelectedIcon(name);
//   };
//   console.log("Inc.GropupIc", transactionsData)
//   console.log("transactionsData", transactionsData.incomes.incomesData)
//   return (
//     <div className={css["reports-group-icons-main-container"]}>
//       {dataIcons.map(({ name, iconName, amount, nameDb }, index) => (
//         <React.Fragment key={name}>
//           <ExpensesIncomeIcon
//             name={name}
//             iconName={iconName}
//             amount={amount}
//             isSelected={selectedIcon === nameDb}
//             onClick={() => handleIconClick(nameDb)}
//           />
//           {(index + 1) % 3 === 0 && (
//             <hr className={css["reports-icon-vector"]} />
//           )}
//         </React.Fragment>
//       ))}
//       {dataIcons.length % 3 !== 0 && (
//         <hr className={css["reports-icon-vector"]} />
//       )}
//     </div>
//   );
// };


// function mapExpensesData(dataToGroupIconsIncome, dataFromDB) {
//   const { incomesData } = dataFromDB || {}; // Wyciągamy dane dochodów z bazy (domyślnie pusty obiekt)
//   if (!incomesData) {
//     return dataToGroupIconsIncome.map(({ name, iconName }) => ({
//       name,
//       iconName,
//       amount: 0,
//       nameDb: "",
//     }));
//   }

//   return dataToGroupIconsIncome.map(({ nameDb, name, iconName }) => {
//     const matchedIncome = incomesData[nameDb];

//     return {
//       name,
//       iconName,
//       amount: matchedIncome ? matchedIncome.total : 0,
//       nameDb,
//     };
//   });
// }



