'use client'
import { AppStore, makeStore } from '@/lib/redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode
  //   user: UserData | null
  //   csrfToken: string
  //   theme?: Theme
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    // if (user) {
    //   storeRef.current.dispatch(setUser(user))
    // }
    // if (csrfToken) {
    //   storeRef.current.dispatch(setCsrfToken(csrfToken))
    // }
    // if (theme) storeRef.current.dispatch(setTheme(theme))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
