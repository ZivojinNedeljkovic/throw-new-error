import { AppThunk } from '@/lib/redux/store'
import { setUserEmail } from '../user/store/user-slice'

const thunkSignUpUserWithEmailAndPassword =
  (email: string, password: string): AppThunk =>
  async dispatch => {
    const signUp = (
      await import('@/lib/firebase/create-user-with-email-and-password')
    ).default

    await signUp(email, password)
    dispatch(setUserEmail({ email, emailVerified: false }))
  }

export default thunkSignUpUserWithEmailAndPassword
