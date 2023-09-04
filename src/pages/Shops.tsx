import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import ShopsNavigation from '../components/Shop/ShopsNavigation';
import ShopContent from '../components/Shop/ShopContent';
import { useAppContext } from '../contexts/AppProvider';
import { IShops } from '../types/types';

export const ShopsContainer = styled(Box)(() => ({
  display: 'block',
  '@media (min-width: 1023px)': {
    display: 'flex',
    gap: '30px',
    height: '85svh',
  },
}));

export default function Shops() {
  const { shops, error } = useAppContext();
  const [activeShop, setActiveShop] = useState<IShops | null>(null);

  useEffect(() => {
    if (shops.length > 0) {
      setActiveShop(shops[0]);
    }
  }, [shops]);

  const handleShopClick = (shop: IShops) => {
    setActiveShop(shop);
  };

  return (
    <ShopsContainer>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <ShopsNavigation shops={shops} onShopClick={handleShopClick} />
          <ShopContent activeShop={activeShop} />
        </>
      )}
    </ShopsContainer>
  );
}
