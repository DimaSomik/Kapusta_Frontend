import PropTypes from "prop-types";
import { ExpensesIncomeIcon } from "../ExpensesIncomeIcon/ExpencesIncomeIcon";
import { TRANSACTION } from "../IncomeDetailedReport";
import css from "./ExpensesIncomeGroupIcons.module.css";

const dataToGroupIconsExpenses = [ //to delete
  {
    name: "Products",
    iconName: "icon-icon-products",
    amount: "5000"
  },
  {
    name: "Alcohol",
    iconName: "icon-icon-alcohol",
    amount: "3000"
  },
  {
    name: "Entertainment",
    iconName: "icon-icon-entertainment",
    amount: "2400"
  },
  {
    name: "Health",
    iconName: "icon-icon-health",
    amount: "2200"
  },
  {
    name: "Transport",
    iconName: "icon-icon-transport",
    amount: "2000"
  },
  {
    name: "Housing",
    iconName: "icon-icon-housing",
    amount: "1800"
  },
  {
    name: "Technique",
    iconName: "icon-icon-technique",
    amount: "1500"
  },
  {
    name: "Communal, Communnication",
    iconName: "icon-icon-communal",
    amount: "900"
  },
  {
    name: "Sports, Hobbies",
    iconName: "icon-icon-sport",
    amount: "800"
  },
  {
    name: "Education",
    iconName: "icon-icon-education",
    amount: "800"
  },

  {
    name: "Other",
    iconName: "icon-icon-other",
    amount: "200"
  },
]

const dataToGroupIconsIncome = [ //to delete
  {
    name: "Salary",
    iconName: "icon-icon-additional-income",
    amount: "455000"
  },
  {
    name: "Add. Income",
    iconName: "icon-icon-salary",
    amount: "1500"
  },
]

export const ExpensesIncomeGroupIcons = ({ expensesIncomeText }) => {
  const selectedData =
    expensesIncomeText === TRANSACTION.EXPENSES ? dataToGroupIconsExpenses : dataToGroupIconsIncome; //to change to data from the server or props

  return (
    <div className={css["reports-group-icons-main-container"]}>
      {selectedData.map(({ name, iconName, amount }) => (
        <ExpensesIncomeIcon key={name} name={name} iconName={iconName} amount={amount} />
      ))}
    </div>
  );
};

//PropTypes from ExpensesDetailedReport
ExpensesIncomeGroupIcons.propTypes = {
  expensesIncomeText: PropTypes.string.isRequired,
}; 