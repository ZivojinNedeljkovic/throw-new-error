'use client'
import { setCsrfToken } from '@/features/security/store/security-slice'
import { setUser } from '@/features/user/store/user-slice'
import UserData from '@/features/user/types/user-data'
import { AppStore, makeStore } from '@/lib/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
  csrfToken: string
  user: UserData | null
  //   theme?: Theme
}

export default function StoreProvider({ children, csrfToken, user }: Props) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setCsrfToken(csrfToken))
    if (user) {
      storeRef.current.dispatch(setUser(user))
    }
    // if (theme) storeRef.current.dispatch(setTheme(theme))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
