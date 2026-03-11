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
    body: "Reach Atlas Pool Solutions directly to talk through your renovation goals, scheduling, and showroom availability.",
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: <Phone className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Showroom Email",
    body: "Use the showroom email for consultations, renovation planning, and appointment coordination.",
    value: siteContact.emailShowroom,
    href: `mailto:${siteContact.emailShowroom}`,
    icon: <Mail className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Operations Support",
    body: "For work orders for current clients, please contact operations at any time.",
    value: siteContact.emailOperations,
    href: `mailto:${siteContact.emailOperations}`,
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

const visitReasons = [
  "Review renovation ideas that fit your budget",
  "Discuss decks, fountains, waterfalls, and water features",
  "Plan modern equipment systems for better efficiency",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="Contact" />

        <section className="relative overflow-hidden bg-[#0f141a] bg-[url('/images/hero.png')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0e141b] via-[#10161d]/88 to-[#10161d]/55" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                Contact Atlas Pool Solutions
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
                Better Yet,
                <br />
                Call, Text, Or Visit Us
              </h1>
              <p className="mt-5 max-w-[44rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                We love renovations, so feel free to make an appointment in our showroom during our
                normal business hours. Atlas Pool Solutions serves commercial properties throughout
                Greater Los Angeles and Orange County.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={siteContact.phoneHref}
                  className="w-full rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
                >
                  Email Showroom
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1b2229] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-5 lg:grid-cols-3">
              {contactOptions.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl border border-[#4f5f6d] bg-linear-to-br from-[#2a3139]/95 to-[#1e252d]/95 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.28)] transition hover:border-[#6d8190]"
                >
                  <span className="inline-flex rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                    {item.icon}
                  </span>
                  <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-[#f4fbfd]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-[#c7d2d9]">{item.body}</p>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-[#f28b93]">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-linear-to-b from-[#151b22] to-[#0f141a] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="rounded-[24px] border border-[#495867] bg-linear-to-br from-[#2a3139]/95 to-[#1f252d]/95 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-7 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                  Showroom Appointment
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                  Plan The Best Renovation Vision For Your Property
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  The live site emphasizes consulting appointments that help shape the right
                  renovation vision for your budget. Use the showroom to compare finishes, discuss
                  water feature ideas, and review technology upgrades for your amenity.
                </p>

                <div className="mt-7 grid gap-3">
                  {visitReasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                    >
                      <span className="mt-0.5 rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                        <Send className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                      <p className="text-base leading-7 text-[#d4dde2]">{reason}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${siteContact.emailShowroom}`}
                    className="inline-flex items-center justify-center rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Book Via Email
                  </a>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-[24px] border border-[#495867] bg-[#151b22] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
                  <div className="flex items-start gap-3">
                    <span className="rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                      <MapPin className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                        Address
                      </p>
                      <p className="mt-3 text-lg font-black text-[#f6fbfc]">{siteContact.addressLines[0]}</p>
                      <p className="mt-2 text-base leading-7 text-[#cfd8dd]">
                        {siteContact.addressLines[1]}
                        <br />
                        {siteContact.addressLines[2]}
                      </p>
                      <a
                        href={siteContact.directionsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f28b93] transition hover:text-[#ffadb4]"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#495867] bg-[#151b22] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
                  <div className="flex items-start gap-3">
                    <span className="rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                      <Clock3 className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div className="w-full">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                        Hours
                      </p>
                      <div className="mt-4 space-y-3">
                        {siteContact.businessHours.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 text-sm text-[#d4dde2] last:border-b-0 last:pb-0"
                          >
                            <span>{item.split(" - ")[0]}</span>
                            <span className="font-semibold uppercase tracking-[0.1em] text-[#c0ccd2]">
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

        <section className="bg-[#1b2229] px-4 pb-10 sm:px-8 sm:pb-14">
          <div className="container mx-auto">
            <div className="overflow-hidden rounded-[24px] border border-[#495867] bg-[#151b22] shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
              <div className="flex flex-col gap-3 border-b border-white/8 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                  Map
                </p>
                <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl">
                  Visit Our Showroom
                </h2>
                <p className="max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  Find Atlas Pool Solutions in Pico Rivera and use the map below for directions to
                  the showroom.
                </p>
              </div>

              <div className="h-[420px] w-full">
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
