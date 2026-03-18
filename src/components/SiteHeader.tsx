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
    <header className="relative rounded-t-md border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
      <div className="container mx-auto flex items-center justify-between gap-4 lg:gap-5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
          aria-label="Atlas Pool Solutions"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-sm border border-slate-200 bg-white p-1 shadow-[0_10px_24px_rgba(15,23,42,0.10)] sm:h-20 sm:w-20">
            <Image
              src="/images/logo.png"
              alt="Atlas Pool Solutions logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold uppercase leading-none tracking-[0.04em] text-[#1f252d] sm:text-xl lg:text-2xl">
              <span className="block whitespace-nowrap">ATLAS POOL SOLUTIONS</span>
            </h2>
           
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-[#1f252d] shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:bg-slate-50 sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-5 w-5" strokeWidth={2.4} />
        </button>

        <nav className="hidden shrink-0 sm:block sm:w-auto" aria-label="Primary navigation">
          <ul className="flex flex-wrap justify-end gap-5 text-[15px] font-semibold text-[#1f252d] lg:gap-8">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href} className="cursor-pointer">
                  <Link
                    href={item.href}
                    className={[
                      "transition hover:text-[#e63946]",
                      isActive ? "text-[#e63946]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
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
          "fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-slate-200 bg-white shadow-[-18px_0_45px_rgba(15,23,42,0.22)] transition-transform duration-300 ease-out sm:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f252d]">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-[#1f252d] transition hover:bg-slate-50"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </div>

        <nav className="px-5 py-6" aria-label="Mobile navigation">
          <ul className="space-y-2 text-base font-black uppercase tracking-[0.12em] text-[#1f252d]">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "block rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#e63946]/45 hover:text-[#e63946]",
                      isActive ? "border-[#e63946]/55 text-[#e63946]" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
