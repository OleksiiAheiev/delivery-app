import React, { memo } from 'react';
import { Button, FormControl, styled } from '@mui/material';
import { formRules } from '../../helper/rules';
import { Control, useForm } from 'react-hook-form';
import InputField from '../Forms/InputField';

export const HistoryContainer = styled(FormControl)({
  width: '100%',
  margin: '0 auto',
});

const HistoryFormWrapper = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  maxWidth: '17.5rem',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    maxWidth: '31.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '37.5rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  color: theme.palette.primary.dark,
  borderColor: theme.palette.primary.dark,
}));

const StyledInputField = styled(InputField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderRadius: '0.625rem',
      borderColor: theme.palette.primary.dark,
    },
  },
  '& .MuiInputLabel-root': {
    borderRadius: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));


interface IHistoryForm {
  control: Control;
  onSubmit: () => void;
}

export default memo(function HistoryForm({ control, onSubmit }: IHistoryForm) {
  const { handleSubmit } = useForm();

  return (
    <HistoryContainer>
      <HistoryFormWrapper>
        <StyledInputField
          type='text'
          control={control}
          name='Email'
          variant='outlined'
          label='Email'
          rules={formRules.email}
          fullWidth
        />
        <StyledInputField
          type='text'
          control={control}
          name='Phone'
          variant='outlined'
          label='Phone'
          rules={formRules.phone}
          fullWidth
        />
        <StyledButton
          variant='outlined'
          size='large'
          onClick={handleSubmit(onSubmit)}
        >
          Find orders
        </StyledButton>
      </HistoryFormWrapper>
    </HistoryContainer>
  );
});
