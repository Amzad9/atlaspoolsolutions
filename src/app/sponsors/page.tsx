import type { Metadata } from "next";
import Link from "next/link";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Sponsors | Run Like A Girl",
  description:
    "Meet the sponsors supporting Run Like A Girl and learn how to sponsor the 2026 event.",
};

type SponsorTier = {
  tier: string;
  accent: string;
  description: string;
  sponsors: Array<{
    name: string;
    logoSrc?: string;
    blurb?: string;
    featured?: boolean;
  }>;
};

const sponsorTiers: SponsorTier[] = [
  {
    tier: "Platinum",
    accent: "#c7f0ff",
    description: "Our top-tier partners making the biggest impact on race day.",
    sponsors: [
      {
        name: "Edward Jones",
        blurb: "We support girls on the run.",
        featured: true,
      },
    ],
  },
  {
    tier: "Gold",
    accent: "#f3d27d",
    description: "Sponsors helping us deliver an unforgettable, welcoming event experience.",
    sponsors: [
      {
        name: "Domino’s",
        logoSrc: "/new/dominos.png",
      },
    ],
  },
  {
    tier: "Silver",
    accent: "#cfd8e3",
    description: "Community partners supporting runners, volunteers, and race logistics.",
    sponsors: [
      {
        name: "Skyline",
        logoSrc: "/new/Skyline.png",
      },
    ],
  },
  {
    tier: "Friend of RLAG",
    accent: "#9ee6c1",
    description: "Local supporters who believe in our mission and show up for our runners.",
    sponsors: [],
  },
  {
    tier: "Bronze",
    accent: "#d9a17d",
    description: "Sponsors powering the details that make race weekend run smoothly.",
    sponsors: [],
  },
];

function SponsorCard({
  name,
  logoSrc,
  blurb,
  featured,
}: {
  name: string;
  logoSrc?: string;
  blurb?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/15 bg-[#1e252d] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.35)]",
        featured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent" />
      </div>

      <div className="relative">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">
            Sponsor Spotlight
          </p>
          {logoSrc ? (
            <div className="mt-4 grid place-items-center rounded-2xl border border-white/10 bg-[#151b22] p-4 w-32 h-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={`${name} logo`}
                className="h-20 w-auto max-w-full object-contain sm:h-24"
                loading="lazy"
              />
            </div>
          ) : null}
          <h3 className="mt-3 text-3xl font-black uppercase leading-none text-white">{name}</h3>
          {blurb ? (
            <p className="mt-3 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              {blurb}
            </p>
          ) : (
            <p className="mt-3 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Thank you for supporting Run Like A Girl.
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
            {name}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f3d27d]">
            2026 Event Sponsor
          </span>
        </div>
      </div>
    </article>
  );
}

function EmptyTierCard({ tier }: { tier: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/25 bg-white/5 p-6">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
        {tier} sponsorship available
      </p>
      <p className="mt-3 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
        Want your logo here? Help us fund medals, shirts, water stations, and an incredible race-day
        experience.
      </p>
      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
        >
          Become A Sponsor
        </Link>
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <PageShell
      activeLabel="Sponsors"
      hero={{
        eyebrow: "Sponsors",
        title: (
          <>
            Sponsors Who
            <br />
            Fuel The Finish Line
          </>
        ),
        subtitle:
          "We’re grateful to the partners and local supporters who help make the All Women’s Fall Classic possible.",
        imageUrl: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto space-y-10">
          {sponsorTiers.map((tier) => (
            <section key={tier.tier} className="rounded-[28px] border border-white/15 bg-[#1d232b] p-6 sm:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.22em]"
                    style={{ color: tier.accent }}
                  >
                    {tier.tier}
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                    {tier.tier} Sponsors
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    {tier.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit"
                >
                  Sponsor This Tier
                </Link>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-1 lg:grid-cols-1">
                {tier.sponsors.length ? (
                  tier.sponsors.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.name}
                      name={sponsor.name}
                      logoSrc={sponsor.logoSrc}
                      blurb={sponsor.blurb}
                      featured={sponsor.featured}
                    />
                  ))
                ) : (
                  <div className="md:col-span-2 lg:col-span-3">
                    <EmptyTierCard tier={tier.tier} />
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto">
          <div className="rounded-[28px] border border-white/15 bg-[#1e252d] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-10">
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-[#f3d27d] sm:text-4xl">
              Sponsor The 2026 Event
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              If you would like to sponsor our 2026 event, please contact{" "}
              <Link href="/contact" className="font-black text-[#f3d27d] underline underline-offset-4">
                Teri
              </Link>{" "}
              for more information.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Contact About Sponsorships
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
