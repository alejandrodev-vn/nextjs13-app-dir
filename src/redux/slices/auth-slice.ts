import { createSlice } from '@reduxjs/toolkit'
import { IUserInfo } from '@/types/auth'

// Type for our state
export interface AuthState {
  userInfo: IUserInfo | undefined | null
}
// userInfo === undefined is checking auth
// userInfo === null is not loggin
// userInfo === {} is logged
// Initial state
const initialState: AuthState = {
  userInfo: undefined,
}

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    // Action to set the authentication status
    setInfoUser(state, action) {
      // state.isCheckingAuth = action.payload
    },
  },
})

// Reducer
export const { reset } = authSlice.actions
export default authSlice.reducer
