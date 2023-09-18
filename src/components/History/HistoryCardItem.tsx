import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { IOrderItem } from './HistoryCardItems';

const StyledCard = styled(Card)(({ theme }) =>({
  minWidth: '15.625rem',
  [theme.breakpoints.up('sm')]: {
    minWidth: '16.875rem',
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '20.625rem',
  },
}));

interface IHistoryCardItem {
  item: IOrderItem
}

export default function HistoryCardItem({ item }: IHistoryCardItem) {
  const { product } = item;
  
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.title}
          />
          <Typography gutterBottom variant="h6">
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
    </StyledCard>
  );
}
