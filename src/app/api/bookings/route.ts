import { createClient } from "@supabase/supabase-js";
import { format, parseISO } from "date-fns";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { bookingFormSchema } from "@/lib/booking";

import { siteContact } from "../../../components/siteConfig";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = bookingFormSchema.parse(json);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    let savedToDatabase = false;
    let emailSent = false;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase.from("service_bookings").insert({
        service_id: payload.serviceId,
        service_title: payload.serviceTitle,
        service_duration: payload.serviceDuration,
        service_price: payload.servicePrice,
        appointment_date: payload.appointmentDate,
        appointment_time: payload.appointmentTime,
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        location_type: payload.locationType,
        address_line_1: payload.addressLine1 || null,
        address_line_2: payload.addressLine2 || null,
        city: payload.city || null,
        state: payload.state || null,
        postal_code: payload.postalCode || null,
        project_details: payload.projectDetails,
        status: "submitted",
      });

      if (error) {
        console.error("Supabase booking insert failed", error);
      } else {
        savedToDatabase = true;
      }
    }

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const appointmentLabel = `${format(parseISO(payload.appointmentDate), "MMMM d, yyyy")} at ${payload.appointmentTime}`;
      const destination =
        process.env.BOOKING_NOTIFICATION_EMAIL ?? siteContact.emailShowroom.toLowerCase();
      const emailFrom =
        process.env.RESEND_FROM_EMAIL ?? "Atlas Pool Solutions <onboarding@resend.dev>";

      const { error } = await resend.emails.send({
        from: emailFrom,
        to: [destination],
        replyTo: payload.email,
        subject: `New booking: ${payload.serviceTitle} on ${appointmentLabel}`,
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
            <h2>New Atlas Pool Solutions Booking</h2>
            <p><strong>Service:</strong> ${payload.serviceTitle}</p>
            <p><strong>Appointment:</strong> ${appointmentLabel}</p>
            <p><strong>Duration:</strong> ${payload.serviceDuration} | ${payload.servicePrice}</p>
            <hr />
            <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Phone:</strong> ${payload.phone}</p>
            <p><strong>Location Type:</strong> ${payload.locationType}</p>
            <p><strong>Address:</strong> ${[
              payload.addressLine1,
              payload.addressLine2,
              payload.city,
              payload.state,
              payload.postalCode,
            ]
              .filter(Boolean)
              .join(", ") || "Showroom appointment"}</p>
            <p><strong>Project Details:</strong><br />${payload.projectDetails.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend email send failed", error);
      } else {
        emailSent = true;
      }
    }

    return NextResponse.json({
      emailSent,
      message: "Booking received.",
      savedToDatabase,
    });
  } catch (error) {
    console.error("Booking submission failed", error);

    return NextResponse.json(
      {
        error: "Unable to process your booking right now. Please try again.",
      },
      { status: 400 },
    );
  }
}
