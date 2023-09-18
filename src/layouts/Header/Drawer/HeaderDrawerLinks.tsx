import React from 'react';
import {
  Box, Divider, Typography, styled
} from '@mui/material';
import { Link } from 'react-router-dom';

export const LinksContainer = styled(Box)(({ theme }) => ({
  padding: '4.375rem 2.1875rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:visited': {
    color: theme.palette.primary.main,
  }
}));

const StyledDivider = styled(Divider)(() => ({
  height: '0.0625rem',
  width: '6.25rem',
}));

export default function HeaderDrawerLinks() {
  return (
    <LinksContainer>
      <CustomLink to='/'>
        <Typography>Shop</Typography>
      </CustomLink>
      <StyledDivider  orientation='horizontal' />
      <CustomLink to='/shopping-cart'>
        <Typography>Shopping Cart</Typography>
      </CustomLink>
      <StyledDivider orientation='horizontal' />
      <CustomLink to='/history'>
        <Typography>History</Typography>
      </CustomLink>
    </LinksContainer>
  );
}
