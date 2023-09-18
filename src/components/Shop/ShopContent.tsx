import React, { Suspense, lazy } from 'react';
import { Box, styled } from '@mui/material';
import Loading from '../Loading';
import SearchField from '../Forms/SearchField';
import { useAppContext } from '../../contexts/AppProvider';

const ShopContainer = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  minHeight: '80svh',
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2),
    width: '100%',
  },
}));

const SearchFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: 'calc(100% - 6.25rem)',
  backgroundColor: theme.palette.primary.light,
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('xl')]: {
    width: '50%',
  }
}));

const ScrollableContent = styled(Box)(() => ({
  width: '100%',
  overflow: 'auto',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledShopGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(15.625rem, 28.125rem))',
  gap: theme.spacing(4),
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(15.625rem, 28.125rem))',
    gap: '1.875rem 3.125rem'
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(2, minmax(20.625rem, 31.25rem))',
    gap: '2.5rem 12.5rem'
  },
}));

const LoadingContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
}));

const LazyShopCard = lazy(() => import('./ShopCard'));

export default function ShopContent() {
  const { loading, searchResults } = useAppContext();

  return (
    <ShopContainer>
      <SearchFieldContainer>
        <SearchField />
      </SearchFieldContainer>
      <ScrollableContent>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <StyledShopGrid>
            {searchResults && searchResults.map((product, id) => (
              <Suspense key={`${product.title}-${id}`} fallback={<Loading />}>
                <LazyShopCard product={product} />
              </Suspense>
            ))}
          </StyledShopGrid>
        )}
      </ScrollableContent>
    </ShopContainer>
  );
}
