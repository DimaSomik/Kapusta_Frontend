import css from "./BalanceModal.module.css";

export const BalanceModal = () => {
  return (
    <div className={css.container}>
      <div className={css.triangle}></div>
      <div className={css.main}>
        <h4 className={css.title}>Hello!</h4>
        <p className={css.title}>
          To get started, enter the current balance of your account!
        </p>
        <p className={css.text}>
          You can&apos;t spend money until you have it :)
        </p>
      </div>
    </div>
  );
};
