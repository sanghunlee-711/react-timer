import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <main>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/event">
          <Home />
        </Route>
      </main>
    </Router>
  );
}

export default App;
