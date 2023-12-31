/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IMenuItem } from '../types/types';
import { IChildrenProps } from '../layouts/MainTemplate';

export interface ICartItem {
  product: IMenuItem;
  quantity: number;
}

interface ICartContext {
  cartProducts: ICartItem[];
  totalAmount: number;
  addToCart: (product: IMenuItem) => void;
  removeFromCart: (product: IMenuItem) => void;
  changeQuantity: (product: IMenuItem, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

export default function CartProvider({ children }: IChildrenProps) {
  const [cartProducts, setCartProducts] = useState<ICartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Calculate the total amount of items in the cart.
  const calculateTotalAmount = (cartItems: ICartItem[]) => {
    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.product.price * cartItem.quantity;
    }
    return total;
  };

  // Save cart data to local storage.
  function saveCartToLocalStorage(cart: ICartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Load cart data from local storage when the component mounts.
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    }
    return [];
  };

  // Add a product to the cart.
  const addToCart = (product: IMenuItem) => {
    const existingCartItem = cartProducts.find(item => item.product.id === product.id);

    if (existingCartItem) {
      const updatedCart = cartProducts.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartProducts(updatedCart);
      saveCartToLocalStorage(updatedCart);

    } else {
      setCartProducts(prevItems => [...prevItems, { product, quantity: 1 }]);
      saveCartToLocalStorage([...cartProducts, { product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart.
  const removeFromCart = (product: IMenuItem) => {
    const updatedCart = cartProducts.filter(item => item.product.id !== product.id);
    setCartProducts(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Change the quantity of a product in the cart.
  const changeQuantity = (product: IMenuItem, newQuantity: number) => {
    if (newQuantity <= 0) return;

    const updatedCart = cartProducts.map(item => {
      if (item.product.id === product.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartProducts(updatedCart);
  };

  // Clear the entire cart.
  const clearCart = () => {
    setCartProducts([]);
    saveCartToLocalStorage([]);
  };

  // Calculate the total amount when cartProducts change.
  useEffect(() => {
    const newTotalAmount = calculateTotalAmount(cartProducts);
    setTotalAmount(newTotalAmount);
  }, [cartProducts]);

  // Load cart data from local storage when the component mounts.
  useEffect(() => {
    const cartFromLocalStorage = loadCartFromLocalStorage();
    if (cartFromLocalStorage.length > 0) {
      setCartProducts(cartFromLocalStorage);
    }
  }, []);

  return (
    <CartContext.Provider value={{
      cartProducts,
      totalAmount,
      addToCart,
      removeFromCart,
      changeQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
