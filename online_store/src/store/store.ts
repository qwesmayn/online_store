import brandReduce from './reducers/brandSlice';
import typeReduce from './reducers/typeSlice';
import deviceReducer from './reducers/deviceSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'


const rootReducer = combineReducers({
    userReducer,
    deviceReducer,
    typeReduce,
    brandReduce,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch