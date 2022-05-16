import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';
import './styles/index.scss';

function App() {
  return (
    <div className="global-container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/month-statistics" exact element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
