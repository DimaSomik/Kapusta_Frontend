import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { setUserFromToken } from "./redux/slices/authSlice";
// import { setAuthHeader } from "./redux/controllers/authController";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const InputExpensesPage = lazy(() =>
  import("./pages/InputExpensesPage/InputExpensesPage")
);
const InputIncomePage = lazy(() =>
  import("./pages/InputIncomePage/InputIncomePage")
);
const ReportExpensesPage = lazy(() =>
  import("./pages/ReportExpensesPage/ReportExpensesPage")
);
const ReportIncomePage = lazy(() =>
  import("./pages/ReportIncomePage/ReportIncomePage")
);

const getTokenFromLocalStorage = () => {
  const storedToken = localStorage.getItem("persist:token");

  if (storedToken) {
    // Usunięcie nadmiarowych cudzysłowów, jeśli token jest zapisany w formacie stringu
    const cleanedToken = storedToken.replace(/[^a-zA-Z0-9.-_~]/g, "");
    return cleanedToken;
  }
  return null;
};

function App() {
  const dispatch = useDispatch();

  // Odczyt tokena z localStorage przy starcie aplikacji
 useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      console.log("Token po oczyszczeniu:", token);
      // Jeśli token istnieje, ustawiamy dane użytkownika w Redux
      dispatch(setUserFromToken({ accessToken: token }));
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="/transaction/expenses"
              component={<AuthPage />}
            />
          }
        />
        <Route
          path="/transaction/expenses"
          element={
            <PrivateRoute redirectTo="/" component={<InputExpensesPage />} />
          }
        />
        <Route
          path="/transaction/income"
          element={
            <PrivateRoute redirectTo="/" component={<InputIncomePage />} />
          }
        />
        <Route
          path="/transaction/expense-categories"
          element={
            <PrivateRoute redirectTo="/" component={<ReportExpensesPage />} />
          }
        />
        <Route
          path="/transaction/income-categories"
          element={
            <PrivateRoute redirectTo="/" component={<ReportIncomePage />} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
