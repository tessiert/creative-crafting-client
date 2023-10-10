import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});