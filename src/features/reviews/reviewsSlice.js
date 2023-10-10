import { createSlice } from '@reduxjs/toolkit';
import { REVIEWS } from '../../app/assets/shared/REVIEWS';

const initialState = {
  reviewsArray: REVIEWS
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      console.log('addReview action.payload:', action.payload);
      console.log('addReview state.reviewsArray:', state.reviewsArray);
      const newReview = {
        id: state.reviewsArray.length + 1,
        ...action.payload
      };
      state.reviewsArray.push(newReview);
    }
  }
});

export const reviewsReducer = reviewsSlice.reducer;

export const { addReview } = reviewsSlice.actions;

export const selectReviewsByCategory = (category) => (state) => {
  return state.reviews.reviewsArray.filter(
    (review) => review.category === category
  );
};

// export const selectReviewsByCategory = (category) => {
//   return REVIEWS.filter(
//     (review) => review.category === category
//   );
// };