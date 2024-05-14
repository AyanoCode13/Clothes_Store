import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('middleware')
    console.log(request.cookies.get("next-auth.session-token"))
    if(request.cookies.get("next-auth.session-token")){
        return NextResponse.next()
    }
  return NextResponse.redirect(new URL('/api/auth/signin', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
}
