import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";
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

    // Generate a unified Order ID and creation date to be used for both DB and Emails
    const orderId = `C-${crypto.randomUUID().replace(/-/g, "").substring(0, 16).toUpperCase()}`;
    const creationDate = format(new Date(), "yyyy-MM-dd");

    let savedToDatabase = false;
    let emailSent = false;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("service_bookings").insert({
        order_id: orderId,
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
      const appointmentLabel = `${format(parseISO(payload.appointmentDate), "eeee, MMMM d, yyyy")} at ${payload.appointmentTime}`;
      const destination =
        process.env.BOOKING_NOTIFICATION_EMAIL || siteContact.emailShowroom.toLowerCase();
      const emailFrom =
        process.env.RESEND_FROM_EMAIL || "Atlas Pool Solutions <onboarding@resend.dev>";

      const fullAddress = payload.locationType === 'showroom'
            ? '3693 San Gabriel River Parkway, Pico Rivera, CA 90660, United States'
            : [payload.addressLine1, payload.addressLine2, payload.city, payload.state, payload.postalCode].filter(Boolean).join(", ");

      const { error } = await resend.emails.send({
        from: emailFrom,
        to: [destination],
        replyTo: payload.email,
        subject: `Booking Confirmed: ${payload.serviceTitle} for ${payload.firstName}`,
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; color: #333333; max-width: 800px; line-height: 1.5; font-size: 14px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
              <tr>
                <td width="50%" valign="top" style="padding-right: 20px;">
                  <p style="margin: 0 0 20px 0;">Hello ${payload.firstName},</p>
                  <p style="margin: 0;">Thank you for booking with us. Please find<br />your order and booking details below.</p>
                </td>
                <td width="50%" valign="top" align="right">
                  <p style="margin: 0 0 20px 0;">Atlas Pool Solutions, Inc.</p>
                  <p style="margin: 0;">3693 San Gabriel River Parkway, Pico<br />Rivera, CA 90660, United States</p>
                </td>
              </tr>
            </table>

            <div style="background-color: #E6E6E6; padding: 10px; text-align: center; margin-bottom: 35px;">
              <strong>Order:</strong> ${orderId} &nbsp;|&nbsp; <strong>Date:</strong> ${creationDate}
            </div>

            <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 15px 0; color: #444444;">Order Summary</h2>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 45px;">
              <tr>
                <td width="200" valign="top" style="color: #666666;">Order Total:</td>
                <td valign="top">${payload.servicePrice === 'Free' ? 'Free' : payload.servicePrice}</td>
              </tr>
            </table>

            <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 15px 0; color: #444444;">Booking Summary</h2>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 50px;">
              <tr>
                <td width="200" valign="top" style="color: #666666; padding-bottom: 15px;">What:</td>
                <td valign="top" style="padding-bottom: 15px;">${payload.serviceTitle}</td>
              </tr>
              <tr>
                <td width="200" valign="top" style="color: #666666; padding-bottom: 15px;">When:</td>
                <td valign="top" style="padding-bottom: 15px;">${appointmentLabel}<br />(America/Los_Angeles)</td>
              </tr>
              <tr>
                <td width="200" valign="top" style="color: #666666; padding-bottom: 15px;">Duration:</td>
                <td valign="top" style="padding-bottom: 15px;">${payload.serviceDuration}</td>
              </tr>
              <tr>
                <td width="200" valign="top" style="color: #666666; padding-bottom: 15px;">Where:</td>
                <td valign="top" style="padding-bottom: 15px;">${fullAddress}</td>
              </tr>
            </table>

            <p style="text-align: center; font-style: italic; color: #555555; margin-bottom: 30px; font-size: 13px;">
              This email was sent via GoDaddy's Online Appointments on behalf of the business you booked with. Please verify all details before taking any action.
            </p>

            <p style="font-size: 13px; color: #444444;">
              If you need any assistance with your booking, please email us at<br />
              <a href="mailto:fabian@atlaspoolsolutions.com" style="color: #0b5cff; text-decoration: none;">fabian@atlaspoolsolutions.com</a> or call us at (310) 341-6123.
            </p>
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
