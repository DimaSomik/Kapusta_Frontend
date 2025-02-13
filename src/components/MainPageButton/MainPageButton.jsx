import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import icon from "../../assets/svgs-sprite.svg";
import css from "./MainPageButton.module.css";

export const MainPageButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link className={css["reports-backlink"]} to={backLinkHref}>
      <svg width="24" height="24">
        <use href={`${icon}#icon-back-arrow`}></use>
      </svg>
      <span className={css["reports-backlink-text"]}>Main Page</span>
    </Link>
  );
};


// Do działania potrzebne jest aby w komponencie ReportsButton dodać: state = {{ from: location.pathname }}
// Mniej więcej jak niżej. Bez dodania tego kodu link będzie kierował do strony głównej a nie poprzedniej.
{/* <NavLink
    to="/transaction/"
    state={{ from: location.pathname }}
    className={({ isActive }) => (isActive ? scss.active : "")}>
    Reports
</NavLink> */}