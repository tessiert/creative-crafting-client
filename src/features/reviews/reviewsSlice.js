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

// post a new review
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const response = await fetch(
      baseUrl + 'reviews',
      {
        method: 'POST',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(review)
      }
    );
    if (!response.ok) {
      return Promise.reject(response.status);
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
    },
    [addReview.fulfilled]: (state, action) => {
      const newReview = action.payload;
      state.reviewsArray.push(newReview);
    },
    [addReview.rejected]: (state, action) => {
      alert(
        'Your review could not be posted\nError: ' +
        (action.error ? action.error.message : 'Fetch failed')
      );
    }
  }
});

export const reviewsReducer = reviewsSlice.reducer;

export const selectAllReviews = (state) => {
  return state.reviews.reviewsArray;
};

export const selectReviewsByCategory = (category) => (state) => {
  const review = state.reviews.reviewsArray.filter(
    (review) => review.category === category
  );
  return review;
};