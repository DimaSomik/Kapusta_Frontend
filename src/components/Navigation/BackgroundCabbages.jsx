import styles from "./BackgroundCabbages.module.css";
import icon from "../../assets/svgs-sprite.svg";

export default function BackgroundCabbages({ isLoggedIn }) {
    return (
        <div className={`${styles.cabbageContainer} ${isLoggedIn ? styles.hiddenMobile : ""} ${isLoggedIn ? styles.hiddenTablet : ""}`}>
            <svg className={`${styles.cabbage1} ${isLoggedIn ? styles.moveDown : ""}`} width="50" height="50">
                <use href={`${icon}#icon-upper-kapustas`}></use>
            </svg>
        </div>
    );
}
