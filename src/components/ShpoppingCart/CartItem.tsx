/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ICartItem } from '../../contexts/CartProvider';
import { IMenuItem } from '../../types/types';
import styled from '@emotion/styled';

const StyledItemContainer = styled(Box)(() => ({
  border: 'solid 1px #000',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  '@media (min-width: 767px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const StyledCardActionArea = styled(CardActionArea)(() => ({
  maxWidth: '270px',
  '@media (min-width: 767px)': {
    maxWidth: '300px',
  },
}));

const ItemDetails = styled(Box)(() => ({
  minWidth: '220px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  '@media (min-width: 1439px)': {
    minWidth: '300px',
  },
}));

const DetailsGroup = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '30px',
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
      <StyledCardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.product.image}
          alt={item.product.title}
        />
      </StyledCardActionArea>

      <ItemDetails>
        <Box>
          <Typography variant="subtitle2">Product: {item.product.title}</Typography>
          <Typography variant="subtitle2">Price: {item.product.price * item.quantity}</Typography>
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
    </StyledItemContainer>
  );
}
