import { configureStore } from '@reduxjs/toolkit';
import aiDataReducer from '../slice/dataSlice';

export const store = configureStore({
  reducer: {
    aiData: aiDataReducer

  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

