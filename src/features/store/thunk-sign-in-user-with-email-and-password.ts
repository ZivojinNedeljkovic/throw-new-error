import { AppThunk } from '@/lib/redux/store'
import { setUser } from '../user/store/user-slice'

const thunkSignInUserWithEmailAndPassword =
  (email: string, password: string): AppThunk =>
  async (dispatch, getSate) => {
    const signIn = (
      await import('@/lib/firebase/sign-in-with-email-and-password')
    ).default

    const csrfToken = getSate().security.csrfToken

    const { user } = await signIn(email, password, csrfToken)

    dispatch(setUser(user))
  }

export default thunkSignInUserWithEmailAndPassword
