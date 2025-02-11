import { NextResponse } from 'next/server';

const CONTENTSTACK_API_KEY = process.env.CONTENTSTACK_API_KEY;
const CONTENTSTACK_MANAGEMENT_TOKEN = process.env.CONTENTSTACK_MANAGEMENT_TOKEN;

export async function GET() {
  const response = await fetch(
    `https://api.contentstack.io/v3/content_types?include_count=false`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "api_key": CONTENTSTACK_API_KEY,
        "authorization": CONTENTSTACK_MANAGEMENT_TOKEN,
      } as any,
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch content types" }, { status: response.status });
  }

  const data = await response.json();

  const res = NextResponse.json(data.content_types || []);
  res.headers.set("Cache-Control", "max-age=0, s-maxage=86400, stale-while-revalidate");
  return res;
}