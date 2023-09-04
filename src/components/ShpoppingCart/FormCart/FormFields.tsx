import React from 'react';
import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import InputField from '../../Forms/InputField';
import { formRules } from '../../../helper/rules';
import { CartWrapper } from '../../../pages/ShoppingCart';
import { Control } from 'react-hook-form';

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > :not(:last-child)': {
    marginBottom: '30px',
  },
  '@media (min-width: 1023px)': {
    '& > :not(:last-child)': {
      marginBottom: '70px',
    },
  },
}));

export const StyledInputField = styled(InputField)(() => ({
  width: '100%',
  '@media (min-width: 1023px)': {
    width: '80%'
  },
}));

interface FormFieldsProps {
  control: Control;
}

export default function FormFields({ control }: FormFieldsProps) {
  return (
    <CartWrapper>
      <StyledFormControl>
        <StyledInputField
          type='text'
          control={control}
          name='Name'
          variant='outlined'
          label='Name'
          rules={formRules.name}
        />
        <StyledInputField
          type='text'
          control={control}
          name='Email'
          variant='outlined'
          label='Email'
          rules={formRules.email}
        />
        <StyledInputField
          type='text'
          control={control}
          name='Phone'
          variant='outlined'
          label='Phone'
          rules={formRules.phone}
        />
        <StyledInputField
          type='text'
          control={control}
          name='Address'
          variant='outlined'
          label='Address'
          rules={formRules.address}
        />
      </StyledFormControl>
    </CartWrapper>
  );
}
