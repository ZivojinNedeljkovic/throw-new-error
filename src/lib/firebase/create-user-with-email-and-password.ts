import {
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from './firebase-client'

async function createUserWithEmailAndPassword(email: string, password: string) {
  const firebaseResult = await _createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await sendEmailVerification(firebaseResult.user)
  return firebaseResult
}

export default createUserWithEmailAndPassword
