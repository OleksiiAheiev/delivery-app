import React from 'react';
import { Box, IconButton, Typography, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: theme.palette.primary.main,
}));

const Logo = styled(HomeIcon)(({ theme }) => ({
  fontSize: '48px',
  textAlign: 'center',
  color: theme.palette.primary.main,
}));

export default function NotFound() {
  return (
    <Container>
      <Text variant="h1">
        <Text>404</Text>
        <Text>We`re sorry</Text>
        <Text>We can`t find the page you`re looking for</Text>
        <Text>
          Please press the
          <Link to='/delivery-app'>
            <IconButton aria-label="logo">
              <Logo />
            </IconButton>
          </Link>
        </Text>
      </Text>
    </Container>
  );
}
