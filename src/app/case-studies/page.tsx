import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Settings2, Sparkles, Waves } from "lucide-react";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Case Studies | Atlas Pool Solutions",
  description:
    "Explore commercial pool renovation, deck, water feature, and equipment modernization project stories from Atlas Pool Solutions.",
};

const featuredStudies = [
  {
    title: "Commercial Pool Renovations",
    summary:
      "Atlas Pool Solutions helps commercial properties renew aging pools and spas with thoughtful upgrades that improve appearance, usability, and operational performance.",
    image: "/images/expert-comercial-pool.png",
    alt: "Commercial pool renovation planning board",
    icon: <Waves className="h-5 w-5" strokeWidth={2.2} />,
    challenge:
      "Many properties need to refresh aging amenities while balancing resident expectations, downtime, capital planning, and long-term operating costs.",
    approach:
      "We begin with a consultation to define project priorities, then guide finish selections, system improvements, and renovation planning with budget and lifecycle performance in mind.",
    result:
      "The result is a more polished, efficient, and competitive amenity space that supports both daily use and long-term asset value.",
  },
  {
    title: "Water Features And Deck Upgrades",
    summary:
      "Decks, fountains, waterfalls, and water features are updated to create a more cohesive and elevated poolside experience.",
    image: "/images/clean_features.png",
    alt: "Modern rooftop pool deck and water feature",
    icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
    challenge:
      "Amenity areas can feel outdated even when the core structure remains sound, especially when surrounding features no longer reflect the property standard.",
    approach:
      "Atlas evaluates each surrounding element as part of the overall experience, helping clients compare finish materials and upgrade paths that align with the property aesthetic.",
    result:
      "These improvements strengthen visual appeal, support day-to-day use, and create a stronger first impression for residents, guests, and stakeholders.",
  },
  {
    title: "Maintenance And Equipment Modernization",
    summary:
      "Maintenance strategies and equipment modernization are designed to improve water quality, reliability, and operating efficiency throughout the year.",
    image: "/images/advanced.png",
    alt: "Commercial pool equipment systems and maintenance area",
    icon: <Settings2 className="h-5 w-5" strokeWidth={2.2} />,
    challenge:
      "Commercial operators need dependable circulation, filtration, and water quality performance without adding unnecessary complexity or avoidable cost.",
    approach:
      "We review existing conditions, recommend practical upgrades, and design equipment solutions that support strong circulation, cleaner water, and better energy performance.",
    result:
      "The outcome is a more stable operating environment with improved clarity, more dependable equipment performance, and easier long-term maintenance.",
  },
];

const highlights = [
  "Serving Greater Los Angeles and Orange County",
  "Commercial rooftop pool and spa specialists",
  "Consulting appointments tailored to project budgets",
  "CA Contractor License #990127",
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="Case Studies" />

        <section className="relative overflow-hidden bg-[#0f141a] bg-[url('/images/hero2.png')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0d141b] via-[#10161d]/88 to-[#10161d]/55" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                Project Focus
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
                Case Studies
                <br />
                Built Around Better Amenities
              </h2>
              <p className="mt-5 max-w-[44rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                These case studies highlight the types of renovation, deck, water feature, and
                equipment projects Atlas Pool Solutions delivers for commercial properties seeking
                stronger performance and a more refined amenity experience.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Schedule A Consultation
                </Link>
                <a
                  href={siteContact.phoneHref}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#151b22] px-4 py-8 sm:px-8 sm:py-10">
          <div className="container mx-auto">
            <div className="grid gap-4 rounded-[22px] border border-[#495867] bg-linear-to-br from-[#26323d]/95 to-[#1a2129]/95 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.28)] sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                >
                  <span className="mt-0.5 rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                    <BadgeCheck className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <p className="text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-[#dbe3e7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1b2229] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Featured Renovation Stories
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                Each example reflects the way Atlas approaches renovation planning, client
                consultation, and amenity improvement across commercial pool environments.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {featuredStudies.map((study) => (
                <article
                  key={study.title}
                  className="overflow-hidden rounded-[24px] border border-[#4f5f6d] bg-linear-to-br from-[#2a3139]/95 to-[#1d242c]/95 shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="grid gap-0 lg:grid-cols-12">
                    <div className="relative min-h-72 lg:col-span-5">
                      <Image src={study.image} alt={study.alt} fill className="object-cover" />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    <div className="p-6 sm:p-7 lg:col-span-7 lg:p-8">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                        <span className="text-[#9ec2cd]">{study.icon}</span>
                        Case Study
                      </div>

                      <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#f5fbfd] sm:text-4xl">
                        {study.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[#c7d2d9] sm:text-lg sm:leading-8">
                        {study.summary}
                      </p>

                      <div className="mt-6 grid gap-4 xl:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9ec2cd]">
                            Challenge
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#d4dde2]">{study.challenge}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9ec2cd]">
                            Approach
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#d4dde2]">{study.approach}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9ec2cd]">
                            Result
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#d4dde2]">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-linear-to-b from-[#151b22] to-[#10161d] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[24px] border border-[#495867] bg-linear-to-br from-[#2a3139]/95 to-[#1f252d]/95 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
              <div className="lg:col-span-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                  Showroom & Consultation
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                  Ready To Discuss Your Pool Or Spa Project?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  Atlas Pool Solutions partners with commercial clients throughout Greater Los
                  Angeles and Orange County. Schedule a consultation to discuss scope, priorities,
                  finishes, and the right next step for your property.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Contact Atlas
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </Link>
                  <a
                    href={siteContact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                  >
                    {siteContact.phone}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/12 bg-[#131920] p-5 shadow-inner lg:col-span-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                    <MapPin className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                      Visit Us
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
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
