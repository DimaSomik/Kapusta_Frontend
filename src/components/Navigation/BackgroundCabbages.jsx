import styles from "./BackgroundCabbages.module.css";

export default function BackgroundCabbages({ isLoggedIn }) {
    return (
        <div className={`${styles.cabbageContainer} ${isLoggedIn ? styles.hiddenMobile : ""} ${isLoggedIn ? styles.hiddenTablet : ""}`}>
            <div className={`${styles.cabbage1} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage2} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage3} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage4} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage5} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage6} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage7} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage8} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage9} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage10} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage11} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage12} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage13} ${isLoggedIn ? styles.moveDown : ""}`}></div>
            <div className={`${styles.cabbage14} ${isLoggedIn ? styles.moveDown : ""}`}></div>
        </div>
    );
}