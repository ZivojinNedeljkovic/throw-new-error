import { z } from 'zod'
import { cookies } from 'next/headers'
import { TRPCError } from '@trpc/server'
import { router } from '../trpc'
import initFirebaseAdmin from '@/lib/firebase/init-firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import csrfProcedure from '../middleware/csrf-procedure'

const authRouter = router({
  signIn: csrfProcedure
    .input(
      z.object({
        idToken: z.string(),
      })
    )
    .mutation(async ({ input: { idToken } }) => {
      initFirebaseAdmin()
      const cookieList = cookies()
      const sessionMaxAge = 60 * 60 * 24 * 1000 * 14 // 14d
      const firebaseAuth = getAuth()

      try {
        const sessionCookie = await firebaseAuth.createSessionCookie(idToken, {
          expiresIn: sessionMaxAge,
        })
        cookieList.set('session', sessionCookie, {
          httpOnly: true,
          secure: true,
          maxAge: sessionMaxAge,
        })
      } catch (error) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          cause: process.env.ENVIRONMENT === 'development' ? error : undefined,
        })
      }
    }),
})

export default authRouter
