import React, { useState, useRef, useEffect } from "react";
import styles from "./Calculator.module.css";
import sprite from "../assets/svgs-sprite.svg";

const categories = [
  "Transport",
  "Products",
  "Health",
  "Alcohol",
  "Entertainment",
  "Housing",
  "Technique",
  "Communal, communication",
  "Sports, hobbies",
  "Education",
  "Other",
];

const Calculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product category");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDescription, setProductDescription] = useState("");
  const [amount, setAmount] = useState("0,00");
  const [entries, setEntries] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClear = () => {
    setProductDescription("");
    setSelectedCategory("Product category");
    setAmount("0,00");
  };

  const handleSubmit = async () => {
    if (!productDescription || selectedCategory === "Product category" || !amount) return;

    const newEntry = {
      description: productDescription,
      category: selectedCategory,
      amount,
      date: new Date().toLocaleDateString("pl-PL"),
    };

    setEntries([...entries, newEntry]);
    handleClear();

    try {
      await fetch("https://backend-apiExample.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
      <div className={styles.date}>
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-calendar`}></use>
        </svg>
        {new Date().toLocaleDateString("pl-PL")}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Product description"
          className={styles.input}
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div
          className={styles.selectWrapper}
          ref={dropdownRef}
          onMouseDown={(event) => {
            event.stopPropagation();
            setDropdownOpen((prev) => !prev);
          }}
        >
          <div className={styles.selected}>{selectedCategory}</div>
          <svg className={styles.icon}>
            <use href={`${sprite}#icon-down-arrow`}></use>
          </svg>

          {dropdownOpen && (
            <ul className={styles.dropdown}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={styles.dropdownItem}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(category);
                    setDropdownOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.amount}>
          <input
            type="text"
            value="0,00$"
            readOnly
            className={styles.amountInput}
            onKeyDown={handleKeyDown}
          />
          <svg className={styles.amountIcon}>
            <use href={`${sprite}#icon-calculator`}></use>
          </svg>
        </div>
        </div>
        </div>

          <div className={styles.buttons}>
      <button className={styles.inputButton}>INPUT</button>
      <button className={styles.clearButton}>CLEAR</button>
      </div>
      </div>
  );
};

export default Calculator;
