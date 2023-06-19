import { NextRequest, NextResponse } from 'next/server';

export async function middleware() {
  const response = NextResponse.next();

  response.headers.append('Access-Control-Allow-Origin', '*');

  return response;
}

export const config = {
  matcher: '/:path*',
};
