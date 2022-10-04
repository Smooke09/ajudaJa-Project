import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Index';

const RouterApp = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
);

export default RouterApp;
