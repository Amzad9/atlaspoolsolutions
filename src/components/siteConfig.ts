export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/services" },
  { label: "Maps", href: "/maps" },
  { label: "About", href: "/about" },
  { label: "Race Day", href: "/case-studies" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export const siteContact = {
  emailShowroom: "info@runlikeagirlOH.org",
  emailOperations: "info@runlikeagirlOH.org",
  phone: "(614) 555-RUNS",
  phoneHref: "tel:+16145557867",
  addressLines: [
    "Westerville Athletic Complex,",
    "325 N. Cleveland Ave,",
    "Westerville, OH 43081",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=325+N.+Cleveland+Ave,+Westerville,+OH+43081",
  businessHours: [
    "Packet pickup - Saturday, Sept 20 | 10:00am to 1:00pm",
    "Packet pickup - Saturday, Sept 27 | 10:00am to 1:00pm",
    "Race day - Sunday, Oct 04 | Start 9:00am",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/runlikeagirlOH",
      key: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/runlikeagirlOH",
      key: "instagram",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/runlikeagirlOH",
      key: "x",
    },
  ],
} as const;
