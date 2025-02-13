import css from "./ThemeToogler.module.css";

export const ThemeToogler = ({ handleChange, isChecked }) => {
  return (
    <div className={css["toogle-container"]}>
      <input
        type="checkbox"
        id="check"
        className={css.toogle}
        onChange={handleChange}
        checked={isChecked ? isChecked : false}
      ></input>
      <label htmlFor="check"> </label>
    </div>
  );
};
