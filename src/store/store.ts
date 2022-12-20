import { configureStore } from '@reduxjs/toolkit';
import { ProductCardReducer } from '../components/productCard/productCardSlice';

import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
    reducer: {
        testPage: testPageReducer,
        productCard:ProductCardReducer
    }, 
});

export type RootState = ReturnType<typeof store.getState>;
