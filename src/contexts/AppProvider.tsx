/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { getAllShops } from '../api/api';
import { IMenuItem, IShops } from '../types/types';
import { IChildrenProps } from '../layouts/MainTemplate';

interface IAppContext {
  shops: IShops[];
  error: string | null;
  loading: boolean;
  activeShop: IShops | null;
  searchResults: IMenuItem[] | null;
  handleShopClick: (shop: IShops) => void;
  performSearch: (searchTerm: string) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

// Custom hook for accessing the application context.
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
  const [loading, setLoading] = useState(true);
  const [activeShop, setActiveShop] = useState<IShops | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMenuItem[] | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Setting the first shop as active if shops are available.
  useEffect(() => {
    if (shops.length > 0) {
      setActiveShop(shops[0]);
    }
  }, [shops]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getAllShops.fetch();
      const { data } = response;

      setShops(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred while fetching data');
      setLoading(false);
    }
  };

  const handleShopClick = useCallback((shop: IShops) => {
    setActiveShop(shop);
  }, []);

  // Combining all menu items from the active shop.
  const allItems = useMemo(() => {
    return activeShop
      ? [...activeShop.burgers, ...activeShop.drinks, ...activeShop.desserts]
      : [];
  }, [activeShop]);

  // Setting search results when the active shop changes.
  useEffect(() => {
    if (activeShop) {
      setSearchResults(allItems);
    }
  }, [activeShop]);

  const performSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  // Updating search results based on the search term.
  useEffect(() => {
    const searchResults = allItems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(searchResults);
  }, [searchTerm, allItems]);

  return (
    <AppContext.Provider value={{
      shops,
      error,
      loading,
      activeShop,
      handleShopClick,
      performSearch,
      searchResults,
    }}>
      {children}
    </AppContext.Provider>
  );
}
