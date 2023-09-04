import React, { useState } from 'react';
import { Container } from '../MainTemplate';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  styled
} from '@mui/material';
import HeaderLinks from './HeaderLinks';
import DrawerMenu from './Drawer/DrawerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export const IconContainerRight = styled(Box)(() => ({
  marginLeft: 'auto',
  '@media (min-width: 1023px)': {
    display: 'none'
  },
}));

export const IconContainerLeft = styled(Box)(() => ({
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
  '@media (min-width: 1023px)': {
    display: 'none',
  },
}));

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      <AppBar sx={{ backgroundColor: '#f9f9f9', zIndex: 11111, boxShadow: 'none' }}>
        <Toolbar>
          <Link to='/'>
            <IconContainerLeft>
              <IconButton aria-label="logo">
                <HomeIcon />
              </IconButton>
            </IconContainerLeft>
          </Link>
          <HeaderLinks />
          <IconContainerRight>
            <IconButton
              aria-label="menu"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
          </IconContainerRight>
        </Toolbar>
      </AppBar>
      <DrawerMenu open={isDrawerOpen} onClose={handleToggle} />
    </Container>
  );
}
