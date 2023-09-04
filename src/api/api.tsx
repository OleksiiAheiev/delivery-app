import axios from './service';

export const getAllShops = {
  fetch: () => axios.get('/shops').then((data) => data)
};

// export const postFormData = {
//   fetch: (formData) => axios.post('/orders', formData).then((data) => data)
// };
