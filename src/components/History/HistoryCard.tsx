import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import styled from '@emotion/styled';
import { IMenuItem } from '../../types/types';
import { IOrderTypes } from '../../pages/History';

const CardWrapper = styled(Box)({
  display: 'flex',

});

const StyledCard = styled(Card)({
  width: '300px'

});

export interface IOrderItem {
  id: string;
  product: IMenuItem;
}

interface HistoryCardProps {
  order: IOrderTypes;
}

// add styles to component

export default function HistoryCard({ order }: HistoryCardProps) {
  return (
    <CardWrapper>
      {order.cartData.map((item, index) => (
        <StyledCard key={`${item.id}-${index}`}>
          <CardActionArea>
            <CardContent>
              <CardMedia component="img" height="170" image={item.product.image} alt={item.product.title} />
              <Typography gutterBottom variant="h6">
                {item.product.title.slice(0, 40)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Calories: <b>{item.product.calories}</b> cal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: <b>{item.product.price}</b> ₴
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      ))}
      <Box>
        <Typography>Total price {order.totalAmount} ₴</Typography>
      </Box>
    </CardWrapper>
  );
}
