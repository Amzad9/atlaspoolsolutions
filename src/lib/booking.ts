import { z } from "zod";

export type ServiceLocationType = "client-site" | "showroom";

export type BookingService = {
  alt: string;
  durationLabel: string;
  durationMinutes: number;
  id: string;
  image: string;
  locationType: ServiceLocationType;
  priceLabel: string;
  title: string;
};

export const bookingServices: BookingService[] = [
  {
    id: "commercial-renovation",
    title: "Commercial Renovation Appointment",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/images/expert-comercial-pool.png",
    alt: "Commercial pool renovation planning materials",
    locationType: "client-site",
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Pool or Spa Maintenance Appointment",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/img2.png",
    alt: "Commercial pool maintenance and equipment environment",
    locationType: "client-site",
  },
  {
    id: "residential-construction",
    title: "Residential New Pool or Spa Construction Appointment",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/img3.png",
    alt: "Modern luxury pool and spa construction setting",
    locationType: "client-site",
  },
  {
    id: "water-feature-construction",
    title: "Water Feature Construction",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/img4.png",
    alt: "Water feature and poolside design example",
    locationType: "client-site",
  },
  {
    id: "pool-deck-renovation",
    title: "Pool Deck Renovation",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/img5.png",
    alt: "Pool deck and surrounding amenity renovation example",
    locationType: "client-site",
  },
  {
    id: "fiberglass-conversion",
    title: "Pool and Spa Fiberglass Conversion",
    durationLabel: "30 mins",
    durationMinutes: 30,
    priceLabel: "Free",
    image: "/img6.png",
    alt: "Pool and spa fiberglass finish example",
    locationType: "client-site",
  },
  {
    id: "showroom-appointment",
    title: "Showroom Appointment",
    durationLabel: "1 hr",
    durationMinutes: 60,
    priceLabel: "Free",
    image: "/img7.png",
    alt: "Atlas Pool Solutions showroom logo card",
    locationType: "showroom",
  },
  {
    id: "equipment-replacement-installation",
    title: "Equipment Replacement/ Installation",
    durationLabel: "1 hr",
    durationMinutes: 60,
    priceLabel: "Free",
    image: "/img8.png",
    alt: "Pool equipment replacement and installation setting",
    locationType: "client-site",
  },
  {
    id: "residential-renovation",
    title: "Residential Pool or Spa Renovation Appointment",
    durationLabel: "1 hr",
    durationMinutes: 60,
    priceLabel: "Free",
    image: "/img9.png",
    alt: "Residential pool or spa renovation design setting",
    locationType: "client-site",
  },
];

export const bookingTimeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
] as const;

export const bookingFormSchema = z
  .object({
    serviceId: z.string().min(1, "Please select a service."),
    serviceTitle: z.string().min(1, "Missing service title."),
    serviceDuration: z.string().min(1, "Missing service duration."),
    servicePrice: z.string().min(1, "Missing service price."),
    appointmentDate: z.string().min(1, "Please choose a date."),
    appointmentTime: z.string().min(1, "Please choose a time slot."),
    firstName: z.string().trim().min(2, "First name is required."),
    lastName: z.string().trim().min(2, "Last name is required."),
    email: z.string().email("Please enter a valid email."),
    phone: z.string().trim().min(7, "Please enter a valid phone number."),
    locationType: z.enum(["client-site", "showroom"]),
    addressLine1: z.string().trim().optional(),
    addressLine2: z.string().trim().optional(),
    city: z.string().trim().optional(),
    state: z.string().trim().optional(),
    postalCode: z.string().trim().optional(),
    projectDetails: z
      .string()
      .trim()
      .min(10, "Please share at least a few details about the project."),
  })
  .superRefine((values, ctx) => {
    if (values.locationType === "client-site") {
      if (!values.addressLine1) {
        ctx.addIssue({
          code: "custom",
          message: "Address is required for onsite appointments.",
          path: ["addressLine1"],
        });
      }

      if (!values.city) {
        ctx.addIssue({
          code: "custom",
          message: "City is required for onsite appointments.",
          path: ["city"],
        });
      }

      if (!values.state) {
        ctx.addIssue({
          code: "custom",
          message: "State is required for onsite appointments.",
          path: ["state"],
        });
      }

      if (!values.postalCode) {
        ctx.addIssue({
          code: "custom",
          message: "Postal code is required for onsite appointments.",
          path: ["postalCode"],
        });
      }
    }
  });

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function getBookingService(serviceId: string) {
  return bookingServices.find((service) => service.id === serviceId);
}
