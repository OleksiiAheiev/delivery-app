import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useCartContext } from '../contexts/CartProvider';
import FormFields from '../components/ShpoppingCart/FormCart/FormFields';
import CartProducts from '../components/ShpoppingCart/FormCart/CartProducts';

const CartContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
}));

export const CartWrapper = styled(Box)(() => ({
  padding: '20px 15px 10px',
  border: '1px solid #000',
  borderRadius: '5px',
  '@media (min-width: 1023px)': {
    width: '100%',
  },
}));

const FormWrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'block',
  marginBottom: '15px',
  '@media (min-width: 1023px)': {
    height: '70svh',
    display: 'flex',
    gap: '30px',
  },
}));

export const ButtonWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export default function ShoppingCart() {
  const {
    control, handleSubmit, getValues, reset,
  } = useForm();

  const { cartProducts } = useCartContext();

  const onSubmit = () => {
    const formData = getValues();
    const cartData = cartProducts;

    const dataToSend = {
      formData,
      cartData,
    };

    console.log(dataToSend);

    reset();
  };

  return (
    <CartContainer>
      <form>
        <FormWrapper>
          <FormFields control={control} />
          <CartProducts />
        </FormWrapper>
        <ButtonWrapper>
          <Button
            variant='outlined'
            size='large'
            onClick={handleSubmit(onSubmit)}
          >
            Order
          </Button>
        </ButtonWrapper>
      </form>
    </CartContainer>
  );
}
