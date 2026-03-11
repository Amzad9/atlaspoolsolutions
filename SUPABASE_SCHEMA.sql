-- Run this entirely inside the SQL Editor inside your Supabase project dashboard

CREATE TABLE public.service_bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id TEXT NOT NULL,
    service_id TEXT NOT NULL,
    service_title TEXT NOT NULL,
    service_duration TEXT NOT NULL,
    service_price TEXT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location_type TEXT NOT NULL,
    address_line_1 TEXT,
    address_line_2 TEXT,
    city TEXT,
    state TEXT,
    postal_code TEXT,
    project_details TEXT NOT NULL,
    status TEXT DEFAULT 'submitted' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: Ensure Row Level Security (RLS) is disabled or appropriately configured
-- for insert access if you're using the standard ANON key.
