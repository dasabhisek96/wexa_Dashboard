import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import './theme.js';

function App() {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
