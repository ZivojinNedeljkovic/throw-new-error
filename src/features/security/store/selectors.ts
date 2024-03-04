import { RootState } from '@/lib/redux/store'

export const selectCsrfToken = (state: RootState) => state.security.csrfToken
