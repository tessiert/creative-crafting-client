import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import { userReducer } from '../features/user/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});