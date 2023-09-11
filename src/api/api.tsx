import axios from './service';
import { IFormSubmission, IHistoryTypes } from '../types/types';

export const getAllShops = {
  fetch: () => axios.get('/shops').then((data) => data)
};

export const postFormData = {
  fetch: (formData: IFormSubmission) =>
    axios.post('/orders', formData).then((data) => data),
};

export const getHistoryData = {
  fetch: ({ Email, Phone }: IHistoryTypes) => axios.get(`/orders?email=${Email}&phone=${Phone}`).then((data) => data)
};
