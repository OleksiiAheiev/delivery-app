import React from 'react';
import { Box, styled } from '@mui/material';
import ShopsNavigation from '../components/Shop/ShopsNavigation';
import ShopContent from '../components/Shop/ShopContent';
import { useAppContext } from '../contexts/AppProvider';

export const ShopsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    height: '85svh',
  },
}));

export default function Shops() {
  const { error } = useAppContext();

  return (
    <ShopsContainer>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <ShopsNavigation />
          <ShopContent />
        </>
      )}
    </ShopsContainer>
  );
}
