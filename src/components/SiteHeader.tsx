"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteNav } from "./siteConfig";

export default function SiteHeader({ activeLabel }: { activeLabel?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="px-4 pt-1">
      <div className="container mx-auto flex items-center justify-between gap-4  bg-linear-to-r from-[#222831] via-[#2c333c] to-[#232a33] px-3 py-0  sm:px-5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
          aria-label="Run Like A Girl"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-md bg-transparent sm:h-20 sm:w-20">
            <Image
              src="/new/logo-girl.png"
              alt="Run Like A Girl logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* <div className="min-w-0">
            <h2 className="text-base font-black uppercase leading-none tracking-[0.04em] text-white sm:text-lg lg:text-xl">
              <span className="block whitespace-nowrap">RUN LIKE A GIRL</span>
            </h2>
           
          </div> */}
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-5 w-5" strokeWidth={2.4} />
        </button>

        <nav className="hidden shrink-0 sm:block sm:w-auto" aria-label="Primary navigation">
          <div className="flex flex-wrap items-center justify-end gap-5 text-[14px] font-black uppercase tracking-[0.05em] text-white lg:gap-8">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href} className="cursor-pointer list-none">
                  <Link
                    href={item.href}
                    className={[
                      "transition hover:text-[#f0d07a]",
                      isActive ? "text-[#f0d07a]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full border border-[#1f7f56] bg-[#1c9a64] px-5 py-2 text-[#f7d96f] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110"
            >
              Register Now
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={[
          "pointer-events-none fixed inset-0 z-40 bg-black/55 opacity-0 transition duration-300 sm:hidden",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "",
        ].join(" ")}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      />

      <div
        className={[
          "fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-white/20 bg-[#1f252d] shadow-[-18px_0_45px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out sm:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-white">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </div>

        <nav className="px-5 py-6" aria-label="Mobile navigation">
          <ul className="space-y-2 text-base font-black uppercase tracking-[0.12em] text-white">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "block rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-[#f0d07a]/45 hover:text-[#f0d07a]",
                      isActive ? "border-[#f0d07a]/55 text-[#f0d07a]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-2xl border border-[#1f7f56] bg-[#1c9a64] px-4 py-4 text-[#f7d96f] transition hover:brightness-110"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
