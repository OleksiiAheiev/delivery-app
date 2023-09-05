import React, { Suspense, lazy } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { IShops } from '../../types/types';
import Loading from '../Loading';
import SearchField from '../Forms/SearchField';

const ShopContainer = styled(Box)(() => ({
  border: '1px solid #000',
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  '@media (min-width: 1023px)': {
    borderRadius: '5px',
    padding: '20px',
    width: '100%',
  },
}));

const SearchFieldContainer = styled(Box)({
  display: 'flex',
  borderRadius: '10px',
  width: 'calc(100% - 100px)',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '30px',
});

const ScrollableContent = styled(Box)(() => ({
  width: '100%',
  overflow: 'auto',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledShopGrid = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(250px, 350px))',
  gap: '30px',
  position: 'relative',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, minmax(250px, 400px))',
    gap: '30px 50px'
  },
  '@media (min-width: 1440px)': {
    gridTemplateColumns: 'repeat(2, minmax(250px, 400px))',
    gap: '40px 200px'
  },
}));

const LoadingContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
}));

export interface IShopProps {
  activeShop: IShops | null;
}

const LazyShopCard = lazy(() => import('./ShopCard'));

export default function ShopContent({ activeShop }: IShopProps) {
  const allItems = activeShop
    ? [...activeShop.burgers, ...activeShop.drinks, ...activeShop.desserts]
    : [];

  return (
    <ShopContainer>
      <SearchFieldContainer>
        <SearchField />
      </SearchFieldContainer>
      <ScrollableContent>
        <StyledShopGrid>
          {activeShop ? (
            allItems.map((product, id) => (
              <Suspense key={`${product.title}-${id}`} fallback={<Loading />}>
                <LazyShopCard product={product} />
              </Suspense>
            ))
          ) : (
            <LoadingContainer><Loading /></LoadingContainer>
          )}
        </StyledShopGrid>
      </ScrollableContent>
    </ShopContainer>
  );
}
