export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteContact = {
  emailShowroom: "showroom@atlaspoolsolutions.com",
  emailOperations: "Operations@atlaspoolsolutions.com",
  phone: "310.341.6123",
  phoneHref: "tel:13103416123",
  addressLines: [
    "Atlas Pool Solutions, Inc",
    "3693 San Gabriel River Parkway,",
    "Pico Rivera, California 90660, United States",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=3693+San+Gabriel+River+Parkway+Pico+Rivera+California+90660",
  businessHours: [
    "Monday - By Appointment",
    "Tuesday - By Appointment",
    "Wednesday - By Appointment",
    "Thursday - By Appointment",
    "Friday - By Appointment",
    "Saturday - By Appointment",
    "Sunday - Closed",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/atlaspoolsolutions",
      key: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/atlaspoolsolutions",
      key: "instagram",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/atlaspoolsolutions",
      key: "x",
    },
  ],
} as const;

