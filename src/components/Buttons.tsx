import React from 'react';
import { IChildrenProps } from '../layouts/MainTemplate';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

interface IButtonClickProp extends IChildrenProps  {
  onClick?: () => void;
}

// export interface IButtonActive {
//   isActive?: boolean;
// }

export const StyledShopButton = styled(Button)(() => ({
  border: 'solid 1px #000',
  borderRadius: '10px',
  cursor: 'pointer',
  padding: '7px 30px',
  color: '#000',
  backgroundColor: '#f0f0f0',
}));

export default function MainButton({ children, onClick }: IButtonClickProp) {
  return (
    <StyledShopButton onClick={onClick}>
      {children}
    </StyledShopButton>
  );
}

// interface ISortButtonProps extends IChildrenProps, IButtonClickProp { }

// export const StyledSortButton = styled(Button)(() => ({
//   padding: '10px 20px',
//   margin: '5px',
//   backgroundColor: '#f0f0f0',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontSize: '16px',
//   color: '#333',
// }));

// export function SortButton({ children, onClick }: ISortButtonProps) {
//   return (
//     <StyledSortButton
//       onClick={onClick}
//     >
//       {children}
//     </StyledSortButton>
//   );
// }
