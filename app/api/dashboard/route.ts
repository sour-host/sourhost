import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Next.js!',
    success: true,
    data: {
      stats: {
        users: 0,
        active: 0,
      }
    }
  });
}
