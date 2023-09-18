import React from 'react';
import { Box, styled } from '@mui/material';
import Header from './Header/Header';

export interface IChildrenProps {
  children: React.ReactNode
}

export const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
}));

export const Container = styled(Box)(({ theme }) => ({
  padding: '1.875rem 0.625rem 0.625rem',
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    padding: '1.875rem 0.625rem 0.625rem',
  },
}));

export default function MainTemplate({ children }: IChildrenProps) {
  return (
    <Wrapper>
      <Header />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}
