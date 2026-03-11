"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { bookingServices } from "@/lib/booking";

import ServiceBookingModal from "./ServiceBookingModal";

export default function ServicesBookingSection() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  return (
    <>
      <section className="bg-[#11161d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bookingServices.map((service) => (
              <article
                key={service.id}
                className="overflow-hidden rounded-[22px] border border-[#4f5f6d] bg-[#e8ecef] text-[#11161d] shadow-[0_16px_38px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,0,0,0.42)]"
              >
                <div className="relative h-72 border-b border-[#cfd7db]">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="min-h-20 text-2xl font-black uppercase leading-tight text-[#171b20] sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-2xl leading-none text-[#171b20]">
                    {service.durationLabel}
                    <span className="px-3 text-[#5c646c]">|</span>
                    {service.priceLabel}
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => setOpenServiceId(service.id)}
                      className="inline-flex rounded-sm bg-[#6f8fa4] px-7 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-[#7ca0b8]"
                    >
                      Book
                    </button>
                    <Link
                      href="/contact"
                      className="text-sm font-black uppercase tracking-[0.14em] text-[#6f8fa4] transition hover:text-[#56778d]"
                    >
                      Need help?
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceBookingModal
        openServiceId={openServiceId}
        onClose={() => setOpenServiceId(null)}
      />
    </>
  );
}
