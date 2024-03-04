import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  csrfToken: '',
}

const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    setCsrfToken(state, { payload }: PayloadAction<string>) {
      state.csrfToken = payload
    },
  },
})

export const { setCsrfToken } = securitySlice.actions

export const securityReducer = securitySlice.reducer
