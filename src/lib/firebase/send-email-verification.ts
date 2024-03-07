import { sendEmailVerification as _sendEmailVerification } from 'firebase/auth'
import { auth } from './firebase-client'

async function sendEmailVerification() {
  if (auth.currentUser === null) throw new Error('Not authenticated')

  await _sendEmailVerification(auth.currentUser)
}

export default sendEmailVerification
