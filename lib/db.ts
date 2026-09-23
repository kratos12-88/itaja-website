type Payload = Record<string, unknown>;

async function supabaseInsert(table: string, payload: Payload) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { demo: true };

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase insert failed: ${message}`);
  }

  return { demo: false };
}

export async function saveLead(payload: Payload) {
  return supabaseInsert('website_leads', payload);
}

export async function saveContact(payload: Payload) {
  return supabaseInsert('website_contacts', payload);
}
