import { RootState } from '@/lib/redux/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isSelectionOver: false,
}

const postEditorSlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    setIsSelectionOver(state, { payload }: PayloadAction<boolean>) {
      state.isSelectionOver = payload
    },
  },
})

export const { setIsSelectionOver } = postEditorSlice.actions

export const postEditorReducer = postEditorSlice.reducer
export const selectIsSelectionOver = (state: RootState) =>
  state.postEditor.isSelectionOver
