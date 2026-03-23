import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, MapPin, ShieldCheck, Timer } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Race Day | Run Like A Girl",
  description: "Race day guide: what to expect, where to park, and key tips for a smooth morning.",
};

const faq = [
  {
    title: "When should I arrive?",
    body: "Plan to arrive early to park, warm up, and find your start corral. If you’re new to racing, give yourself extra time to get settled.",
    icon: <Timer className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Where do I park?",
    body: "Parking is available at Westerville Sports Complex with overflow across the street. No grass parking; towing enforced.",
    icon: <MapPin className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "What should I bring?",
    body: "Bring your bib, safety pins, comfortable layers for the weather, and hydration if you prefer your own. Most importantly—bring your energy and your friends.",
    icon: <BadgeCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Is there support on course?",
    body: "Yes—expect volunteers, signage, and a supportive community vibe. If you have specific accessibility questions, email us and we’ll help.",
    icon: <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function RaceDayPage() {
  return (
    <PageShell
      activeLabel="Race Day"
      hero={{
        eyebrow: "Race Day",
        title: (
          <>
            A Smooth Start
            <br />
            A Strong Finish
          </>
        ),
        subtitle:
          "Everything you need to know for a confident, calm race morning—from parking to packet pickup.",
        imageUrl: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Quick Checklist
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Packet pickup:</span> Advance pickup recommended (friends/family can pick up for you).
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Start time:</span> 9:00 am on Sunday, October 4, 2026.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Location:</span> Westerville Athletic Complex.
              </li>
              <li className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <span className="font-black text-white">Parking:</span> Sports Complex + overflow across the street.
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Ask A Question
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Distances
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                Need Directions?
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
                Open Maps
              </a>
              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-white/80">
                Questions about volunteering, sponsors, or accessibility? Email us at{" "}
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="font-semibold text-white underline decoration-white/25 underline-offset-4 transition hover:text-[#f3d27d]"
                >
                  {siteContact.emailShowroom}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
            Frequently Asked
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {faq.map((item) => (
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
        </div>
      </section>
    </PageShell>
  );
}

