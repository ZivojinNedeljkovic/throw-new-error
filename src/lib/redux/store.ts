import { securityReducer } from '@/features/security/store/security-slice'
import { userReducer } from '@/features/user/store/user-slice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      security: securityReducer,
      user: userReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
