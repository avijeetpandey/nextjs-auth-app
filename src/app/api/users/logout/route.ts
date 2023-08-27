import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logged out successfully',
    });

    response.cookies.set('token', '', { expires: new Date(0) });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: 'error logging out',
      },
      { status: 400 }
    );
  }
}
