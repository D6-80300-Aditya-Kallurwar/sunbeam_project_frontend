import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import seatSlice from './features/seatSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    seat: seatSlice
  },
})
