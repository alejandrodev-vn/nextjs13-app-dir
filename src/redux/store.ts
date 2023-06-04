import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth-slice'
import { userApi } from './services/auth-api'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // [userApi.reducerPath]: userApi.reducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({}).concat([userApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
