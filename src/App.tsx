import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { TimerProvider } from './context/provider';
import Event from './pages/Event';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <TimerProvider>
        <Header />
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </main>
      </TimerProvider>
    </Router>
  );
}

export default App;
