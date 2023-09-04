import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Control, Controller } from 'react-hook-form';
import { FieldRules } from '../../types/types';

type InputFieldProps = TextFieldProps & {
  control: Control;
  name: string;
  defaultValue?: string;
  label: string;
  rules: FieldRules;
}

export default function InputField({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  ...props
}: InputFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={
        (({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <TextField
            label={label}
            value={value}
            inputRef={ref}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : ''}
            {...props}
          />
      ))}
    />
  );
}
