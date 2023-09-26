import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Box,
  FormControl,
  Typography,
  styled,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { ICartItem, useCartContext } from '../contexts/CartProvider';
import FormFields from '../components/ShpoppingCart/FormCart/FormFields';
import CartProducts, { StyledButton } from '../components/ShpoppingCart/FormCart/CartProducts';
import { postFormData } from '../api/api';

const CartFormWrapper = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    height: '70svh',
  },
}));

export const PurchaseControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(7),
}));

export default function ShoppingCart() {
  const {
    control, handleSubmit, getValues, reset,
  } = useForm();

  const { totalAmount, cartProducts, clearCart } = useCartContext();

  const onSubmit = async () => {
    try {
      const formData = getValues();
      const cartData: ICartItem[] = cartProducts;

      const dataToSend = {
        formData,
        cartData,
        totalAmount,
      };

      const response = await postFormData.fetch(dataToSend);

      clearCart();
      reset();

      return response;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  };

  return (
    <CartFormWrapper>
      <FormWrapper>
        <FormFields control={control} />
        <CartProducts />
      </FormWrapper>
      <PurchaseControls>
        <Typography>Total price: {totalAmount} ₴</Typography>
        <StyledButton
          variant='outlined'
          onClick={handleSubmit(onSubmit)}
        >
          Order
        </StyledButton>
      </PurchaseControls>
    </CartFormWrapper>
  );
}
