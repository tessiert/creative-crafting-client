import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const userSignup = createAsyncThunk(
  'user/signup',
  async ({ firstname, lastname, email, username, password }, { dispatch }) => {
    const response = await fetch(baseUrl + 'user/signup', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, email, username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const data = await response.json();
    // if (data.success) {
    //   dispatch(userLogin({ username, password }));
    // }
    return data;
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ username, password }, { dispatch }) => {
    const response = await fetch(baseUrl + 'user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      return Promise.reject(response.status);
    }

    const data = await response.json();

    dispatch(setCurrentUser(data));
    return data;
  }
);

// 'dummy' is a placeholder to give access to Thunk's dispatch
export const userLogout = createAsyncThunk('user/logout', async (dummy, { dispatch }) => {
  const bearer = 'Bearer ' + localStorage.getItem('token');

  const response = await fetch(baseUrl + 'user/logout', {
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  });

  // Remove the token on client side no matter what happens with the fetch
  localStorage.removeItem('token');
  dispatch(clearCurrentUser());

  if (!response.ok) {
    return Promise.reject(
      'There was a problem with logging out on the server side, status: ' +
      response.status
    );
  }

  const data = await response.json();
  return data;
});

export const validateLogin = createAsyncThunk(
  'user/validateLogin',
  async (values, { dispatch }) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    const response = await fetch(baseUrl + 'user/checkJWTtoken', {
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status);
    }
    const data = await response.json();

    if (!data.success) {
      dispatch(clearCurrentUser());
    }

    return data;
  }
);

// initial values for user slice of state
const initialState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.id;
      localStorage.setItem('token', action.payload.token);
    },
    clearCurrentUser: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      localStorage.removeItem('token');
    }
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      localStorage.removeItem('token');
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('firstname', action.payload.firstname);
      localStorage.setItem('username', action.payload.username);
      // console.log(
      //   `Login successful for user with _id: ${action.payload.id}`
      // );
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      localStorage.removeItem('token');
      alert('Invalid login credentials. Please try again.', action.error.message);
    },
    [userLogout.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [userLogout.rejected]: (state) => {
      state.isLoading = false;
    },
    [userSignup.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [userSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [userSignup.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export const getFirstname = () => {
  return localStorage.getItem('firstname');
}

export const getUsername = () => {
  return localStorage.getItem('username');
}

export const isLoading = (state) => {
  return state.user.isLoading;
}

export const isAuthenticated = () => {
  return localStorage.getItem('token') ? true : false;
}