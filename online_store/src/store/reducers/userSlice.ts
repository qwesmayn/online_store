import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { setAuth } from './ActionCreators'

export interface userState {
  isAuth : boolean,
  isLoading : boolean,
  user : IUser[],
  error : string,
}

const initialState: userState = {
  isAuth : false,
  isLoading : false,
  user : [],
  error : "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAuth.pending.type, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(setAuth.fulfilled.type, (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = action.payload;
    }),
    builder.addCase(setAuth.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export default userSlice.reducer