import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import css from "./IncomeChart.module.css";

export const IncomeChart = ({ income }) => {
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
  if (income && Object.keys(income).length > 0) {
    maxAmount = Math.max(...Object.values(income));
  }

  return (
    <div className={css["chart-main-container"]}>
      <div className={css["chart-container"]}>
        {income && Object.keys(income).length > 0 &&
          Object.entries(income).map(([name, amount], index) => (
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

IncomeChart.propTypes = {
  income: PropTypes.objectOf(PropTypes.number).isRequired,
};