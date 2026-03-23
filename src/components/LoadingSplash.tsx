"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LoadingSplashProps = {
  src: string;
  alt: string;
  durationMs?: number;
};

export default function LoadingSplash({ src, alt, durationMs = 2000 }: LoadingSplashProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;

    const ms = Math.max(0, Math.floor(durationMs));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const enter = () => {
      wrapper.classList.remove("opacity-0");
      wrapper.classList.add("opacity-100");
      card.classList.remove("translate-y-2", "scale-[0.98]", "opacity-0");
      card.classList.add("translate-y-0", "scale-100", "opacity-100");
    };

    const exit = () => {
      wrapper.classList.remove("opacity-100");
      wrapper.classList.add("opacity-0");
      card.classList.remove("translate-y-0", "scale-100", "opacity-100");
      card.classList.add("translate-y-2", "scale-[0.98]", "opacity-0");
    };

    const cleanup = () => {
      wrapper.style.display = "none";
      document.body.style.overflow = previousOverflow;
      setIsVisible(false);
    };

    const exitMs = prefersReducedMotion ? 0 : 320;
    const raf = window.requestAnimationFrame(enter);
    const exitTimer = window.setTimeout(exit, prefersReducedMotion ? 0 : ms);
    const cleanupTimer = window.setTimeout(cleanup, prefersReducedMotion ? 0 : ms + exitMs);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(cleanupTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [durationMs, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#1a2027] px-6 opacity-0 transition-opacity duration-300"
      aria-label="Loading"
      role="status"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-[620px] translate-y-2 scale-[0.98] overflow-hidden rounded-3xl opacity-0 transition duration-300"
      >
        <div className="relative aspect-[18/12] w-full">
          <Image src={src} alt={alt} fill className="object-contain" priority unoptimized />
        </div>
      </div>
    </div>
  );
}
