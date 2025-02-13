import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import useLocalStorage from "use-local-storage";
//Wrzucić Toogler do Navbara
import { ThemeToogler } from "./components/ThemeToogler/ThemeToogler.jsx";

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
  //Div na górze return to tester theme toogla - do wywalenia podczas składania strony//
  const preferencedTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preferencedTheme);
  return (
    <>
      <div className="toogleTestMain" data-theme={isDark ? "dark" : "light"}>
        <ThemeToogler
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <h1 className="toogleTestTitle">Hello World</h1>
        <div className="toogleTestBox">
          <h2>This is a box</h2>
        </div>
      </div>
      <>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/transaction/expenses" element={<InputExpensesPage />} />
          <Route path="/transaction/income" element={<InputIncomePage />} />
          <Route
            path="/transaction/expense-categories"
            element={<ReportExpensesPage />}
          />
          <Route
            path="/transaction/income-categories"
            element={<ReportIncomePage />}
          />
        </Routes>
      </>
    </>
  );
}

export default App;
