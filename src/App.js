import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <p>Individual Page Content Inserts Here</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
