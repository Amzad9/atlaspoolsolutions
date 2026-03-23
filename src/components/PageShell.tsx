import type { ReactNode } from "react";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type PageShellProps = {
  activeLabel?: string;
  hero?: {
    eyebrow?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    imageUrl?: string;
  };
  children: ReactNode;
};

export default function PageShell({ activeLabel, hero, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]">
      <div className="pb-0">
        <SiteHeader activeLabel={activeLabel} />

        {hero ? (
          <section
            className={[
              "relative overflow-hidden px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16",
              hero.imageUrl ? "bg-cover bg-center" : "bg-[#1e252d]",
            ].join(" ")}
            style={hero.imageUrl ? { backgroundImage: `url('${hero.imageUrl}')` } : undefined}
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#171b22]/95 via-[#1c232b]/70 to-[#1c232b]/20" />

            <div className="container mx-auto">
              <div className="relative z-10 max-w-4xl">
                {hero.eyebrow ? (
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
                    {hero.eyebrow}
                  </p>
                ) : null}

                <h1 className="mt-5 text-4xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.02em] text-[#f3d27d]">
                  {hero.title}
                </h1>

                {hero.subtitle ? (
                  <div className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                    {hero.subtitle}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {children}

        <SiteFooter />
      </div>
    </main>
  );
}

