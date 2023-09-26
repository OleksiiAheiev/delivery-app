import React, { memo } from 'react';
import { SwipeableDrawer } from '@mui/material';
import HeaderDrawerLinks from './HeaderDrawerLinks';

interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default memo(function DrawerMenu({ open, onClose }: IDrawerProps) {
  return (
    <SwipeableDrawer
      anchor='top'
      open={open}
      onClose={onClose}
      onOpen={() => null}
    >
      <HeaderDrawerLinks />
    </SwipeableDrawer>
  );
});
