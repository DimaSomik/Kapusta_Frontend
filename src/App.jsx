import './App.css'
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import LoginBackground from './components/LoginBackground/LoginBackground'
import Background from './components/Background/Background';

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const InputExpensesPage = lazy(() => import('./pages/InputExpensesPage/InputExpensesPage'));
const InputIncomePage = lazy(() => import('./pages/InputIncomePage/InputIncomePage'));
const ReportExpensesPage = lazy(() => import('./pages/ReportExpensesPage/ReportExpensesPage'));
const ReportIncomePage = lazy(() => import('./pages/ReportIncomePage/ReportIncomePage'));

function App() { 
  const isLoggedIn = localStorage.getItem("authToken");

  return (
    <>
      <Routes>
        <Route path='/auth' element={<><LoginBackground /><AuthPage /></>}/>
        <Route path='/transaction/expenses' element={<InputExpensesPage />}/>
        <Route path='/transaction/income' element={<InputIncomePage />} />
        <Route path='/transaction/expense-categories' element={<ReportExpensesPage />} />
        <Route path='/transaction/income-categories' element={<ReportIncomePage />} />
      </Routes>
    </>
  );
};

export default App