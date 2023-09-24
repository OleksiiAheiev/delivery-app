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

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  boxShadow: 'none',
  zIndex: 11111,
}));

export const IconContainerRight = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  [theme.breakpoints.up('lg')]: {
    display: 'none'
  },
}));

export const IconContainerLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
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
      <StyledAppBar>
        <Toolbar>
          <Link to='/delivery-app'>
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
      </StyledAppBar>
      <DrawerMenu open={isDrawerOpen} onClose={handleToggle} />
    </Container>
  );
}
