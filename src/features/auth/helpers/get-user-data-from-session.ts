import UserData from '@/features/user/types/user-data'
import initFirebaseAdmin from '@/lib/firebase/init-firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import { cookies } from 'next/headers'

async function getUserDataFromSession() {
  let user: UserData | null = null

  const session = cookies().get('session')?.value
  if (session) {
    initFirebaseAdmin()
    const auth = getAuth()

    const idToken = await auth.verifySessionCookie(session, true)
    const userRecord = await auth.getUser(idToken.uid)

    user = {
      uid: userRecord.uid,
      email: userRecord.email ?? null,
      emailVerified: userRecord.emailVerified,
      phoneNumber: userRecord.phoneNumber ?? null,
      photoURL: userRecord.photoURL ?? null,
      displayName: userRecord.displayName ?? null,
    }
  }
  return user
}

export default getUserDataFromSession
