export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const siteContact = {
  emailShowroom: "showroom@atlaspoolsolutions.com",
  emailOperations: "operations@atlaspoolsolutions.com",
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
    "Monday - 9:00am to 5:00pm",
    "Tuesday - 9:00am to 5:00pm",
    "Wednesday - 9:00am to 5:00pm",
    "Thursday - 9:00am to 5:00pm",
    "Friday - 9:00am to 5:00pm",
    "Saturday - Closed",
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
