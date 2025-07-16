import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurWorkPage from './pages/OurWorkPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/pricing-packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
