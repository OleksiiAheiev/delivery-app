import React from 'react';
import {
  Box, Divider, Typography, styled
} from '@mui/material';
import { Link } from 'react-router-dom';

export const LinksContainer = styled(Box)(() => ({
  padding: '70px 35px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '@media (min-width: 1023px)': {
    display: 'none',
  },
}));

export const CustomLink = styled(Link)(() => ({
  color: '#499ff5',
  textDecoration: 'none',
  '&:visited': {
    color: '#499ff5',
  }
}));

const StyledDivider = styled(Divider)(() => ({
  height: '1px',
  width: '100px',
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
