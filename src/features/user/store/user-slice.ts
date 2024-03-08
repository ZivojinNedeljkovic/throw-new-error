import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import UserData from '../types/user-data'
import { RootState } from '@/lib/redux/store'

const initialState: UserData = {
  uid: '',
  emailVerified: false,
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserData>) {
      return payload
    },
    setUserEmail(
      state,
      { payload }: PayloadAction<{ email: string; emailVerified?: boolean }>
    ) {
      state.email = payload.email
      state.emailVerified = payload.emailVerified ?? false
    },
  },
})

export const { setUser, setUserEmail } = userSlice.actions

export const userReducer = userSlice.reducer

export const selectUserEmail = (state: RootState) => state.user.email
export const selectIsSignedIn = (state: RootState) => !!state.user.uid
export const selectProfilePhoto = (state: RootState) => state.user.photoURL
