import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import HatsPage from './pages/hats/HatsPage';
import HatDetailPage from './pages/hats/HatDetailPage';
import KeychainsPage from './pages/keychains/KeychainsPage';
import KeychainDetailPage from './pages/keychains/KeychainDetailPage';
import NecklacesPage from './pages/necklaces/NecklacesPage';
import NecklaceDetailPage from './pages/necklaces/NecklaceDetailPage';
import HomePage from './pages/HomePage';
import ShippingPage from './pages/ShippingPage';
import Header from './components/Header';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop top={300} />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='shipping' element={<ShippingPage />} />
          <Route path='hats' element={<HatsPage />} />
          <Route path='hats/:hatId' element={<HatDetailPage />} />
          <Route path='keychains' element={<KeychainsPage />} />
          <Route path='keychains/:keychainId' element={<KeychainDetailPage />} />
          <Route path='necklaces' element={<NecklacesPage />} />
          <Route path='necklaces/:necklaceId' element={<NecklaceDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
