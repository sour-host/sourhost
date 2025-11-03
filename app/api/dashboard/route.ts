import { NextResponse } from 'next/server';

// This is returned when the dashboard is accessed,
// Using a GET request.
export async function GET() {
  return NextResponse.json({
    message: 'Hello from Sour.Host!',
    success: true,
    data: {
      stats: {
        users: 0,
        active: 0,
      }
    }
  });
}
