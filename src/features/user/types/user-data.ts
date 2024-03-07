import type { User } from 'firebase/auth'

type UserData = Pick<
  User,
  'displayName' | 'email' | 'emailVerified' | 'phoneNumber' | 'photoURL' | 'uid'
>

export default UserData
