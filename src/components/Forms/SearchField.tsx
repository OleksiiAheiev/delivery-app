import React, { ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)(() => ({
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: '10px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderRadius: '10px',
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    borderRadius: '10px',
    color: '#000',
    '&.Mui-focused': {
      color: '#000',
    },
  },
}));

export default function SearchField() {
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <StyledTextField
      label='Search'
      variant='outlined'
      size='small'
      onChange={handleChangeSearch}
    />
  );
}
