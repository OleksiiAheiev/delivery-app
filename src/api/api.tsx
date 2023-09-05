import { IFormSubmission } from '../types/types';
import axios from './service';

export const getAllShops = {
  fetch: () => axios.get('/shops').then((data) => data)
};

export const postFormData = {
  fetch: (formData: IFormSubmission) =>
    axios.post('/orders', formData).then((data) => data),
};
