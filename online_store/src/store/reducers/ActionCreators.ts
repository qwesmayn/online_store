import axios from "axios";
import { IDevice } from "../../models/IDevice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IType } from "../../models/IType";
import { IBrand } from "../../models/IBrand";
import { jwtDecode } from "jwt-decode";
import { REACT_APP_API_URL } from "../../utils/const";

export const fetchDevices = createAsyncThunk(
  "device/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<{ devices: IDevice[]; count: number }>(
        `${REACT_APP_API_URL}device`
      );
      return { devices: response.data.devices, count: response.data.count };
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось получить устройства");
    }
  }
);

export const fetchDevicesById = createAsyncThunk(
  "device/fetchById",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get<{ devices: IDevice[];}>(
        `${REACT_APP_API_URL}device/${id}`
      );
      return { devices: response.data};
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось получить устройства");
    }
  }
);

export const fetchTypes = createAsyncThunk(
  "type/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<{ types: IType[] }>(
        `${REACT_APP_API_URL}type`
      );
      return { types: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось получить типы техники");
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "brand/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<{ brands: IBrand[] }>(
        `${REACT_APP_API_URL}brand`
      );
      return { brands: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось получить бренды");
    }
  }
);

export const Registration = createAsyncThunk(
  "user/registration",
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${REACT_APP_API_URL}user/auth`,
        {
          user,
        }
      );
      localStorage.setItem("token", response.data.token);
      return jwtDecode(response.data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось установить авторизацию");
    }
  }
);

export const Login = createAsyncThunk(
  "user/login",
  async (
    user: { email: string; password: string; role: "ADMIN" },
    thunkAPI
  ) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${REACT_APP_API_URL}user/auth`,
        {
          user,
        }
      );
      localStorage.setItem("token", response.data.token);
      return jwtDecode(response.data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось установить авторизацию");
    }
  }
);

export const setAuth = createAsyncThunk("user/setAuth", async (_, thunkAPI) => {
  try {
    const response = await axios.get<{ token: string }>(
      `${REACT_APP_API_URL}user/auth`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.setItem("token", response.data.token);
    return jwtDecode(response.data.token);
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось установить авторизацию");
  }
});
