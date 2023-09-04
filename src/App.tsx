import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainTemplate from './layouts/MainTemplate';
import Shops from './pages/Shops';
import NotFound from './pages/NotFound';
import ShoppingCart from './pages/ShoppingCart';
import AppProvider from './contexts/AppProvider';
import CartProvider from './contexts/CartProvider';
// import Screen from './test';

export default function App() {
  return (
    <AppProvider>
      <CartProvider>
        <BrowserRouter>
          <MainTemplate>
            <Routes>
              <Route path='/' element={<Shops />} />
              <Route path='/shopping-cart' element={<ShoppingCart />} />
              {/* <Route path='/test' element={<Screen />} /> */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MainTemplate>
        </BrowserRouter>
      </CartProvider>
    </AppProvider>
  );
}
