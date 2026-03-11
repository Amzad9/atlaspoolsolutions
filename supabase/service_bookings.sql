create table if not exists public.service_bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'submitted',
  service_id text not null,
  service_title text not null,
  service_duration text not null,
  service_price text not null,
  appointment_date date not null,
  appointment_time text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  location_type text not null,
  address_line_1 text,
  address_line_2 text,
  city text,
  state text,
  postal_code text,
  project_details text not null
);

alter table public.service_bookings enable row level security;

create policy "Allow service-role full access on service_bookings"
on public.service_bookings
as permissive
for all
to service_role
using (true)
with check (true);
