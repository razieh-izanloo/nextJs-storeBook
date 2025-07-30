import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app';
import cart from './slices/cart';

export const makeStore = () => {

  return configureStore({
    reducer: {
        app,
        cart
    },
    devTools: process.env.NODE_ENV === 'development',
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']