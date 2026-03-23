import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock3, MapPin, ParkingCircle } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Maps | Run Like A Girl",
  description: "Directions and parking details for the All-Women’s Fall Classic in Westerville, Ohio.",
};

const tips = [
  {
    title: "Primary Parking",
    body: "Park at Westerville Sports Complex with overflow across the street.",
    icon: <ParkingCircle className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Arrive Early",
    body: "Give yourself time to park, warm up, and find your start area before the 9:00 am start.",
    icon: <Clock3 className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Be Road-Ready",
    body: "Follow event signage and volunteers on site. No grass parking; towing enforced.",
    icon: <Car className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function MapsPage() {
  return (
    <PageShell
      activeLabel="Maps"
      hero={{
        eyebrow: "Maps",
        title: (
          <>
            Find Us Fast
            <br />
            Park With Confidence
          </>
        ),
        subtitle:
          "Use the map below for directions to Westerville Athletic Complex, plus quick notes for parking and arrival.",
        imageUrl: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="flex items-start gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  <MapPin className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                    Address
                  </p>
                  <p className="mt-3 text-lg font-black text-white">{siteContact.addressLines[0]}</p>
                  <p className="mt-2 text-base leading-7 text-white/80">
                    {siteContact.addressLines[1]}
                    <br />
                    {siteContact.addressLines[2]}
                  </p>
                  <a
                    href={siteContact.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f3d27d] transition hover:brightness-110"
                  >
                    Open In Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6">
              {tips.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
                >
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                Race Day Guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[24px] border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)]">
              <div className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Interactive Map
                </p>
                <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  Tap and zoom to plan your route.
                </p>
              </div>

              <div className="h-[340px] w-full sm:h-[420px] lg:h-[520px]">
                <iframe
                  title="Westerville Athletic Complex map"
                  src="https://www.google.com/maps?q=325%20N%20Cleveland%20Ave%2C%20Westerville%2C%20OH%2043081&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
