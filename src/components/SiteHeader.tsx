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
    <header className="relative rounded-t-md border-b border-[#3f4b57]/70 bg-[#1f252d]/95 px-4 py-4 sm:px-8">
      <div className="container mx-auto flex items-center justify-between gap-4 lg:gap-5">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
          aria-label="Atlas Pool Solutions"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-sm border border-zinc-600 bg-white p-1 shadow-[0_0_18px_rgba(255,255,255,0.14)] sm:h-20 sm:w-20">
            <Image
              src="/images/logo.png"
              alt="Atlas Pool Solutions logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold leading-none tracking-[-0.02em] text-[#18a8f5] sm:text-xl lg:text-2xl">
              <span className="block whitespace-nowrap">Atlas Pool Solutions</span>
            </h2>
           
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 p-3 text-[#d8dfe3] transition hover:bg-white/10 sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-5 w-5" strokeWidth={2.4} />
        </button>

        <nav className="hidden shrink-0 sm:block sm:w-auto" aria-label="Primary navigation">
          <ul className="flex flex-wrap justify-end gap-5 text-[15px] font-semibold text-[#d8dfe3] lg:gap-8">
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
          "fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-[#3f4b57]/70 bg-[#161c23] shadow-[-18px_0_45px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out sm:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#dbe3e7]">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 p-2 text-[#d8dfe3] transition hover:bg-white/10"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" strokeWidth={2.4} />
          </button>
        </div>

        <nav className="px-5 py-6" aria-label="Mobile navigation">
          <ul className="space-y-2 text-base font-black uppercase tracking-[0.12em] text-[#d8dfe3]">
            {siteNav.map((item) => {
              const isActive = item.label === activeLabel;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "block rounded-2xl border border-white/8 bg-white/4 px-4 py-4 transition hover:border-[#e63946]/45 hover:text-[#e63946]",
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

