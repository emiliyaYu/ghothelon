import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import MainPage from './pages/Main-Page';
import PageHeader from './ui/PageHeader';
import InfoPage from './pages/Info-Page';
import MapPage from './pages/Map-Page';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <MainPage>
        <Routes>
          <Route path="/" element={<Navigate to="/map" />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </MainPage>
    </BrowserRouter>
  );
}

export default App;
