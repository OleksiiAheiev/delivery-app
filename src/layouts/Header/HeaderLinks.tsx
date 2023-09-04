import React from 'react';
import {
  Box, Divider, Typography, styled
} from '@mui/material';
import { Link } from 'react-router-dom';

export const LinksContainer = styled(Box)(() => ({
  display: 'none',
  '@media (min-width: 1023px)': {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
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
  height: '30px',
  width: '1px',
  backgroundColor: '#000'
}));

export interface HeaderLinksProps {
  linksContainerStyles?: React.CSSProperties;
}

export default function HeaderLinks() {
  return (
    <LinksContainer>
      <CustomLink to='/'>
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
