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
  const dropdownRef = useRef(null);

   const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

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


  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.date}>
          <label className={styles.dateLabel}>

        <svg className={styles.icon}>
          <use href={`${sprite}#icon-calendar`}></use>
            </svg>
            
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className={styles.hiddenDatePicker}
            />
          </label>
          
          <span>{new Date(selectedDate).toLocaleDateString("pl-PL")}</span>
      </div>


      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Product description"
          className={styles.input}
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