import connect from '@/db';
import UserModel from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;

    console.log({ email, password });

    // check if the user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: 'user doesnot exists',
        },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user?.password);

    if (!validPassword) {
      return NextResponse.json(
        {
          message: 'Invalid credentials',
        },
        { status: 400 }
      );
    }

    // creating json token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });
    const response = NextResponse.json(
      {
        message: 'Logged in successfully',
      },
      { status: 200 }
    );

    response.cookies.set('token', token, { httpOnly: true });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
