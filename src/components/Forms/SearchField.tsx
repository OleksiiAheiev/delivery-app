import React, { ChangeEvent } from 'react';
import { TextField, styled } from '@mui/material';
import { useAppContext } from '../../contexts/AppProvider';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: '100%',
  borderRadius: theme.spacing(1),
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
}));

export default function SearchField() {
  const { performSearch } = useAppContext();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    performSearch(searchTerm);
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
