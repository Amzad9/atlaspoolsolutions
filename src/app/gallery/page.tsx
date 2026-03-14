import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import GallerySection from "../../components/GallerySection";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Gallery | Atlas Pool Solutions",
  description:
    "View a gallery of commercial pool, spa, deck, and amenity renovation imagery from Atlas Pool Solutions.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen text-[#eaf4f6]">
      <div className="pb-10">
        <SiteHeader activeLabel="Gallery" />

        <section className="relative overflow-hidden bg-[#0f141a] bg-[url('/images/hero2.png')] bg-cover bg-center px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0d141b] via-[#10161d]/88 to-[#10161d]/55" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

          <div className="container mx-auto">
            <div className="relative z-10 max-w-4xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                Visual Portfolio
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
                Unleash Your Imagination
                <br />
                With Our Swimming Pools Gallery
              </h1>
              <p className="mt-5 max-w-[44rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
                Explore a curated selection of gallery images that showcase the finish quality,
                design character, and visual impact Atlas Pool Solutions brings to pool, spa, deck,
                and water feature environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f06a74] bg-linear-to-b from-[#ef4b57] to-[#c92d3a] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#fdfcfc] shadow-[0_0_16px_rgba(230,57,70,0.45)] transition hover:brightness-105 sm:px-8 sm:text-base"
                >
                  Schedule A Consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <a
                  href={siteContact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <GallerySection
          fullWidth
          showHeader={false}
          ctaHref="/case-studies"
          ctaLabel="View Case Studies"
        />

        <SiteFooter />
      </div>
    </main>
  );
}
