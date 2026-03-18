import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CompassIcon, ShieldIcon, SparkleIcon, Star } from "lucide-react";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
const aboutCards = [
  {
    title: "What We Do",
    body: "Atlas Pool Solutions serves Greater Los Angeles and Orange County with renovation planning and construction support for commercial pools, spas, decks, fountains, waterfalls, and water features.",
    icon: <CompassIcon />,
  },
  {
    title: "Why We Do It",
    body: "Well-executed renovations improve more than appearance. They strengthen the overall amenity experience, modernize performance, and help properties present a more valuable, better maintained environment.",
    icon: <SparkleIcon />,
  },
  {
    title: "Why Choose Us",
    body: "We combine practical project guidance, finish expertise, and equipment knowledge to help clients move from concept to execution with a scope that fits their operational goals and budget.",
    icon: <ShieldIcon />,
  },
];
const serviceCards = [
  {
    title: "Commercial Pool Renovations",
    body: "We renovate commercial pools and spas with durable finishes, updated systems, and practical improvements that support long-term performance.",
    image: "/rs=h_{640}.webp",
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
    name: "J. Adams",
    company: "Best Property Management",
    message:
      "Atlas delivered a clear renovation plan, practical finish guidance, and a noticeably stronger amenity presentation.",
    image: "https://images.pexels.com/photos/6829569/pexels-photo-6829569.jpeg",
    alt: "Portrait of Sarah testimonial client",
  },
  {
    name: "M. Bennett",
    company: "Crestline Operations Group",
    message:
      "Their team approached our equipment upgrade with a strong understanding of performance, budget, and long-term maintenance needs.",
    image: "https://images.unsplash.com/photo-1614436201459-156d322d38c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait of Michael testimonial client",
  },
  {
    name: "D. Lewis",
    company: "Summit Hospitality Partners",
    message:
      "From consultation through delivery, Atlas brought structure, professionalism, and a finished result that elevated the entire amenity.",
    image: "https://images.unsplash.com/photo-1699013703317-21c7e1513e68?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Portrait of David testimonial client",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pb-0">
        <SiteHeader activeLabel="Home" />

        <section
          id="home"
          className="relative bg-white bg-[url('https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg')] bg-cover bg-top-left px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-16"
        >
          <div className="absolute inset-0 bg-linear-to-r from-white/99 via-black/ to-transparent" />
          <div className="container mx-auto">
            <div className="relative z-10 max-w-5xl">
              <h1 className="max-w-5xl uppercase text-3xl font-black leading-[0.95] text-slate-900 sm:text-5xl lg:text-6xl">
                <span className="text-2xl font-bold normal-case text-[#4682B4] sm:text-3xl lg:text-4xl">
                  Atlas Pool Solutions
                </span>
                <br />
                Rooftop POOL & SPA Renovations
              </h1>
              <p className="mt-4 max-w-175 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Atlas Pool Solutions specializes in commercial rooftop pool and spa renovations for
                properties across Greater Los Angeles and Orange County, with a focus on appearance,
                efficiency, and long-term value.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#4682B4] bg-[#4682B4] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_16px_rgba(70,130,180,0.35)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
                >
                  Schedule A Pool Consultation
                </Link>
              </div>
            </div>

            <div id="services" className="relative z-10 mt-10 grid gap-5 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#3c73a1] bg-[#4682B4] p-3 shadow-[0_12px_26px_rgba(70,130,180,0.25)]"
                >
                  <div className="relative h-44 overflow-hidden rounded-xl border border-white/35">
                    <Image src={card.image} alt={card.alt} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="mt-1 text-white">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-white/90">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pt-10 sm:px-8 sm:pt-14">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black leading-[0.95] text-slate-900 sm:text-4xl lg:text-5xl">
                Built for Better Amenities
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                We help clients upgrade finishes, improve efficiency, and create amenity spaces that
                feel current, durable, and professionally executed.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {aboutCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#3c73a1] bg-[#4682B4] p-5 shadow-[0_16px_34px_rgba(70,130,180,0.25)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-white">{card.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black uppercase leading-tight text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-white/90">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.10)]">
              <p className="text-base leading-7 text-slate-700 sm:text-lg">
                Strong renovation planning should be matched by strong water quality standards,
                dependable circulation, and maintenance practices that support a healthier pool
                environment.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white px-4 pb-10 pt-10 sm:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-5 rounded-[18px] border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.10)] lg:grid-cols-12 lg:p-6">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-200 shadow-inner lg:col-span-7 lg:h-auto">
                <Image
                  src="/images/clean_features.png"
                  alt="Rooftop luxury pool development with deck and seating"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="flex flex-col justify-center px-1 py-1 sm:px-2 sm:py-2 lg:col-span-5">
                <h2 className="text-3xl font-black leading-[0.95] text-slate-900 sm:text-4xl lg:text-5xl">
                  Strategic Upgrades For High-Use Amenities
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:text-2xl">
                  We combine finish upgrades, system improvements, and practical planning to create
                  cleaner, more efficient, and more compelling commercial pool environments.
                </p>
                <Link
                  href="/case-studies"
                  className="mt-6 w-full rounded-full border border-[#4682B4] bg-[#4682B4] px-6 py-3 text-center text-base font-black uppercase tracking-wide text-white shadow-[0_0_14px_rgba(70,130,180,0.30)] sm:w-fit sm:px-10 sm:text-lg"
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
                  className="flex h-full flex-col rounded-2xl border border-[#3c73a1] bg-[#4682B4] p-3"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  </div>
                  <div className="-mt-3 flex flex-1 flex-col rounded-b-2xl border border-white/35 bg-[#4682B4] p-4 pt-8 shadow-[0_10px_25px_rgba(70,130,180,0.30)]">
                    <p className="min-h-28 text-lg leading-7 text-white/90 italic sm:min-h-32">
                      &ldquo;{item.message}&rdquo;
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-3 text-white/90">
                      <div className="min-w-0">
                        <p className="text-lg font-black text-white sm:text-2xl">{item.name}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-sm">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#fef3c7]">
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
            <div className="flex flex-col gap-4 border-b border-slate-200 py-8 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src="/images/test3.png"
                  alt="Founder Tony Harris portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="contact">
                <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                  Built For Commercial Properties
                </h3>
                <p className="mt-1 max-w-7xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:text-2xl">
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
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/35 bg-white/15">
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
