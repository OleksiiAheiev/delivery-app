import React, { useState } from 'react';
import {
  Box, Typography, styled, Tabs, Tab, useMediaQuery
} from '@mui/material';
import { IShops } from '../../types/types';
import Loading from '../Loading';

export const StyledShopNav = styled(Box)(() => ({
  border: '1px solid #000',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  textAlign: 'center',
  padding: '10px',
  minHeight: '90px',
  '@media (min-width: 1023px)': {
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 30px 0',
    marginBottom: 0,
    '& > :first-of-type': {
      marginBottom: '20px',
    },
  },
}));

export const StyledTabs = styled(Tabs)(() => ({
  '.MuiTabs-flexContainer': {
    display: 'flex',
    justifyContent: 'flex-start',
    '& > :not(:last-child)': {
      marginRight: '20px',
    },
  },
  '.MuiTabs-scrollButtons.Mui-disabled': {
    opacity: '0.3',
  },
  '.MuiTabs-scroller': {
    overflow: 'auto',
    scrollbarWidth: 'thin',
  },
  '@media (min-width: 1023px)': {
    width: '200px',
    '.MuiTabs-flexContainer': {
      flexDirection: 'column',
      '& > :not(:last-child)': {
        marginRight: 0,
        marginBottom: '40px',
      },
    },
  },
}));

export const StyledTab = styled(Tab)(() => ({
  minWidth: '150px',
  padding: '20px',
  border: '1px solid #ccc',
  '@media (min-width: 1023px)': {
    '& > :not(:last-child)': {
      marginBottom: '20px',
    },
  }
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: '600',
}));

export interface IShopsType {
  shops: IShops[];
}

export interface IShopClick {
  // eslint-disable-next-line no-unused-vars
  onShopClick: (shop: IShops) => void;
}

interface IShopsNavigationProps extends IShopsType, IShopClick { }

export default function ShopsNavigation({ shops, onShopClick }: IShopsNavigationProps) {
  const [activeTab, setActiveTab] = useState(0);
  const isLargeScreen = useMediaQuery('(min-width: 1023px)');

  const handleTabsChange = (event: React.SyntheticEvent, index: number) => {
    setActiveTab(index);
    onShopClick(shops[index]);
  };

  const orientation = isLargeScreen ? 'vertical' : 'horizontal';

  return (
    <StyledShopNav>
      <StyledTypography variant='h6'>Shops:</StyledTypography>
      <StyledTabs
        orientation={orientation}
        variant='scrollable'
        scrollButtons='auto'
        textColor="inherit"
        value={activeTab}
        onChange={handleTabsChange}
      >
        {shops ? (
          shops.map((shop, id) => (
            <StyledTab key={`${shop.id}-${id}`} label={shop.shop} />
          ))
        ) : (
          <Loading />
        )}
      </StyledTabs>
    </StyledShopNav>
  );
}
