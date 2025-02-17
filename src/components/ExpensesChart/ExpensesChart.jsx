import { useState, useEffect } from "react";
import css from "./ExpensesChart.module.css";

const dataToChartExpenses = [//to delete
  { name: "Pork", amount: 1000 },
  { name: "Beef", amount: 1000 },
  { name: "Chiken", amount: 500 },
  { name: "Fish", amount: 800 },
  { name: "Panini", amount: 420 },
  { name: "Coffee", amount: 350 },
  { name: "Spaghetti", amount: 630 },
  { name: "Chocolate", amount: 700 },
  { name: "Olives", amount: 333 },
  { name: "Greensd", amount: 300 },
];

// const dataToChartIncome = [ //to delete
//   {
//     name: "My",
//     amount: "25000"
//   },
//   {
//     name: "Wife",
//     amount: "20000"
//   },
// ]

export const ExpensesChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxAmount = Math.max(...dataToChartExpenses.map((item) => item.amount));

  const formatCurrency = (value) => {
    const numericValue = typeof value === "number" ? value : parseFloat(value);
    return numericValue.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(",", ".");
  };

  return (
    <div className={css["chart-main-container"]}>
      <div className={css["chart-container"]}>

        {dataToChartExpenses.map((item, index) => (
          <div
            key={index}
            className={css["bar-container"]}
            style={{
              width: isMobile && `${(item.amount / maxAmount) * 100}%`,
              height: !isMobile && `${(item.amount / maxAmount) * 100}% `,
            }}
          >
            <span className={css["label"]} >
              {item.name}
            </span>
            <span className={css["amount"]}>{formatCurrency(item.amount)} $</span>
          </div>
        ))}
      </div>
    </div >
  );
};


