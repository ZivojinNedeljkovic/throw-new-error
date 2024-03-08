import { z } from 'zod'
import { procedure } from '../trpc'
import { cookies } from 'next/headers'
import { TRPCError } from '@trpc/server'

const csrfProcedure = procedure
  .input(
    z.object({
      csrfToken: z.string(),
    })
  )
  .use(opts => {
    const cookieCsrfToken = cookies().get('csrfToken')?.value
    
    if (cookieCsrfToken && cookieCsrfToken === opts.input.csrfToken) {
      return opts.next()
    }

    throw new TRPCError({
      code: 'UNAUTHORIZED',
      cause: 'Invalid CSRF token',
    })
  })

export default csrfProcedure
