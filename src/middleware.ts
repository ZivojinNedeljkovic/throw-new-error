import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  let csrfToken = request.cookies.get('csrfToken')?.value

  if (csrfToken === undefined) {
    csrfToken = uuidv4()

    response.cookies.set({
      name: 'csrfToken',
      value: csrfToken,
      httpOnly: true,
      secure: true,
    })
  }

  response.headers.append('csrfToken', csrfToken)

  return response
}
