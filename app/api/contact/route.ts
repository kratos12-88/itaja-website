import { NextResponse } from 'next/server';
import { saveContact } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.email || !body?.message) return NextResponse.json({error:'Missing fields.'},{status:400});
    const payload = {
      name: String(body.name).slice(0,120),
      email: String(body.email).slice(0,160),
      message: String(body.message).slice(0,4000),
      created_at: new Date().toISOString(),
    };
    const result = await saveContact(payload);
    if (result.demo) console.info('[demo contact]', payload);
    return NextResponse.json({ok:true});
  } catch (error) {
    console.error(error);
    return NextResponse.json({error:'Unable to submit.'},{status:500});
  }
}
