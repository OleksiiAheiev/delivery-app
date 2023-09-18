import React, { useState } from 'react';
import {
  Box, Typography, styled, Tabs, Tab, useMediaQuery
} from '@mui/material';
import Loading from '../Loading';
import { useAppContext } from '../../contexts/AppProvider';

export const StyledShopNav = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  textAlign: 'center',
  padding: theme.spacing(1),
  minHeight: '5.625rem',
  [theme.breakpoints.up('lg')]: {
    width: '18.75rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.25rem 1.875rem 0',
    marginBottom: 0,
    '& > :first-of-type': {
      marginBottom: theme.spacing(2),
    },
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-flexContainer': {
    display: 'flex',
    justifyContent: 'flex-start',
    '& > :not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  },
  '.MuiTabs-scrollButtons.Mui-disabled': {
    opacity: '0.3',
  },
  '.MuiTabs-scroller': {
    overflow: 'auto',
    scrollbarWidth: 'thin',
  },
  [theme.breakpoints.up('lg')]: {
    width: '12.5rem',
    '.MuiTabs-flexContainer': {
      flexDirection: 'column',
      '& > :not(:last-child)': {
        marginRight: 0,
        marginBottom: theme.spacing(5),
      },
    },
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: '9.375rem',
  padding: theme.spacing(2),
  border: '0.0625rem solid #ccc',
  [theme.breakpoints.up('lg')]: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '600',
}));

export default function ShopsNavigation() {
  const { shops, loading, handleShopClick } = useAppContext();
  const [activeTab, setActiveTab] = useState(0);
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');

  const handleTabsChange = (event: React.SyntheticEvent, index: number) => {
    setActiveTab(index);
    handleShopClick(shops[index]);
  };

  const orientation = isLargeScreen ? 'vertical' : 'horizontal';

  return (
    <StyledShopNav>
      <StyledTypography variant='h6'>Shops:</StyledTypography>
        {loading ? (
          <Loading />
        ) : (
          <StyledTabs
            orientation={orientation}
            variant='scrollable'
            scrollButtons='auto'
            textColor="inherit"
            value={activeTab}
            onChange={handleTabsChange}
          >
            {shops.map((shop, id) => (
              <StyledTab key={`${shop.id}-${id}`} label={shop.shop} />
            ))}
      </StyledTabs>
        )}
    </StyledShopNav>
  );
}
