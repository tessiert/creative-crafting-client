import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    const response = await fetch(baseUrl + 'reviews');
    if (!response.ok) {
      return Promise.reject('Unable to fetch reviews, status: ' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  reviewsArray: [],
  isLoading: true,
  errMsg: ''
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.reviewsArray = action.payload;
    },
    [fetchReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch of reviews failed';
    }
  }
});

export const reviewsReducer = reviewsSlice.reducer;

export const selectAllReviews = (state) => {
  return state.reviews.reviewsArray;
};

export const selectReviewsByCategory = (category) => (state) => {
  return state.reviews.reviewsArray.filter(
    (review) => review.category === category
  );
};

// import { createSlice } from '@reduxjs/toolkit';
// import { REVIEWS } from '../../app/assets/shared/REVIEWS';

// const initialState = {
//   reviewsArray: REVIEWS
// };

// const reviewsSlice = createSlice({
//   name: 'reviews',
//   initialState,
//   reducers: {
//     addReview: (state, action) => {
//       console.log('addReview action.payload:', action.payload);
//       console.log('addReview state.reviewsArray:', state.reviewsArray);
//       const newReview = {
//         id: state.reviewsArray.length + 1,
//         ...action.payload
//       };
//       state.reviewsArray.push(newReview);
//     }
//   }
// });

// export const reviewsReducer = reviewsSlice.reducer;

// export const { addReview } = reviewsSlice.actions;

// export const selectReviewsByCategory = (category) => (state) => {
//   return state.reviews.reviewsArray.filter(
//     (review) => review.category === category
//   );
// };

// export const selectReviewsByCategory = (category) => {
//   return REVIEWS.filter(
//     (review) => review.category === category
//   );
// };

