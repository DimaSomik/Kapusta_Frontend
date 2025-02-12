import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  // Funkcja obsługująca logikę wylogowania
  const handleLogout = () => {
    // Usuwamy dane z localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");

    if (onLogout) onLogout();

    // Przekierowujemy do strony logowania
    navigate("/login");
  };

  return (
    <div onClick={handleLogout} className="logout">
      <img src="public/logout.svg" alt="Logout" />
    </div>
  );
};

export default LogoutButton;
