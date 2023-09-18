/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ICartItem } from '../../contexts/CartProvider';
import { IMenuItem } from '../../types/types';

const StyledItemContainer = styled(Box)(({ theme }) => ({
  border: 'solid 0.0625rem #000',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  minWidth: '15.625rem',
  height: '15.625rem',
  maxWidth: '20.625rem',
  [theme.breakpoints.up('sm')]: {
    minWidth: '16.875rem',
    maxWidth: '21.875rem',
    height: '16.875rem',
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '20.625rem',
    maxWidth: '25rem',
    height: '18.75rem',
  },
}));

const ItemDetails = styled(Box)(({ theme }) => ({
  minWidth: '13.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.up('xl')]: {
    minWidth: '18.75rem',
  },
}));

const DetailsGroup = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(4),
}));

interface ICartItemProps {
  item: ICartItem;
  onRemove: (product: IMenuItem) => void;
  onChangeQuantity: (product: IMenuItem, newQuantity: number) => void;
}

export default function CartItem({
  item, onRemove, onChangeQuantity
}: ICartItemProps) {
  return (
    <StyledItemContainer>
      <StyledCard>
        <StyledCardActionArea>
          <CardMedia
            component="img"
            image={item.product.image}
            alt={item.product.title}
          />
        </StyledCardActionArea>
        <ItemDetails>
          <Box>
            <Typography variant="subtitle2">Product: {item.product.title}</Typography>
            <Typography variant="subtitle2">Price: {item.product.price * item.quantity} ₴</Typography>
            <Typography variant="subtitle2">Quantity: {item.quantity}</Typography>
          </Box>
          <DetailsGroup>
            <IconButton
              onClick={() => onChangeQuantity(item.product, item.quantity - 1)}
              disabled={item.quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => onChangeQuantity(item.product, item.quantity + 1)}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => onRemove(item.product)}>
              <DeleteIcon />
            </IconButton>
          </DetailsGroup>
        </ItemDetails>
      </StyledCard>
    </StyledItemContainer>
  );
}
