import styles from "../Header/Header.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

const Header = ({ userName, onLogout }) => {

  return (
    <header>
    <div className="logo">Kapusta</div>
    <div className="user-info">
      <span className="user-name">{userName}</span>
      <LogoutButton onLogout={onLogout} />
    </div>
  </header>
  );
};

export default Header;