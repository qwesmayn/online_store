import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./ActionCreators";
import { IBrand } from "../../models/IBrand";

export interface brandState {
  isLoading: boolean;
  brands: IBrand[];
  error: string;
}

const initialState: brandState = {
  isLoading: false,
  brands: [],
  error: "",
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.pending.type, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchBrands.fulfilled.type, (
      state,
      action: PayloadAction<{ brands: IBrand[]}>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.brands = action.payload.brands;
    }),
    builder.addCase(fetchBrands.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});

export default brandSlice.reducer;
