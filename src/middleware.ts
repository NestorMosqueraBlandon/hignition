import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || null;
  
  // Create a new RequestHeaders object based on the incoming request's headers
  const requestHeaders = new Headers(request.headers);
  
  // Set the x-user-country header
  if (country) {
    requestHeaders.set('x-user-country', country);
  } else {
    requestHeaders.set('x-user-country', 'null'); // Or handle as you see fit if country is null
  }
  
  // Return a new response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/planes', '/marketing'], // Adjusted based on the understanding that /planes is the target path
};
