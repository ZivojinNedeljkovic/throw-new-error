import { signInWithEmailAndPassword as _signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase-client'
import trpc from '../trpc/trpc-client'
import type UserData from '@/features/user/types/user-data'

async function signInWithEmailAndPassword(
  email: string,
  password: string,
  csrfToken: string
) {
  const userCredential = await _signInWithEmailAndPassword(
    auth,
    email,
    password
  )
  const idToken = await userCredential.user.getIdToken()

  try {
    await trpc.auth.signIn.mutate({ idToken, csrfToken })
  } catch (error) {
    throw new Error('Failed to sign in user')
  }

  const { uid, emailVerified, displayName, phoneNumber, photoURL } =
    userCredential.user

  const userData: UserData = {
    uid: uid,
    emailVerified: emailVerified,
    displayName: displayName,
    email,
    phoneNumber: phoneNumber,
    photoURL: photoURL,
  }

  return { user: userData }
}

export default signInWithEmailAndPassword
