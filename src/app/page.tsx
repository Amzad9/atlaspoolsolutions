import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import GallerySection from "../components/GallerySection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const serviceCards = [
  {
    title: "Commercial Pool Renovations",
    body: "We renovate commercial pools and spas with durable finishes, updated systems, and practical improvements that support long-term performance.",
    image: "/images/expert-comercial-pool.png",
    alt: "Commercial pool design planning board and draft layout",
    icon: <PoolPlanIcon />,
  },
  {
    title: "Water Features And Decks",
    body: "From decks and fountains to waterfalls and feature upgrades, we help reshape amenity spaces into polished, inviting environments.",
    image: "/images/water.png",
    alt: "Pool renovation visual with swimmer and blue water",
    icon: <RenovationIcon />,
  },
  {
    title: "Maintenance And Equipment",
    body: "Our maintenance planning and equipment upgrades improve circulation, water quality, reliability, and day-to-day operating efficiency.",
    image: "/images/advanced.png",
    alt: "Commercial pool equipment room and maintenance infrastructure",
    icon: <GearIcon />,
  },
];

const testimonials = [
  {
    name: "Property Manager",
    message:
      "Atlas helped us modernize an aging rooftop amenity with a clear renovation plan, practical finish recommendations, and strong communication throughout the process.",
    image: "/images/test1.png",
    alt: "Portrait of Sarah testimonial client",
  },
  {
    name: "Operations Team",
    message:
      "Their team approached equipment upgrades with a strong understanding of performance, budget, and long-term maintenance requirements.",
    image: "/images/test2.png",
    alt: "Portrait of Michael testimonial client",
  },
  {
    name: "Hospitality Client",
    message:
      "From initial consultation to project delivery, Atlas brought structure, professionalism, and a finished result that elevated the entire amenity.",
    image: "/images/test3.png",
    alt: "Portrait of David testimonial client",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="Home" />

        <section
          id="home"
          className="relative bg-linear-to-r from-[#1d232b] via-[#2a313a] to-[#1b2229] bg-[url('/images/hero2.png')] bg-cover bg-top-left px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
          <div className="container mx-auto">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_38%_28%,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.78)_28%,rgba(0,0,0,0.0)_62%)]" />
            <div className="relative z-10 max-w-5xl">
              <h1 className="max-w-5xl uppercase text-3xl font-black leading-[0.95] text-[#f6fbfc] drop-shadow-[0_3px_4px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
                <span className="text-2xl font-bold normal-case sm:text-3xl lg:text-4xl">
                  Atlas Pool Solutions
                </span>
                <br />
                Rooftop Pool And Spa Renovations
              </h1>
              <p className="mt-4 max-w-175 text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                Atlas Pool Solutions specializes in commercial rooftop pool and spa renovations for
                properties across Greater Los Angeles and Orange County, with a focus on appearance,
                efficiency, and long-term value.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Schedule A Pool Consultation
                </Link>
              </div>
            </div>

            <div id="services" className="relative z-10 mt-10 grid gap-5 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#4f5f6d] bg-linear-to-b from-[#2a3139]/95 to-[#20272f]/95 p-3 shadow-[0_12px_26px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-44 overflow-hidden rounded-xl border border-white/20">
                    <Image src={card.image} alt={card.alt} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="mt-1 text-[#9ec2cd]">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black uppercase leading-tight text-[#f4fbfd] sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-[#c7d2d9]">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className=" bg-[#1b2229] px-4 pb-10 pt-10 sm:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-5 rounded-[18px] border border-[#495867] bg-[#252d36]/95 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)] lg:grid-cols-12 lg:p-6">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-[#566879] shadow-inner lg:col-span-7 lg:h-auto">
                <Image
                  src="/images/clean_features.png"
                  alt="Rooftop luxury pool development with deck and seating"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="flex flex-col justify-center px-1 py-1 sm:px-2 sm:py-2 lg:col-span-5">
                <h2 className="text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                  Strategic Upgrades For High-Use Amenities
                </h2>
                <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8 lg:text-2xl">
                  We combine finish upgrades, system improvements, and practical planning to create
                  cleaner, more efficient, and more compelling commercial pool environments.
                </p>
                <Link
                  href="/case-studies"
                  className="mt-6 w-full rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-base font-black uppercase tracking-wide text-[#ffffff] shadow-[0_0_14px_rgba(230,57,70,0.4)] sm:w-fit sm:px-10 sm:text-lg"
                >
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>


        <section id="case-studies">
          <div className="container mx-auto">
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-2xl border border-[#4f5f6d] bg-[#242d36]/95 p-3"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  </div>
                  <div className="-mt-3 rounded-b-2xl border border-[#566879] bg-linear-to-br from-[#2a3139]/95 to-[#1e252d]/95 p-4 pt-8 shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                    <p className="text-xl leading-6 text-[#d7dee2]">{item.message}</p>
                    <div className="mt-3 flex items-center justify-between text-[#9ec2cd]">
                      <p className="text-2xl font-black text-[#f4fbfd] sm:text-3xl">{item.name}</p>
                      <div className="flex items-center gap-1 text-[#f1d2a7]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current sm:h-6 sm:w-6"
                            strokeWidth={1.75}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-3">
            <div className="flex py-8 flex-col gap-4 border-b border-[#3f4b57] sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-[#566879]">
                <Image
                  src="/images/test3.png"
                  alt="Founder Tony Harris portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="contact">
                <h3 className="text-2xl font-semibold text-[#f0f7f8] sm:text-3xl lg:text-4xl">
                  Built For Commercial Properties
                </h3>
                <p className="mt-1 max-w-4xl text-base leading-7 text-[#cfd8dd] sm:text-lg sm:leading-8 lg:text-2xl">
                  We help owners and managers improve pool, spa, and deck amenities with renovation
                  solutions that balance presentation, performance, and operational efficiency.
                </p>
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

function PoolPlanIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="4" width="18" height="15" rx="1" />
        <path d="M8 9h8M8 13h5M6 19v2M18 19v2" />
      </svg>
    </IconFrame>
  );
}

function RenovationIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 11h16M4 16h16" />
        <path d="M8 6v12M16 6v12" />
        <path d="M3 19h18" />
      </svg>
    </IconFrame>
  );
}

function GearIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="2.5" />
        <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.8 1.8 0 0 1-2.6 2.6l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.8 1.8 0 0 1-3.6 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.8 1.8 0 0 1-2.6-2.6l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H6a1.8 1.8 0 1 1 0-3.6h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.8 1.8 0 1 1 2.6-2.6l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .5-.9V6a1.8 1.8 0 1 1 3.6 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.8 1.8 0 1 1 2.6 2.6l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.5h.2a1.8 1.8 0 1 1 0 3.6h-.2a1 1 0 0 0-.9.6Z" />
      </svg>
    </IconFrame>
  );
}
