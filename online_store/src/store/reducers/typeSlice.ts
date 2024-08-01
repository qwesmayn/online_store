import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IType } from "../../models/IType";
import { fetchTypes } from "./ActionCreators";

export interface typeState {
  isLoading: boolean;
  types: IType[];
  error: string;
}

const initialState: typeState = {
  isLoading: false,
  types: [],
  error: "",
};

export const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTypes.pending.type, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchTypes.fulfilled.type, (
      state,
      action: PayloadAction<{ types: IType[]}>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.types = action.payload.types;
    }),
    builder.addCase(fetchTypes.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});

export default typeSlice.reducer;
