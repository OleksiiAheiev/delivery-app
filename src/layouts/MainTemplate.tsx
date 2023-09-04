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
  flexGrow: 1,
  overflow: 'hidden',
}));

export const Container = styled(Box)(() => ({
  padding: '30px 10px 10px',
  height: '100%',
  '@media (min-width: 1023px)': {
    padding: '30px 10px 10px',
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
