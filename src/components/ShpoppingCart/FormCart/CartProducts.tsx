import React from 'react';
import { PurchaseControls } from '../../../pages/ShoppingCart';
import { Box, Button, Typography, styled } from '@mui/material';
import { useCartContext } from '../../../contexts/CartProvider';
import CartItem from '../CartItem';

const CartWrapper = styled(Box)(({ theme }) => ({
  height: '65vh',
  padding: '1.25rem 0.9375rem 0.625rem',
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  [theme.breakpoints.up('lg')]: {
    height: '100%',
    width: '100%',
  },
}));

export const StyledBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const CartItemsWrapper = styled(Box)(() => ({
  height: '100%',
  overflow: 'auto',
  marginBottom: '0.625rem',
  '> *': {
    marginBottom: '1.25rem',
  },
}));

export const CentredWtrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  height: '20vh',
  gap: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    height: '100%',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '9.375rem',
  color: theme.palette.primary.dark,
  borderColor: theme.palette.primary.dark,
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
            <CentredWtrapper>
              <Typography>Your cart is empty</Typography>
            </CentredWtrapper>
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
          <StyledButton variant='outlined' onClick={clearCart}>Clear Cart</StyledButton>
        </PurchaseControls>
      </StyledBox>
    </CartWrapper>
  );
}
