import { NextResponse } from 'next/server';

export async function GET() {
  try {
  } catch (error) {
    return NextResponse.json(
      {
        message: 'error logging out',
      },
      { status: 400 }
    );
  }
}
