// import React, { useState } from 'react';
// import { Box, Tab, Tabs, Typography, styled } from '@mui/material';
// import { IShops } from './types/types';

// export interface IShopsNavigationProps {
//   shops: IShops[];
//   // eslint-disable-next-line no-unused-vars
//   onShopClick: (shop: IShops) => void;
// }

// export const StyledShopNav = styled(Box)(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   width: '200px',
//   overflow: 'auto',
//   padding: '20px 30px 0',
//   border: '1px solid #000',
//   borderRadius: '10px',
//   textAlign: 'center',
//   '& > :not(:last-child)': {
//     marginBottom: '20px',
//   },
// }));

// export const StyledTypography = styled(Typography)(() => ({
//   fontWeight: '600',
// }));

// export default function Screen({ shops }: IShopsNavigationProps) {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (newTab: any) => {
//     setActiveTab(newTab);
//   };

//   return (
//     <StyledShopNav>
//       <StyledTypography variant='h6'>Shops:</StyledTypography>
//       <Tabs value={activeTab} onChange={handleTabChange}>
//         {shops.map((shop) => (
//           <Tab key={shop.id} label={shop.shop} />
//         ))}
//       </Tabs>
//       {shops.map((shop, index) => (
//         <div key={shop.id} hidden={activeTab !== index}>
//           {activeTab === index && (
//             <>
//               {shop.burgers.map((burger, id) => (
//                 <div key={`${burger.title}-${id}`}>
//                   <p>Назва: {burger.title}</p>
//                   <p>Ціна: {burger.price}</p>
//                   <p>Калорії: {burger.calories}</p>
//                   <img src={burger.image} alt={burger.title} />
//                 </div>
//               ))}
//               {/* Додайте відображення для інших продуктів магазину */}
//             </>
//           )}
//         </div>
//       ))}
//     </StyledShopNav>
//   );
// }

export const num = 1;
