import React from 'react';
import { PurchaseControls, CartWrapper } from '../../../pages/ShoppingCart';
import { Box, Button, Typography } from '@mui/material';
import { useCartContext } from '../../../contexts/CartProvider';
import CartItem from '../CartItem';
import styled from '@emotion/styled';

export const CartItemsWrapper = styled(Box)(() => ({
  height: '100%',
  overflow: 'auto',
  marginBottom: '10px',
  '> *': {
    marginBottom: '20px',
  },
  '@media (min-width: 1023px)': {
  },
}));

export const StyledBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export default function CartProducts() {
  const {
    cartProducts, removeFromCart, changeQuantity, clearCart
  } = useCartContext();

  return (
    <CartWrapper>
      <StyledBox>
        <CartItemsWrapper>
          {cartProducts.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            cartProducts.map(item => (
              <CartItem
                key={item.product.id}
                item={item}
                onRemove={removeFromCart}
                onChangeQuantity={changeQuantity}
              />
            ))
          )}
        </CartItemsWrapper>
        <PurchaseControls>
          <Button variant='contained' onClick={clearCart}>Clear Cart</Button>
        </PurchaseControls>
      </StyledBox>
    </CartWrapper>
  );
}
