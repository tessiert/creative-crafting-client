import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import HatsPage from './pages/hats/HatsPage';
import HatDetailPage from './pages/hats/HatDetailPage';
import KeychainsPage from './pages/keychains/KeychainsPage';
import KeychainDetailPage from './pages/keychains/KeychainDetailPage';
import NecklacesPage from './pages/necklaces/NecklacesPage';
import NecklaceDetailPage from './pages/necklaces/NecklaceDetailPage';
import HomePage from './pages/HomePage';
import ShippingPage from './pages/ShippingPage';
import OrdersPage from './pages/OrdersPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchReviews } from './features/reviews/reviewsSlice';
import { fetchOrders } from './features/orders/ordersSlice';
// import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop top={300} />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='shipping' element={<ShippingPage />} />
          <Route path='crochet-hats' element={<HatsPage />} />
          <Route path='crochet-hats/:hatId' element={<HatDetailPage />} />
          <Route path='keychains' element={<KeychainsPage />} />
          <Route path='keychains/:keychainId' element={<KeychainDetailPage />} />
          <Route path='necklaces' element={<NecklacesPage />} />
          <Route path='necklaces/:necklaceId' element={<NecklaceDetailPage />} />
          <Route path='orders' element={<OrdersPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
