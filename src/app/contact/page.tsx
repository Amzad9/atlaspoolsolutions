import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Atlas Pool Solutions",
  description:
    "Contact Atlas Pool Solutions to schedule a showroom appointment for commercial pool, spa, deck, and water feature renovations.",
};

const contactOptions = [
  {
    title: "Call Or Text",
    body: "Speak directly with Atlas Pool Solutions about renovation goals, appointment scheduling, and showroom availability.",
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: <Phone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Showroom Email",
    body: "Use the showroom email for consultation requests, renovation planning, and appointment coordination.",
    value: siteContact.emailShowroom,
    href: `mailto:${siteContact.emailShowroom}`,
    icon: <Mail className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Operations Support",
    body: "Current clients can use operations support for work orders, service coordination, and ongoing project communication.",
    value: siteContact.emailOperations,
    href: `mailto:${siteContact.emailOperations}`,
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

const visitReasons = [
  "Review renovation priorities and budget considerations",
  "Discuss decks, fountains, waterfalls, and water feature upgrades",
  "Evaluate equipment improvements for cleaner, more efficient operation",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pb-0">
        <SiteHeader activeLabel="Contact" />

        <section className="relative overflow-hidden bg-white bg-[url('https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="absolute inset-0 bg-linear-to-r from-white/99 via-black/ to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1f252d] shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:text-sm">
                Contact Atlas Pool Solutions
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] text-slate-900 sm:text-6xl lg:text-6xl">
                Better Yet,
                <br />
                Call, Text, Or Visit Us
              </h2>
              <p className="mt-5 max-w-176 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Schedule a consultation with Atlas Pool Solutions to discuss renovations, equipment
                upgrades, deck improvements, and long-term planning for your commercial pool or spa
                amenity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={siteContact.phoneHref}
                  className="w-full rounded-full border border-[#4682B4] bg-[#4682B4] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_16px_rgba(70,130,180,0.35)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#1f252d] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:bg-slate-50 sm:w-auto sm:px-8 sm:text-base"
                >
                  Email Showroom
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {contactOptions.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-[#3c73a1] bg-[#4682B4] p-5 shadow-[0_16px_34px_rgba(70,130,180,0.25)] transition hover:brightness-105"
                >
                  <span className="inline-flex rounded-full bg-white/20 p-3 text-white">
                    {item.icon}
                  </span>
                  <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-white/90">{item.body}</p>
                  <p className="mt-5 wrap-break-word whitespace-normal text-sm font-black uppercase tracking-[0.16em] text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="rounded-[24px] border border-[#3c73a1] bg-[#4682B4] p-6 shadow-[0_18px_44px_rgba(70,130,180,0.25)] lg:col-span-7 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Showroom Appointment
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] text-white sm:text-4xl lg:text-5xl">
                  Start With A Clear Project Conversation
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Our showroom consultations are designed to help clients define priorities, compare
                  materials, evaluate improvement options, and move forward with greater clarity and
                  confidence.
                </p>

                <div className="mt-7 grid gap-3">
                  {visitReasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-4"
                    >
                      <span className="mt-0.5 rounded-full bg-white/20 p-2 text-white">
                        <Send className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                      <p className="text-base leading-7 text-white/90">{reason}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${siteContact.emailShowroom}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#1f252d] shadow-[0_0_14px_rgba(255,255,255,0.25)] transition hover:bg-slate-50 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Book Via Email
                  </a>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
                  <div className="flex items-start gap-3">
                    <span className="rounded-full bg-[#4682B4]/10 p-3 text-[#4682B4]">
                      <MapPin className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4682B4]">
                        Address
                      </p>
                      <p className="mt-3 text-lg font-black text-slate-900">{siteContact.addressLines[0]}</p>
                      <p className="mt-2 text-base leading-7 text-slate-700">
                        {siteContact.addressLines[1]}
                        <br />
                        {siteContact.addressLines[2]}
                      </p>
                      <a
                        href={siteContact.directionsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#4682B4] transition hover:brightness-110"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
                  <div className="flex items-start gap-3">
                    <span className="rounded-full bg-[#4682B4]/10 p-3 text-[#4682B4]">
                      <Clock3 className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div className="w-full">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4682B4]">
                        Hours
                      </p>
                      <div className="mt-4 space-y-3">
                        {siteContact.businessHours.map((item) => (
                          <div
                            key={item}
                            className="flex flex-col gap-1 border-b border-slate-200 pb-3 text-sm text-slate-700 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                          >
                            <span>{item.split(" - ")[0]}</span>
                            <span className="font-semibold uppercase tracking-widest text-slate-600">
                              {item.split(" - ")[1]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-10 sm:px-8 sm:pb-14">
          <div className="container mx-auto">
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-[0_18px_44px_rgba(15,23,42,0.10)]">
              <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4682B4]">
                  Map
                </p>
                <h2 className="text-3xl font-black leading-[0.95] text-slate-900 sm:text-4xl">
                  Visit Our Showroom
                </h2>
                <p className="max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  Visit Atlas Pool Solutions in Pico Rivera for showroom consultations and project
                  planning meetings.
                </p>
              </div>

              <div className="h-[320px] w-full sm:h-[380px] lg:h-[420px]">
                <iframe
                  title="Atlas Pool Solutions showroom map"
                  src="https://www.google.com/maps?q=3693%20San%20Gabriel%20River%20Parkway%2C%20Pico%20Rivera%2C%20California%2090660&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
