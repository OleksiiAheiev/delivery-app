import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { StyledInputField } from '../components/ShpoppingCart/FormCart/FormFields';
import { useForm } from 'react-hook-form';
import { formRules } from '../helper/rules';
import { getHistoryData } from '../api/api';
import HistoryCard, { IOrderItem } from '../components/History/HistoryCard';

const HistoryContainer = styled(Box)({
  border: '1px solid #000',
  borderRadius: '5px',
  height: '90svh',
});

const HistoryFormWrapper = styled(Box)({
});

const HistoryItemsWrapper = styled(Box)({
  display: 'grid',
  gridTemplateRows: 'repeat(3, minmax(200px, 1fr))',
  gap: '20px',
  height: '100%',
  overflow: 'auto',
});
export interface IOrderTypes {
  formData: {
    email: string;
    phone: string;
  };
  cartData: IOrderItem[];
  totalAmount: number;
}

export default function History() {
  const { control, handleSubmit, getValues } = useForm();
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

  return (
    <HistoryContainer>
      <HistoryFormWrapper>
        <form>
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
          <Button
            variant='outlined'
            size='large'
            onClick={handleSubmit(onSubmit)}
          >
            Find
          </Button>
        </form>
      </HistoryFormWrapper>
      <HistoryItemsWrapper>
          {orderHistory &&
            orderHistory.map((order, id) => (
                <HistoryCard key={id} order={order} />
            ))}
      </HistoryItemsWrapper>
    </HistoryContainer>
  );
}
