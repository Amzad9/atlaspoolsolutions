# Booking Setup

The `Services` page now includes a 3-step booking modal:

1. Select service, date, and time
2. Enter customer details
3. Enter project/location details and submit

## Environment Variables

Add these variables to your local environment file:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=Atlas Pool Solutions <onboarding@resend.dev>
BOOKING_NOTIFICATION_EMAIL=showroom@atlaspoolsolutions.com
```

## Supabase

Run the SQL in `supabase/service_bookings.sql` to create the bookings table.

Recommended:

- Use `SUPABASE_SERVICE_ROLE_KEY` on the server for inserts.
- Keep `NEXT_PUBLIC_SUPABASE_ANON_KEY` for client-side Supabase usage if needed later.

## Resend

- Set `RESEND_API_KEY`
- Set `RESEND_FROM_EMAIL` to a verified sender/domain for production
- `BOOKING_NOTIFICATION_EMAIL` is where new booking notifications are delivered

## Current Behavior

- If Supabase is configured, bookings are inserted into `service_bookings`.
- If Resend is configured, a booking notification email is sent.
- If one or both are missing, the UI still completes in demo mode so the booking flow can be tested.
