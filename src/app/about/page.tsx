import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us | Atlas Pool Solutions",
  description:
    "Learn more about Atlas Pool Solutions: commercial rooftop pool and spa renovations serving Greater Los Angeles and Orange County.",
};

const aboutCards = [
  {
    title: "What We Do",
    body: "Atlas Pool Solutions serves Greater Los Angeles and Orange County with renovation planning and construction support for commercial pools, spas, decks, fountains, waterfalls, and water features.",
    icon: <CompassIcon />,
  },
  {
    title: "Why We Do It",
    body: "Well-executed renovations improve more than appearance. They strengthen the overall amenity experience, modernize performance, and help properties present a more valuable, better maintained environment.",
    icon: <SparkIcon />,
  },
  {
    title: "Why Choose Us",
    body: "We combine practical project guidance, finish expertise, and equipment knowledge to help clients move from concept to execution with a scope that fits their operational goals and budget.",
    icon: <ShieldIcon />,
  },
];

const differenceCards = [
  {
    title: "Fiberglass Pools",
    body: "Fiberglass solutions offer a durable, low-maintenance option for properties seeking reliable performance and a streamlined finish approach.",
    image: "/abouts/img1.png",
    alt: "Pool water and deck finish example",
  },
  {
    title: "Concrete Pools",
    body: "Concrete pool solutions support flexible layouts, custom detailing, and long-term durability across a wide range of commercial applications.",
    image: "/abouts/img2.png",
    alt: "Pool design planning and drafting board",
  },
  {
    title: "Pool Renovations",
    body: "From targeted upgrades to full amenity repositioning, our renovation work is built to improve both presentation and performance.",
    image: "/abouts/img3.png",
    alt: "Commercial pool equipment and modernization",
  },
  {
    title: "Pool Financing",
    body: "For projects requiring additional planning support, our team can discuss options and next steps during the consultation process.",
    image: "/abouts/img4.png",
    alt: "Luxury rooftop pool amenity space",
  },
  {
    title: "Pool Maintenance Plans",
    body: "Maintenance planning helps keep pools and spas clean, consistent, and ready for daily use while reducing avoidable operational issues.",
    image: "/abouts/img5.png",
    alt: "Rooftop pool and spa setting",
  },
];

