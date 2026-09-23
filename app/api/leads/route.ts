import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.phone) return NextResponse.json({error:'Name and phone are required.'},{status:400});
    const payload = {
      name: String(body.name).slice(0,120),
      phone: String(body.phone).slice(0,60),
      email: body.email ? String(body.email).slice(0,160) : null,
      store_name: body.store_name ? String(body.store_name).slice(0,160) : null,
      role: body.role ? String(body.role).slice(0,40) : 'vendor',
      source: 'marketing_site',
      created_at: new Date().toISOString(),
    };
    const result = await saveLead(payload);
    if (result.demo) console.info('[demo lead]', payload);
    return NextResponse.json({ok:true});
  } catch (error) {
    console.error(error);
    return NextResponse.json({error:'Unable to submit.'},{status:500});
  }
}
