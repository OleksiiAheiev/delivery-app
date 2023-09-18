import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getHistoryData } from '../api/api';
import { IOrderItem } from '../components/History/HistoryCardItems';
import HistoryForm from '../components/History/HistoryForm';
import HistoryCardItems from '../components/History/HistoryCardItems';

const HistoryContainer = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  height: '100%',
  gap: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    maxHeight: '90svh',
    padding: theme.spacing(2),
  },
}));

const HistoryFormWrapper = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
  },
}));

const HistoryItemsWrapper = styled(Box)(({ theme }) => ({
  border: '0.0625rem solid #000',
  borderRadius: theme.spacing(1),
  boxShadow: '0.0625rem 0.125rem 0.25rem rgba(0, 0, 0, .2)',
  display: 'grid',
  gap: theme.spacing(4),
  padding: theme.spacing(1),
  overflow: 'auto',
  [theme.breakpoints.up('lg')]: {
    height: '100%',
    padding: theme.spacing(4),
  },
}));

export interface IOrderTypes {
  id: number;
  formData: {
    email: string;
    phone: string;
  };
  cartData: IOrderItem[];
  totalAmount: number;
}

export default function History() {
  const { control, getValues } = useForm();
  const [orderHistory, setOrderHistory] = useState<IOrderTypes[]>([]);

  const onSubmit = async () => {
    const formData = getValues();
    const { Email, Phone } = formData;

    try {
      const response = await getHistoryData.fetch({ Email, Phone });
      const { data } = response;

      const filteredOrders: IOrderTypes[] = data.filter((order: IOrderTypes) => {
        return order.formData.email === Email && order.formData.phone === Phone;
      });

      setOrderHistory(filteredOrders);
    } catch (error) {
      console.error('Помилка при отриманні замовлень', error);
    }
  };

  const historyItems = orderHistory.length === 0 ? null : (
    <HistoryItemsWrapper>
      {orderHistory.map((order, id) => (
        <HistoryCardItems key={`${order.id}-${id}`} order={order} />
      ))}
    </HistoryItemsWrapper>
  );

  return (
    <HistoryContainer>
      <HistoryFormWrapper>
        <HistoryForm control={control} onSubmit={onSubmit} />
      </HistoryFormWrapper>
      {historyItems}
    </HistoryContainer>
  );
}
