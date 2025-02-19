import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <RestrictedRoute redirectTo="/transaction/expenses" component={<AuthPage /> } />
        }/>
        <Route path="/transaction/expenses" element={
          <PrivateRoute redirectTo="/" component={<InputExpensesPage />}/>
        }/>
        <Route path="/transaction/income" element={
          <PrivateRoute redirectTo="/" component={<InputIncomePage />}/>
        }/>
        <Route path="/transaction/expense-categories" element={
          <PrivateRoute redirectTo="/" component={<ReportExpensesPage />}/>
        }/>
        <Route path="/transaction/income-categories" element={
          <PrivateRoute redirectTo="/" component={<ReportIncomePage />}/> 
        }/>
      </Routes>
    </>
  );
}

export default App;
