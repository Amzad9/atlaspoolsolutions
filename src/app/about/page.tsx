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
    body: "We serve the Greater Los Angeles area and Orange County, from small spas to Olympic swimming pools. Our passion is renovating and implementing modern technologies to achieve optimal energy efficiency. We provide consulting appointments to set the best renovation vision that fits your budget. We also renovate Decks, Fountains, Waterfalls, Water Features, and anything which requires water flow.",
    icon: <CompassIcon />,
  },
  {
    title: "Why We Do It",
    body: "Let us improve your pool and spa or deck appearance, and upgrade your poolside experience. From glossy ceramic to glass tile or fiberglass to pebble finishes. We are up to date with the latest advances in our industry, so we can guide you to a beautiful energy efficient smart pool. Pool and Spa renovations can captivate and completely change the look of your Amenity.",
    icon: <SparkIcon />,
  },
  {
    title: "Why Choose Us",
    body: "Affordability is our greatest strength and we can try to work with any budget. Our infinite renovation ideas will adapt to various settings. We design complete commercial equipment systems with the latest technologies. From minor to major renovations, there is no project too big or small.",
    icon: <ShieldIcon />,
  },
];

const differenceCards = [
  {
    title: "Fiberglass Pools",
    body: "Our fiberglass pool conversions are low-maintenance, durable, and available in any size and shapes to fit any project.",
    image: "/images/primium-pool.png",
    alt: "Pool water and deck finish example",
  },
  {
    title: "Concrete Pools",
    body: "Our concrete pools are fully customizable and built to last, with a range of design options to fit any style and budget.",
    image: "/images/expert-comercial-pool.png",
    alt: "Pool design planning and drafting board",
  },
  {
    title: "Pool Renovations",
    body: "Whether you're looking to upgrade your pool's features or completely remodel your buildings amenity or backyard, we bring your vision to life.",
    image: "/images/advanced.png",
    alt: "Commercial pool equipment and modernization",
  },
  {
    title: "Pool Financing",
    body: "We offer a variety of financing options to help make your dream pool a reality, with flexible terms and competitive rates. Please contact us for further information.",
    image: "/images/clean_features.png",
    alt: "Luxury rooftop pool amenity space",
  },
  {
    title: "Pool Maintenance Plans",
    body: "Our commercial pool and spa maintenance plans ensure that your pool stays clean, clear, and healthy year-round—so you or your residents can enjoy it without worrying about upkeep.",
    image: "/images/hero2.png",
    alt: "Rooftop pool and spa setting",
  },
];

const processSteps = [
  {
    title: "Step 1: Project Design and Approval",
    body: "The first step is an initial meeting with a trained design consultant to learn what you want in the overall pool design. A detailed survey follows (dimensions, setbacks, utilities, accessibility). Within about a week, we prepare a plan and proposed construction cost for you to review.",
  },
  {
    title: "Step 2: Permitting and Engineering",
    body: "We acquire the permit for pool and decking construction and coordinate required inspections (footer, plumbing, electrical bonding). All plans comply with local and state codes and we call 811 before construction to locate utility lines.",
  },
  {
    title: "Step 3: Layout",
    body: "After plan approval and permits, our construction department meets onsite to review stages and set form boards carefully to ensure correct pool placement.",
  },
  {
    title: "Step 4: Excavation",
    body: "Once forms are set, excavation begins.",
  },
  {
    title: "Step 5: Structural Steel",
    body: "The pool shell is reinforced with Grade 60 #3 steel rebar placed horizontally and vertically by hand, followed by a steel and ground inspection.",
  },
  {
    title: "Step 6: Rough Plumb",
    body: "Rough plumbing (“stub out”) follows steel installation: main drains, skimmers, light niches, return line stubs, and pre-plumbing of raised spas.",
  },
  {
    title: "Step 7: Gunite",
    body: "The pool floor uses concrete and the walls use a sand-and-cement gunite mix applied through a hose with pressurized air to achieve 4000 psi compressive strength.",
  },
  {
    title: "Step 8: Plumbing",
    body: "Plumbing is designed specifically for strong circulation and filtration. We perform hydraulic calculations to size equipment and piping for water clarity and energy conservation.",
  },
  {
    title: "Step 9: Tile",
    body: "After gunite, tile is installed. We offer a selection of hundreds of tiles to match colors, textures, and materials for your project.",
  },
  {
    title: "Step 10: Equipment Set",
    body: "An experienced plumber sets filtration equipment, including water feature pumps and optional equipment.",
  },
  {
    title: "Step 11: Electric",
    body: "Electrical conduits for lights and equipment power are run and the breaker box is installed at the equipment location. Gas lines to pool heaters are also run as needed.",
  },
  {
    title: "Step 12: Deck",
    body: "Decking and coping reflect your project theme (color, pattern, design). We offer hundreds of options and this stage brings the project close to the finish line.",
  },
  {
    title: "Step 13: Site Clean Up",
    body: "We remove extraneous construction materials and waste and prepare the pool interior for finishing.",
  },
  {
    title: "Step 14: Pool Interior",
    body: "The interior is coated in your chosen finish. Different finishes change the look and mood of the water. After coating, we begin filling the pool—this is the final stage of construction.",
  },
  {
    title: "Step 15: Fire Up and Orientation",
    body: "Once full, a service tech checks the installation, starts equipment, and schedules a walkthrough for maintenance operations, troubleshooting tips, and ongoing support.",
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

              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
                About
                <br />
                Atlas Pool Solutions
              </h1>
              <p className="mt-5 max-w-[42rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                Specializing in rooftop pool and spa renovations for commercial properties—serving
                Greater Los Angeles and Orange County.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
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

        <section className="bg-[#1b2229] px-4 py-10 sm:px-8 sm:py-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Built for Better Amenities
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                From glossy ceramic to glass tile or fiberglass to pebble finishes, we guide you to
                a beautiful, energy efficient smart pool that elevates your poolside experience.
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
                <span className="font-black text-[#f6fbfc]">Did you know</span> that harmful
                bacteria can cause sickness from a Waterborne Virus? Be sure that your chemistry is
                taken care of—try us, and feel the difference.
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
                  We are experts and provide{" "}
                  <span className="underline decoration-[#9ec2cd]/70 decoration-2 underline-offset-4">
                    consulting appointments
                  </span>{" "}
                  to set the best renovation vision that fits your budget. We also renovate{" "}
                  <span className="underline decoration-[#9ec2cd]/70 decoration-2 underline-offset-4">
                    decks
                  </span>
                  ,{" "}
                  <span className="underline decoration-[#9ec2cd]/70 decoration-2 underline-offset-4">
                    fountains
                  </span>
                  ,{" "}
                  <span className="underline decoration-[#9ec2cd]/70 decoration-2 underline-offset-4">
                    waterfalls
                  </span>
                  ,{" "}
                  <span className="underline decoration-[#9ec2cd]/70 decoration-2 underline-offset-4">
                    water features
                  </span>
                  , and anything which requires water flow.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-full rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit"
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
              <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Experience the Difference of Atlas
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                From renovations to maintenance plans, our team helps you create a pool environment
                that is beautiful, efficient, and easy to own.
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
                    <h3 className="text-xl font-black uppercase leading-tight text-[#f4fbfd]">
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
                A clear, step-by-step flow—from project design to orientation—so stakeholders stay
                aligned throughout construction.
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
                <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                  Better yet, Call, Text, or Visit Us
                </h2>
                <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                  We love renovations, so feel free to make an appointment in our showroom during
                  our normal business hours.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="w-full rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
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
