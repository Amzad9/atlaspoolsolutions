import Image from "next/image";
import Link from "next/link";

import { siteNav } from "./siteConfig";

export default function SiteHeader({ activeLabel }: { activeLabel?: string }) {
  return (
    <header className="rounded-t-md border-b border-[#3f4b57]/70 bg-[#1f252d]/95 px-4 py-4 sm:px-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-4" aria-label="Atlas Pool Solutions">
          <div className="relative h-16 w-16 overflow-hidden rounded-sm border border-zinc-600 bg-white p-1 shadow-[0_0_18px_rgba(255,255,255,0.14)] sm:h-20 sm:w-20">
            <Image
              src="/images/logo.webp"
              alt="Atlas Pool Solutions logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="w-full sm:w-auto" aria-label="Primary navigation">
          <ul className="flex flex-wrap justify-start gap-4 text-sm font-semibold text-[#d8dfe3] sm:justify-end sm:gap-8 sm:text-[15px]">
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
    </header>
  );
}

