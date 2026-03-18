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
  "Commercial pool and spa renovation planning",
  "Equipment replacement, modernization, and efficiency upgrades",
  "Deck, fountain, waterfall, and water feature consultations",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pb-0">
        <SiteHeader activeLabel="Services" />

        <section className="relative overflow-hidden bg-white bg-[url('https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="absolute inset-0 bg-linear-to-r from-white/99 via-black/ to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1f252d] shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:text-sm">
                Online Appointments
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] text-slate-900 sm:text-6xl lg:text-6xl">
                Services
                <br />
                And Project Consultations
              </h2>
              <p className="mt-5 max-w-176 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Browse consultation options for renovations, maintenance, equipment upgrades, deck
                improvements, and new project planning. Each appointment is designed to help you
                move from early ideas to a clear next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center rounded-full border border-[#4682B4]/35 bg-[#4682B4]/10 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#1f252d]">
                  All Services
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#4682B4] bg-[#4682B4] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:brightness-105"
                >
                  Proposals
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesBookingSection />

        <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[24px] border border-[#3c73a1] bg-[#4682B4] p-6 shadow-[0_18px_44px_rgba(70,130,180,0.25)] lg:grid-cols-12 lg:p-8">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Proposal Support
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] text-white sm:text-4xl lg:text-5xl">
                  Need A Detailed Scope Or Proposal?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                  Atlas Pool Solutions works with property teams, managers, and owners to define
                  practical renovation priorities, align project scope with budget, and plan the
                  right improvements for each amenity.
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
                        className="flex items-start gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-4"
                      >
                        <span className="mt-0.5 rounded-full bg-white/20 p-2 text-white">
                          {icons[index]}
                        </span>
                        <p className="text-base leading-7 text-white/90">{item}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#1f252d] shadow-[0_0_14px_rgba(255,255,255,0.25)] transition hover:bg-slate-50 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Request Proposal
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </Link>
                  <a
                    href={siteContact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/15 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Call {siteContact.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/25 bg-white/10 p-5 shadow-inner lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Appointment Notes
                </p>
                <div className="mt-4 space-y-4 text-base leading-7 text-white/90">
                  <p>
                    Each service option is designed to make scheduling simple and to help your team
                    start the conversation with the right level of detail.
                  </p>
                  <p>
                    The booking flow allows visitors to choose a date, select a time, and provide
                    project information in a single streamlined experience.
                  </p>
                  <p>
                    For more complex requests, Atlas can also coordinate proposal reviews and
                    follow-up consultations directly through the contact team.
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
