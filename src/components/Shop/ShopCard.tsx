import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled
} from '@mui/material';
import { IMenuItem } from '../../types/types';
import { useCartContext } from '../../contexts/CartProvider';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '17.5rem',
  overflow: 'visible',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1),
    minWidth: '18.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(1),
    width: '25rem',
  },
}));

const StyledCardActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const MainButton = styled(Button)(({ theme }) => ({
  border: 'solid 0.0625rem #000',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
  cursor: 'pointer',
  padding: '0.4375rem 1.875rem',
}));

export interface ShopCartProps {
  product: Required<IMenuItem>;
}

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
          {isProductInCart ? 'Product in Cart' : 'Add to Cart'}
        </MainButton>
      </StyledCardActions>
    </StyledCard>
  );
}
