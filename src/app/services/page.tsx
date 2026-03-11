import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, ClipboardList } from "lucide-react";

import ServicesBookingSection from "../../components/ServicesBookingSection";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Services | Atlas Pool Solutions",
  description:
    "Browse Atlas Pool Solutions service appointments for commercial renovations, maintenance, construction, water features, deck work, and fiberglass conversions.",
};

const proposalPoints = [
  "Commercial rooftop pool and spa renovation planning",
  "Equipment modernization and efficiency upgrades",
  "Deck, fountain, waterfall, and water feature scope reviews",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="Services" />

        <section className="relative overflow-hidden bg-[#0f141a] bg-[url('/images/hero2.png')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0d141b] via-[#10161d]/88 to-[#10161d]/55" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                Online Appointments
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
                Services
                <br />
                And Project Consultations
              </h1>
              <p className="mt-5 max-w-[44rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                This page turns the appointment layout from the live Atlas Pool Solutions website
                into a standalone service page using the same visual theme as the rest of the app.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center rounded-full border border-[#7f97a6] bg-[#9ec2cd]/12 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#ddecf1]">
                  All Services
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/18 bg-white/5 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#d3dbe0] transition hover:bg-white/10"
                >
                  Proposals
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesBookingSection />

        <section className="bg-linear-to-b from-[#151b22] to-[#0f141a] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[24px] border border-[#495867] bg-linear-to-br from-[#2a3139]/95 to-[#1f252d]/95 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                  Proposal Support
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                  Need A Detailed Project Proposal?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  Atlas Pool Solutions provides consulting appointments to set the best renovation
                  vision that fits your budget. Reach out when you need a more tailored scope review
                  or proposal discussion.
                </p>

                <div className="mt-7 grid gap-3">
                  {proposalPoints.map((item, index) => {
                    const icons = [
                      <ClipboardList key="clipboard" className="h-4 w-4" strokeWidth={2.4} />,
                      <BriefcaseBusiness key="briefcase" className="h-4 w-4" strokeWidth={2.4} />,
                      <CalendarDays key="calendar" className="h-4 w-4" strokeWidth={2.4} />,
                    ];

                    return (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                      >
                        <span className="mt-0.5 rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                          {icons[index]}
                        </span>
                        <p className="text-base leading-7 text-[#d4dde2]">{item}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Request Proposal
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </Link>
                  <a
                    href={siteContact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Call {siteContact.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-[#131920] p-5 shadow-inner lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                  Appointment Notes
                </p>
                <div className="mt-4 space-y-4 text-base leading-7 text-[#cfd8dd]">
                  <p>
                    All appointments shown here are styled from the screenshot you shared from the
                    existing website.
                  </p>
                  <p>
                    The booking actions now open a responsive multi-step scheduling flow so visitors
                    can choose a date, pick a time, and submit project details in one place.
                  </p>
                  <p>
                    If you want, I can also connect each card to a dedicated booking URL or embed an
                    actual appointment widget next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
