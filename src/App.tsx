import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopNav, BottomNav, Footer } from './components/Navigation';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { CategoryPage } from './components/CategoryPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/contact" element={<div className="p-20 text-center"><h1 className="text-4xl font-bold">Contact Us</h1><p className="mt-4">Visit us at Cnr Bree & Wanderers, Johannesburg</p></div>} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}
