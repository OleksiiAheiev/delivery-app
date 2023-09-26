import React, { memo } from 'react';
import {
  Box, FormControl, styled,
} from '@mui/material';
import InputField from '../../Forms/InputField';
import { formRules } from '../../../helper/rules';
import { Control } from 'react-hook-form';

export const FormWrapper = styled(Box)(({theme}) => ({
  padding: '1.25rem 0.9375rem 0.625rem',
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > :not(:last-child)': {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(8),
    },
  },
}));

export const StyledInputField = styled(InputField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderRadius: theme.spacing(1),
      borderColor: theme.palette.primary.dark,
    },
  },
  '& .MuiInputLabel-root': {
    borderRadius: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%'
  },
}));

interface FormFieldsProps {
  control: Control;
}

export default memo(function FormFields({ control }: FormFieldsProps) {
  return (
    <FormWrapper>
      <StyledFormControl>
        <StyledInputField
          type='text'
          control={control}
          name='name'
          variant='outlined'
          label='Name'
          rules={formRules.name}
        />
        <StyledInputField
          type='text'
          control={control}
          name='email'
          variant='outlined'
          label='Email'
          rules={formRules.email}
        />
        <StyledInputField
          type='text'
          control={control}
          name='phone'
          variant='outlined'
          label='Phone'
          rules={formRules.phone}
        />
        <StyledInputField
          type='text'
          control={control}
          name='address'
          variant='outlined'
          label='Address'
          rules={formRules.address}
        />
      </StyledFormControl>
    </FormWrapper>
  );
});
