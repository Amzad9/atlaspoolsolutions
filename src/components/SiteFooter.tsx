import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { siteContact, siteNav } from "./siteConfig";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  x: Twitter,
} as const;

export default function SiteFooter() {
  return (
    <footer className="bg-linear-to-b from-[#1f252d] to-[#181e25] px-3 md:px-0">
      <div className="container mx-auto">
        <div className="grid gap-8 pb-8 pt-7 lg:grid-cols-5">
          <div>
            <div className="relative h-44 w-44 overflow-hidden rounded-md border border-zinc-600 bg-white p-1">
              <Image
                src="/images/logo.png"
                alt="Atlas Pool Solutions logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-medium text-[#dbe3e7]">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-md font-normal text-[#cfd8dd]">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#e63946]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-medium text-[#dbe3e7]">Follow Us</h4>
            <div className="mt-3 flex gap-2">
              {siteContact.socials.map(({ key, href, label }) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#e63946] text-[#ffffff] transition hover:brightness-110"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </a>
                );
              })}
            </div>

            <p className="mt-5 text-2xl font-medium text-[#dbe3e7]">Contact Us</p>
            <a
              href={`mailto:${siteContact.emailShowroom}`}
              className="mt-3 block wrap-break-word whitespace-normal text-md text-[#cfd8dd] transition hover:text-[#e63946]"
            >
              {siteContact.emailShowroom}
            </a>
            <p className="mt-2 text-md text-[#cfd8dd]">{siteContact.phone}</p>
            <p className="mt-3 text-sm leading-6 text-[#cfd8dd]">
              For service requests and work orders for current clients, please contact
            </p>
            <a
              href={`mailto:${siteContact.emailOperations}`}
              className="mt-2 block wrap-break-word whitespace-normal text-sm leading-6 text-[#cfd8dd] transition hover:text-[#e63946]"
            >
              {siteContact.emailOperations}
            </a>
          </div>

          <div>
            <h4 className="text-2xl font-medium text-[#dbe3e7]">Hours</h4>
            <div className="mt-3 space-y-2 text-sm leading-6 text-[#cfd8dd]">
              {siteContact.businessHours.map((item) => {
                const [day, hours] = item.split(" - ");

                return (
                  <p key={item}>
                    <span className="font-semibold text-[#e2eaee]">{day}:</span> {hours}
                  </p>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mt-5 text-lg font-black uppercase text-[#dce3e7] sm:text-xl">Address</p>
            <p className="mt-1 text-base leading-7 text-[#cfd8dd] sm:text-lg">
              {siteContact.addressLines[0]}
              <br />
              {siteContact.addressLines[1]}
              <br />
              {siteContact.addressLines[2]}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3f4b57] bg-[#131920] py-4 text-center text-sm font-semibold text-[#c7d1d6]">
        &copy; {new Date().getFullYear()} Atlas Pool Solutions, Inc. All rights reserved.
      </div>
    </footer>
  );
}

