create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  store_name text,
  role text default 'vendor',
  source text default 'marketing_site',
  created_at timestamptz not null default now()
);

create table if not exists public.website_contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.website_leads enable row level security;
alter table public.website_contacts enable row level security;
-- Inserts are performed from server-side route handlers using the service-role key.
