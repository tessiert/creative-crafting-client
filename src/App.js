import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
