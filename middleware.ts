import {
  NextRequest,
  NextResponse,
} from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (request.nextUrl.pathname === "/") {
    response.headers.set("Cache-Control", "max-age=0, s-maxage=3600, stale-while-revalidate");
  }
  return response;
}