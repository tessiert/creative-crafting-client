import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const response = await fetch(baseUrl + 'orders');

    if (!response.ok) {
      return Promise.reject('Unable to fetch orders, status: ' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

// Log a new order to the DB
export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const response = await fetch(
      baseUrl + 'orders',
      {
        method: 'POST',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(order)
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
  ordersArray: [],
  isLoading: true,
  errMsg: ''
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.ordersArray = action.payload;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch of orders failed';
    },
    [addOrder.fulfilled]: (state, action) => {
      const newOrder = action.payload;
      state.ordersArray.push(newOrder);
    },
    [addOrder.rejected]: (state, action) => {
      alert(
        'Your order could not be recorded\nError: ' +
        (action.error ? action.error.message : 'Fetch failed')
      );
    }
  }
});

export const ordersReducer = ordersSlice.reducer;

export const selectAllOrders = (state) => {
  return state.orders.ordersArray;
};

export const selectOrdersByUsername = (username) => (state) => {
  const orders = state.orders.ordersArray.filter(
    (orders) => orders.username === username
  );
  return orders;
};