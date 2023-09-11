import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import styled from '@emotion/styled';
import { IMenuItem } from '../../types/types';
import { useCartContext } from '../../contexts/CartProvider';

export interface ShopCartProps {
  product: Required<IMenuItem>;
}

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '280px',
  overflow: 'visible',
  '@media (min-width: 767px)': {
    padding: '10px',
    minWidth: '300px',
  },
  '@media (min-width: 1480px)': {
    padding: '10px',
    width: '400px',
  },
}));

const StyledCardActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const MainButton = styled(Button)(() => ({
  border: 'solid 1px #000',
  borderRadius: '10px',
  cursor: 'pointer',
  padding: '7px 30px',
  color: '#000',
  backgroundColor: '#f0f0f0',
}));

export default function ShopCard({ product }: ShopCartProps) {
  const { addToCart, cartProducts } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isProductInCart = cartProducts.some(item => item.product.id === product.id);

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia component="img" height="170" image={product.image} alt={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {product.title.slice(0, 40)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Calories: <b>{product.calories}</b> cal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: <b>{product.price}</b> ₴
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledCardActions>
        <MainButton onClick={handleAddToCart}>
          {isProductInCart ? 'Товар у корзині' : 'Додати у кошик'}
        </MainButton>
      </StyledCardActions>
    </StyledCard>
  );
}
