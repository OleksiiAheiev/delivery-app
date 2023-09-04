import { FormRules } from '../types/types';

export const rulesText = {
  required: (field: string) => `${field} is required`,
  minLength: (length: number) => `At least ${length} characters`,
  maxLength: (length: number) => `Must be less than ${length} characters`,
  email: 'Please enter a valid email address.',
};

export const formRules: FormRules = {
  name: {
    required: { value: true, message: rulesText.required('Name') },
    minLength: { value: 3, message: rulesText.minLength(5) },
    maxLength: { value: 11, message: rulesText.maxLength(18) },
  },
  email: {
    required: { value: true, message: rulesText.required('Email') },
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      message: rulesText.email,
    },
    minLength: { value: 5, message: rulesText.minLength(5) },
    maxLength: { value: 50, message: rulesText.maxLength(100) },
  },
  phone: {
    required: { value: true, message: rulesText.required('Phone') },
    minLength: { value: 3, message: rulesText.minLength(9) },
    maxLength: { value: 11, message: rulesText.maxLength(14) },
  },
  address: {
    required: { value: true, message: rulesText.required('Address') },
    minLength: { value: 3, message: rulesText.minLength(15) },
    maxLength: { value: 11, message: rulesText.maxLength(50) },
  },
};
