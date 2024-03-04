import { userReducer } from '@auth/store/user-slice'
import { securityReducer } from '@features/security/store/security-slice'
import { layoutReducer } from '@layout/store/layout-slice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      security: securityReducer,
      layout: layoutReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
