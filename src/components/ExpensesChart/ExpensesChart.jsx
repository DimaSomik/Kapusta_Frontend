import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import css from "./ExpensesChart.module.css";

export const ExpensesChart = ({ expenses }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const formatCurrency = (value) => {
    const numericValue = typeof value === "number" ? value : parseFloat(value);
    return numericValue.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace(",", ".");
  };

  let maxAmount = 0;
  if (expenses && Object.keys(expenses).length > 0) {
    maxAmount = Math.max(...Object.values(expenses));
  }

  return (
    <div className={css["chart-main-container"]}>
      <div className={css["chart-container"]}>
        {expenses && Object.keys(expenses).length > 0 &&
          Object.entries(expenses)
            .sort(([, amountA], [, amountB]) => amountB - amountA)
            .map(([name, amount], index) => (
              <div
                key={index}
                className={css["bar-container"]}
                style={{
                  width: isMobile ? `${(amount / maxAmount) * 100}%` : undefined,
                  height: !isMobile ? `${(amount / maxAmount) * 100}%` : undefined,
                }}
              >
                <span className={css["label"]}>{name}</span>
                <span className={css["amount"]}>{formatCurrency(amount)} $</span>
              </div>
            ))
        }
      </div>
    </div>
  );
};
ExpensesChart.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.number).isRequired,
};