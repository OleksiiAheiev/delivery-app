import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { getAllShops } from '../api/api';
import { IShops } from '../types/types';
import { IChildrenProps } from '../layouts/MainTemplate';

interface IAppContext {
  shops: IShops[];
  error: string | null;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default function AppProvider({ children }: IChildrenProps) {
  const [shops, setShops] = useState<IShops[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllShops.fetch();
        const { data } = response;
        setShops(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);
  
  return (
    <AppContext.Provider value={{ shops, error }}>
      {children}
    </AppContext.Provider>
  );
}
