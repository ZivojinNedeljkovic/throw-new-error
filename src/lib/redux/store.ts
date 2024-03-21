import { postEditorReducer } from '@/features/post/store/editor-slice'
import { securityReducer } from '@/features/security/store/security-slice'
import { userReducer } from '@/features/user/store/user-slice'
import {
  type ThunkAction,
  type UnknownAction,
  configureStore,
} from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      security: securityReducer,
      user: userReducer,
      postEditor: postEditorReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>
