import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { IMenuItem } from '../../types/types';
import { IOrderTypes } from '../../pages/History';
import HistoryCardItem from './HistoryCardItem';

const CardWrapper = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  padding: theme.spacing(1),
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
}));

const CartDataWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  textAlign: 'center',
  gridTemplateColumns: 'repeat(1, minmax(15.625rem, 25rem))',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(15.625rem, 28.125rem))',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, minmax(20.625rem, 25rem))',
    gap: theme.spacing(6),
  },
}));

export interface IOrderItem {
  id: string;
  product: IMenuItem
}

interface HistoryCardProps {
  order: IOrderTypes;
}

export default function HistoryCardItems({ order }: HistoryCardProps) {
  const { cartData, totalAmount } = order;

  return (
    <CardWrapper>
      <Typography>Total price {totalAmount} ₴</Typography>
      <CartDataWrapper>
        {cartData.map((item, index) => (
          <HistoryCardItem key={`${item.id}-${index}`} item={item} />
        ))}
      </CartDataWrapper>
    </CardWrapper>
  );
}
