import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IDevice } from "../../models/IDevice";
import { fetchDevices, fetchDevicesById } from './ActionCreators';

export interface deviceState {
  isLoading: boolean;
  devices: IDevice[];
  device: IDevice | null;
  error: string;
  count: number | null;
}

const initialState: deviceState = {
  isLoading: false,
  devices: [],
  device: null,
  error: "",
  count: null,
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchDevices.pending.type, (state) => {
      state.isLoading = true;
    }),
    builder.addCase(fetchDevices.fulfilled.type, (
      state,
      action: PayloadAction<{ devices: IDevice[]; count: number }>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.devices = action.payload.devices;
      state.count = action.payload.count;
    }),
    builder.addCase(fetchDevices.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    })


    builder.addCase(fetchDevicesById.pending.type, (state) => {
      state.isLoading = true;
    });
    
    builder.addCase(fetchDevicesById.fulfilled.type, (
      state,
      action: PayloadAction<{ devices: IDevice }>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.device = action.payload.devices; // Сохранение одного устройства
    });
    
    builder.addCase(fetchDevicesById.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    
  }
});

export default deviceSlice.reducer;
