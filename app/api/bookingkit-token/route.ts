import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import routes from '@/lib/routes';

export async function POST(req: NextRequest) {
  try {
    const response = await axios.post(routes.auth.bookintKitToken, {
      grant_type: 'client_credentials',
      client_id: process.env.NEXT_PRIVATE_CLIENT_ID,
      client_secret: process.env.NEXT_PRIVATE_CLIENT_SECRET_KEY,
    });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, details: error.response?.data },
      { status: error.response?.status || 500 }
    );
  }
}