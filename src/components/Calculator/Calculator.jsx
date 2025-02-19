import { useState, useRef, useEffect } from "react";
import styles from "./Calculator.module.css";
import sprite from "../../assets/svgs-sprite.svg";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../../redux/controllers/userController";

const categories = [
  "Groceries",
  "Alcohol",
  "Entertainment",
  "Health",
  "Transport",
  "Household items",
  "Electronics",
  "Utilities and communication",
  "Sports and hobbies",
  "Education",
  "Other",
];

const incomeCategories = ["Salary", "Additional income"];

const Calculator = ({ isExpense }) => {
  const [selectedCategory, setSelectedCategory] = useState("Product category");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDescription, setProductDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
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

  const handleClear = () => {
    setProductDescription("");
    setSelectedCategory("Product category");
    setAmount(0);
  };

  const handleSubmit = async () => {
    if (
      !productDescription ||
      selectedCategory === "Product category" ||
      !amount
    )
      return;

    const newEntry = {
      description: productDescription,
      category: selectedCategory,
      amount: Number(amount),
      date: new Date().toISOString().split("T")[0],
    };

    handleClear();

    if (isExpense) {
      dispatch(addExpense(newEntry));
    } else if (!isExpense) {
      dispatch(addIncome(newEntry));
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
        <div className={styles.topSectionPart}>
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
            {/* <input
            type="text"
            placeholder="Product description"
            className={styles.input}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            onKeyDown={handleKeyDown}
          /> */}

            {/* <div
            className={styles.selectWrapper}
            ref={dropdownRef}
            onMouseDown={(event) => {
              event.stopPropagation();
              setDropdownOpen((prev) => !prev);
            }}
          >
            <div className={styles.selected}>{selectedCategory}</div>
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>
            {new Date().toLocaleDateString("pl-PL")}
          </div> */}

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

                {dropdownOpen && isExpense ? (
                  <ul className={styles.dropdown}>
                    {categories.map((category, index) => {
                      return (
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
                      );
                    })}
                  </ul>
                ) : (
                  dropdownOpen && (
                    <ul className={styles.dropdown}>
                      {incomeCategories.map((category, index) => {
                        return (
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
                        );
                      })}
                    </ul>
                  )
                )}
              </div>

              <div className={styles.amount}>
                <input
                  type="number"
                  value={amount}
                  className={styles.amountInput}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div className={styles.iconWrapper}>
                  <svg className={styles.amountIcon}>
                    <use href={`${sprite}#icon-calculator`}></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.inputButton} onClick={handleSubmit}>
            INPUT
          </button>
          <button className={styles.clearButton} onClick={handleClear}>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