const processSteps = [
  {
    title: "Step 1: Project Design and Approval",
    body: "We begin with an initial meeting to understand the project goals, design priorities, and operational needs. A detailed site review follows, and a preliminary plan with budget guidance is prepared for review.",
  },
  {
    title: "Step 2: Permitting and Engineering",
    body: "We coordinate permitting, engineering, and required inspections while ensuring the project aligns with local and state code requirements before construction begins.",
  },
  {
    title: "Step 3: Layout",
    body: "After approvals are in place, the construction team reviews the site layout and establishes project positioning to confirm accurate placement and staging.",
  },
  {
    title: "Step 4: Excavation",
    body: "Once layout is confirmed, excavation begins in preparation for structural work.",
  },
  {
    title: "Step 5: Structural Steel",
    body: "The shell is reinforced with structural steel according to engineering requirements, followed by the appropriate inspection process.",
  },
  {
    title: "Step 6: Rough Plumb",
    body: "Rough plumbing follows steel installation, including drains, skimmers, returns, light niches, and any required pre-plumbing for attached features.",
  },
  {
    title: "Step 7: Gunite",
    body: "The shell is formed using the appropriate structural concrete application to create the pool floor, walls, and core vessel shape.",
  },
  {
    title: "Step 8: Plumbing",
    body: "The circulation and plumbing system is designed to support effective filtration, dependable performance, and efficient long-term operation.",
  },
  {
    title: "Step 9: Tile",
    body: "Tile selections are installed to align with the design direction, material palette, and visual character of the finished amenity.",
  },
  {
    title: "Step 10: Equipment Set",
    body: "Filtration equipment, pumps, and related components are set in place to support the required circulation and feature systems.",
  },
  {
    title: "Step 11: Electric",
    body: "Electrical work is coordinated for lighting, controls, and equipment power, with gas service routed where heating systems are required.",
  },
  {
    title: "Step 12: Deck",
    body: "Decking and coping are completed to support the design concept, material selection, and overall finish quality of the project.",
  },
  {
    title: "Step 13: Site Clean Up",
    body: "The site is cleared of excess materials and prepared for the final finish stages.",
  },
  {
    title: "Step 14: Pool Interior",
    body: "The interior finish is applied based on the selected material, giving the water its final appearance and preparing the vessel for startup.",
  },
  {
    title: "Step 15: Fire Up and Orientation",
    body: "After startup, the system is reviewed, equipment is commissioned, and a final orientation is provided to support operations, maintenance, and ongoing use.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="About" />

        <section className="relative bg-[#0f141a] bg-[url('/images/hero.png')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0e141b] via-[#0e141b]/85 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                ATLAS POOL SOLUTIONS CA #990127
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
                About
                <br />
                Atlas Pool Solutions
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                Atlas Pool Solutions provides commercial pool and spa renovation expertise for
                properties across Greater Los Angeles and Orange County.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Book A Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1b2229] px-4 pt-10 sm:px-8 sm:pt-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Built for Better Amenities
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                We help clients upgrade finishes, improve efficiency, and create amenity spaces that
                feel current, durable, and professionally executed.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {aboutCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#4f5f6d] bg-linear-to-br from-[#2a3139]/95 to-[#1e252d]/95 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#9ec2cd]">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black uppercase leading-tight text-[#f4fbfd]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#c7d2d9]">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#4f5f6d] bg-[#222b34]/95 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
              <p className="text-base leading-7 text-[#cfd8dd] sm:text-lg">
                Strong renovation planning should be matched by strong water quality standards,
                dependable circulation, and maintenance practices that support a healthier pool
                environment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-linear-to-b from-[#1b2229] to-[#151b22] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[22px] border border-[#495867] bg-linear-to-br from-[#2c3946]/75 to-[#1f2731]/95 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-7">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl">
                  Renovations, Decks & Water Features
                </h2>
                <p className="mt-4 text-base leading-8 text-[#c9d4da] sm:text-lg">
                  We provide consulting appointments to help define the right renovation strategy
                  for each property and budget. Our work also includes decks, fountains,
                  waterfalls, water features, and other water-driven amenity elements.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-full rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit"
                  >
                    Schedule A Showroom Visit
                  </Link>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 shadow-inner lg:col-span-7 lg:h-auto">
                <Image
                  src="/images/clean_features.png"
                  alt="Pool amenity renovation with modern finishes"
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1b2229] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-black leading-none text-[#f0f7f8] sm:text-3xl lg:text-4xl">
                Experience the Difference of Atlas
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                From renovations to maintenance planning, our team helps clients create pool
                environments that are efficient, attractive, and easier to manage over time.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {differenceCards.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-2xl border border-[#4f5f6d] bg-[#242d36]/95 p-3 shadow-[0_12px_26px_rgba(0,0,0,0.25)] lg:col-span-1"
                >
                  <div className="relative h-40 overflow-hidden rounded-xl border border-white/15">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-md font-black uppercase leading-tight text-[#f4fbfd]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#c7d2d9]">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-linear-to-b from-[#151b22] to-[#0f141a] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                The New Pool Construction Process
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                Our process is designed to keep planning, approvals, construction, and turnover
                organized from the first meeting through final orientation.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              {processSteps.map((step) => (
                <details
                  key={step.title}
                  className="group rounded-2xl border border-[#4f5f6d] bg-[#1c232b]/85 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-black text-[#f6fbfc] sm:text-xl">{step.title}</p>
                      </div>
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-[#dbe3e7] transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>
                  <p className="mt-3 text-base leading-7 text-[#c9d4da]">{step.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1b2229] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="grid gap-6 rounded-[22px] border border-[#495867] bg-linear-to-br from-[#2a3139]/95 to-[#1f252d]/95 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl">
                  Better yet, Call, Text, or Visit Us
                </h2>
                <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  Contact Atlas Pool Solutions to discuss renovation priorities, showroom meetings,
                  and the next steps for your property.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="w-full rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Contact Atlas
                  </Link>
                  <a
                    href="tel:13103416123"
                    className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                  >
                    Call 310.341.6123
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#141a20] p-5 shadow-inner lg:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(158,194,205,0.25)_0%,rgba(0,0,0,0)_60%)]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                    Showroom
                  </p>
                  <p className="mt-2 text-lg font-black text-[#f6fbfc]">
                    Atlas Pool Solutions, Inc
                  </p>
                  <p className="mt-2 text-base leading-7 text-[#cfd8dd]">
                    3693 San Gabriel River Parkway,
                    <br />
                    Pico Rivera, California 90660, United States
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#cfd8dd]">
                    showroom@atlaspoolsolutions.com
                    <br />
                    310.341.6123
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#cfd8dd]">
                    For work orders for current clients, please contact us at
                    Operations@atlaspoolsolutions.com at any time.
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

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-[#61717f] bg-[#2a3139]/90">
      {children}
    </span>
  );
}

function CompassIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.2 13 13l-3.8 1.8L11 11z" />
      </svg>
    </IconFrame>
  );
}

function SparkIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2v6M12 16v6M4 12h6M14 12h6" />
        <path d="M6.2 6.2 10 10M14 14l3.8 3.8M17.8 6.2 14 10M10 14l-3.8 3.8" />
      </svg>
    </IconFrame>
  );
}

function ShieldIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 20 7v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
        <path d="M9.3 12.2 11 14l3.8-4.4" />
      </svg>
    </IconFrame>
  );
}
