import connect from '@/db';
import UserModel from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

// creating database connections
connect();

// Handling Post request
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { username, email, password } = requestBody;

    console.log({ username, email, password });

    // if user already exists
    const user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: 'User already exists',
        code: 400,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // save the user to the database
    const newUser = await UserModel({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: 'user signed up successfully',
      savedUser,
      code: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
        code: 500,
      },
      { status: 500 }
    );
  }
}
