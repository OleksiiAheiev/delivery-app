import React from 'react';
import {
  Box, Divider, Typography, styled
} from '@mui/material';
import { Link } from 'react-router-dom';

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    gap: theme.spacing(4),
    alignItems: 'center',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:visited': {
    color: theme.palette.primary.main,
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: theme.spacing(4),
  width: '0.0625rem',
  backgroundColor: theme.palette.primary.dark,
}));

export default function HeaderLinks() {
  return (
    <LinksContainer>
      <CustomLink to='/delivery-app'>
        <Typography>Shop</Typography>
      </CustomLink>
      <StyledDivider orientation='vertical' />
      <CustomLink to='/shopping-cart'>
        <Typography>Shopping Cart</Typography>
      </CustomLink>
      <StyledDivider orientation='vertical' />
      <CustomLink to='/history'>
        <Typography>History</Typography>
      </CustomLink>
    </LinksContainer>
  );
}
