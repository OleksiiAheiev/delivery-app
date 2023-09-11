import { ICartItem } from '../contexts/CartProvider';

// data types
export interface IMenuItem {
  id: string;
  title: string;
  price: number;
  calories: number;
  image: string;
  description: string;
}

export interface IShops extends IMenuItem {
  id: string;
  shop: string;
  burgers: IMenuItem[];
  desserts: IMenuItem[];
  drinks: IMenuItem[];
}

// rules types
export interface FieldRules {
  required?: { value: boolean; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
}

export interface FormRules {
  name: FieldRules;
  email: FieldRules;
  phone: FieldRules;
  address: FieldRules;
}

// cart types
// export interface IFormValues {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

export interface IFormSubmission {
  cartData: ICartItem[];
}

export interface IHistoryTypes {
  Email: string;
  Phone: string;
}
