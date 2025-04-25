import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  email: '',
  age: 0,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    name: (state, action) => {
      state.name = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
    age: (state, action) => {
      state.age = action.payload;
    },
  },
});


export const { name, email, age } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
