"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, parseISO, startOfToday, isToday } from "date-fns";
import Image from "next/image";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { DayPicker } from "react-day-picker";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  UserRound,
  X,
} from "lucide-react";

import {
  type BookingFormValues,
  type BookingService,
  bookingFormSchema,
  bookingTimeSlots,
  getBookingService,
} from "@/lib/booking";

import { siteContact } from "./siteConfig";

type ServiceBookingModalProps = {
  onClose: () => void;
  openServiceId: string | null;
};

const initialValues: BookingFormValues = {
  serviceId: "",
  serviceTitle: "",
  serviceDuration: "",
  servicePrice: "",
  appointmentDate: "",
  appointmentTime: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  locationType: "client-site",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  postalCode: "",
  projectDetails: "",
};

export default function ServiceBookingModal({
  onClose,
  openServiceId,
}: ServiceBookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successNote, setSuccessNote] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const isOpen = Boolean(openServiceId);
  const selectedService = openServiceId ? getBookingService(openServiceId) : undefined;

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: initialValues,
  });

  const locationType = form.watch("locationType");
  const watchedValues = form.watch();
  const appointmentDateValue = form.watch("appointmentDate");
  const appointmentTime = form.watch("appointmentTime");
  const selectedDate = appointmentDateValue ? parseISO(appointmentDateValue) : undefined;
  const minDate = startOfToday();
  const maxDate = addDays(minDate, 60);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    form.reset({
      ...initialValues,
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      serviceDuration: selectedService.durationLabel,
      servicePrice: selectedService.priceLabel,
      locationType: selectedService.locationType,
    });
    setCurrentStep(1);
    setSubmitError(null);
    setSuccessNote(null);
  }, [form, selectedService]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  const currentDateTime = new Date();
  const isSelectedDateToday = selectedDate && isToday(selectedDate);

  const availableTimeSlots = bookingTimeSlots.filter((slot) => {
    if (!isSelectedDateToday) return true;
    
    const [time, period] = slot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    
    if (period === "PM" && hours < 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    const slotTime = new Date();
    slotTime.setHours(hours, minutes, 0, 0);
    
    return slotTime > currentDateTime;
  });

  const morningSlots = availableTimeSlots.filter((slot) => slot.includes("AM"));
  const afternoonSlots = availableTimeSlots.filter((slot) => slot.includes("PM"));

  const summaryRows = [
    { label: "Service", value: watchedValues.serviceTitle },
    {
      label: "Appointment",
      value:
        watchedValues.appointmentDate && watchedValues.appointmentTime
          ? `${format(parseISO(watchedValues.appointmentDate), "MMMM d, yyyy")} at ${watchedValues.appointmentTime}`
          : "Not selected",
    },
    {
      label: "Duration",
      value: `${watchedValues.serviceDuration} | ${watchedValues.servicePrice}`,
    },
    {
      label: "Client",
      value: `${watchedValues.firstName} ${watchedValues.lastName}`.trim() || "Not provided",
    },
    {
      label: "Location",
      value:
        watchedValues.locationType === "showroom"
          ? `${siteContact.addressLines[0]}, ${siteContact.addressLines[2]}`
          : watchedValues.addressLine1
            ? `${watchedValues.addressLine1}, ${watchedValues.city}, ${watchedValues.state} ${watchedValues.postalCode}`
            : "Client location pending",
    },
  ];

  if (!isOpen || !selectedService) {
    return null;
  }

  async function goToDetailsStep() {
    const valid = await form.trigger(["appointmentDate", "appointmentTime"]);
    if (valid) {
      setCurrentStep(2);
    }
  }

  async function goToProjectStep() {
    const valid = await form.trigger(["firstName", "lastName", "email", "phone"]);
    if (valid) {
      setCurrentStep(3);
    }
  }

  async function submitBooking() {
    const fieldsToCheck: Array<keyof BookingFormValues> = ["projectDetails"];

    if (locationType === "client-site") {
      fieldsToCheck.push("addressLine1", "city", "state", "postalCode");
    }

    const valid = await form.trigger(fieldsToCheck);

    if (!valid) {
      return;
    }

    setSubmitError(null);
    setSuccessNote(null);

    startTransition(async () => {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getValues()),
      });

      const result = (await response.json()) as {
        emailSent?: boolean;
        error?: string;
        message?: string;
        savedToDatabase?: boolean;
      };

      if (!response.ok) {
        setSubmitError(result.error ?? "Something went wrong while saving the booking.");
        return;
      }

      setSuccessNote(
        "Thank you. Your request has been submitted, and our team will follow up to confirm the appointment details.",
      );
      setCurrentStep(4);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-2 py-2 sm:px-4 sm:py-6 lg:px-6 lg:py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-[22px] border border-[#43515d] bg-[#0b0f14] shadow-[0_28px_80px_rgba(0,0,0,0.6)] sm:rounded-[28px]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#6f8fa4] px-4 py-4 sm:px-5 sm:py-4 lg:px-7">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-white/95">
            Service Booking
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-white transition hover:bg-white/10"
            aria-label="Close booking modal"
          >
            <X className="h-7 w-7" strokeWidth={2.4} />
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-4 sm:p-6 lg:p-9">
            <div className="mb-7 flex flex-wrap gap-3">
              {[
                { step: 1, label: "Schedule" },
                { step: 2, label: "Details" },
                { step: 3, label: "Project" },
                { step: 4, label: "Done" },
              ].map((item) => {
                const isActive = currentStep === item.step;
                const isComplete = currentStep > item.step;

                return (
                  <div
                    key={item.step}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] sm:px-4 sm:text-xs",
                      isActive
                        ? "border-[#6f8fa4] bg-[#6f8fa4]/20 text-white"
                        : isComplete
                          ? "border-[#8bb7d5]/50 bg-[#8bb7d5]/10 text-[#d7ebf6]"
                          : "border-white/12 bg-white/5 text-[#aeb9c2]",
                    ].join(" ")}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
                      {isComplete ? "✓" : item.step}
                    </span>
                    {item.label}
                  </div>
                );
              })}
            </div>

            {currentStep === 1 ? (
              <ScheduleStep
                appointmentTime={appointmentTime}
                form={form}
                maxDate={maxDate}
                minDate={minDate}
                selectedDate={selectedDate}
                selectedService={selectedService}
                afternoonSlots={afternoonSlots}
                morningSlots={morningSlots}
                onContinue={goToDetailsStep}
              />
            ) : null}

            {currentStep === 2 ? (
              <DetailsStep form={form} onBack={() => setCurrentStep(1)} onContinue={goToProjectStep} />
            ) : null}

            {currentStep === 3 ? (
              <ProjectStep
                form={form}
                isPending={isPending}
                locationType={locationType}
                onBack={() => setCurrentStep(2)}
                onSubmit={submitBooking}
                submitError={submitError}
              />
            ) : null}

            {currentStep === 4 ? (
              <SuccessStep onClose={onClose} successNote={successNote} form={form} />
            ) : null}
          </div>

          <aside className="border-t border-white/8 bg-[#e8ecef] p-4 text-[#12161b] sm:p-5 lg:border-l lg:border-t-0 lg:p-8">
            <div className="overflow-hidden rounded-[22px] border border-[#c5ced5] bg-white shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
              <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                <div className="relative h-40 sm:h-full">
                  <Image src={selectedService.image} alt={selectedService.alt} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-black uppercase leading-tight text-[#171b20] sm:text-3xl">
                    {selectedService.title}
                  </h2>
                  <p className="mt-4 text-lg text-[#171b20] sm:text-xl">
                    {selectedService.durationLabel}
                    <span className="px-3 text-[#6a727a]">|</span>
                    {selectedService.priceLabel}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#6f8fa4]">
                    {selectedService.locationType === "showroom"
                      ? "Service in showroom"
                      : "Service at your location"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[22px] border border-[#c5ced5] bg-white p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-black uppercase tracking-[0.12em] text-[#171b20]">
                Booking Summary
              </h3>
              <div className="mt-5 space-y-4">
                {summaryRows.map((row) => (
                  <div key={row.label} className="border-b border-[#dde4e8] pb-4 last:border-b-0 last:pb-0">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#728392]">
                      {row.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#2a3138]">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function ScheduleStep({
  afternoonSlots,
  appointmentTime,
  form,
  maxDate,
  minDate,
  morningSlots,
  onContinue,
  selectedDate,
  selectedService,
}: {
  afternoonSlots: readonly string[];
  appointmentTime: string;
  form: ReturnType<typeof useForm<BookingFormValues>>;
  maxDate: Date;
  minDate: Date;
  morningSlots: readonly string[];
  onContinue: () => void;
  selectedDate: Date | undefined;
  selectedService: BookingService;
}) {
  const appointmentDateError = form.formState.errors.appointmentDate?.message;
  const appointmentTimeError = form.formState.errors.appointmentTime?.message;

  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
          Step 1
        </p>
        <h1 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-[#f6fbfc] sm:text-4xl lg:text-5xl">
          Choose Your Date And Time
        </h1>
        <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
          Select a preferred date and one of the available time slots for{" "}
          <span className="font-black text-[#f6fbfc]">{selectedService.title}</span>.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-1">
        <div className="rounded-[24px] border border-[#495867] bg-[#0d1218] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-[#9ec2cd]" strokeWidth={2.2} />
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#dce5ea]">
              Calendar
            </p>
          </div>

          <DayPicker
            mode="single"
            month={selectedDate ?? minDate}
            selected={selectedDate}
            onSelect={(date) => {
              form.setValue("appointmentDate", date ? format(date, "yyyy-MM-dd") : "", {
                shouldValidate: true,
              });
              form.setValue("appointmentTime", "", { shouldValidate: true });
            }}
            disabled={[{ before: minDate }, { after: maxDate }]}
            className="text-[#e9f1f4]"
            classNames={{
              months: "flex justify-center",
              month: "w-full",
              month_caption:
                "mb-4 flex items-center justify-between text-lg font-black uppercase tracking-[0.08em] sm:mb-6 sm:text-2xl",
              caption_label: "text-lg font-black text-[#f6fbfc] sm:text-2xl",
              nav: "flex items-center gap-2",
              button_previous:
                "grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-[#dfe8ec] transition hover:bg-white/10 sm:h-10 sm:w-10",
              button_next:
                "grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-[#dfe8ec] transition hover:bg-white/10 sm:h-10 sm:w-10",
              weekday:
                "pb-3 text-xs font-black uppercase tracking-[0.12em] text-[#e5edf1] sm:pb-4 sm:text-lg",
              day: "h-9 w-9 rounded-full border border-transparent text-sm text-[#aeb7bd] transition hover:border-[#6f8fa4]/50 hover:text-white sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-2xl",
              today: "text-[#f6fbfc]",
              selected:
                "border-[#6f8fa4] bg-[#6f8fa4] text-white hover:border-[#6f8fa4] hover:bg-[#6f8fa4]",
              outside: "text-[#55606a]",
              disabled: "cursor-not-allowed opacity-35",
              chevron: "h-5 w-5 fill-current",
            }}
            components={{
              Chevron: ({ orientation, className }) =>
                orientation === "left" ? (
                  <ChevronLeft className={className} />
                ) : (
                  <ChevronRight className={className} />
                ),
            }}
          />

          {appointmentDateError ? (
            <p className="mt-4 text-sm font-semibold text-[#f28b93]">{appointmentDateError}</p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-[#9baab4]">
              Appointments are available within the next 60 days. For custom scheduling requests,
              please call {siteContact.phone}.
            </p>
          )}
        </div>

        <div className="rounded-[24px] border border-[#495867] bg-[#0d1218] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-[#9ec2cd]" strokeWidth={2.2} />
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#dce5ea]">
              Time Slots
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TimeSlotGroup
              title="Morning"
              selectedSlot={appointmentTime}
              slots={morningSlots}
              onSelect={(slot) => form.setValue("appointmentTime", slot, { shouldValidate: true })}
            />
            <TimeSlotGroup
              title="Afternoon"
              selectedSlot={appointmentTime}
              slots={afternoonSlots}
              onSelect={(slot) => form.setValue("appointmentTime", slot, { shouldValidate: true })}
            />
          </div>

          {appointmentTimeError ? (
            <p className="mt-4 text-sm font-semibold text-[#f28b93]">{appointmentTimeError}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex w-full items-center justify-center rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function DetailsStep({
  form,
  onBack,
  onContinue,
}: {
  form: ReturnType<typeof useForm<BookingFormValues>>;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
          Step 2
        </p>
        <h1 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-[#f6fbfc] sm:text-4xl lg:text-5xl">
          Add Your Details
        </h1>
        <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
          Please provide your contact information so our team can confirm the appointment and follow
          up if additional details are needed.
        </p>
      </div>

      <div className="mt-8 rounded-[24px] border border-[#495867] bg-[#0d1218] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
        <div className="mb-6 flex items-center gap-3">
          <UserRound className="h-5 w-5 text-[#9ec2cd]" strokeWidth={2.2} />
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#dce5ea]">
            Contact Information
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="First Name *"
            error={form.formState.errors.firstName?.message}
            input={<Input {...form.register("firstName")} placeholder="First name" />}
          />
          <Field
            label="Last Name *"
            error={form.formState.errors.lastName?.message}
            input={<Input {...form.register("lastName")} placeholder="Last name" />}
          />
          <Field
            label="Email *"
            error={form.formState.errors.email?.message}
            input={<Input {...form.register("email")} placeholder="name@example.com" type="email" />}
          />
          <Field
            label="Phone Number *"
            error={form.formState.errors.phone?.message}
            input={<Input {...form.register("phone")} placeholder="(310) 341-6123" type="tel" />}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-white/5 px-7 py-3 text-sm font-black uppercase tracking-wide text-[#e4edf1] transition hover:bg-white/10 sm:w-auto"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex w-full items-center justify-center rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function ProjectStep({
  form,
  isPending,
  locationType,
  onBack,
  onSubmit,
  submitError,
}: {
  form: ReturnType<typeof useForm<BookingFormValues>>;
  isPending: boolean;
  locationType: "client-site" | "showroom";
  onBack: () => void;
  onSubmit: () => void;
  submitError: string | null;
}) {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
          Step 3
        </p>
        <h1 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-[#f6fbfc] sm:text-4xl lg:text-5xl">
          Project And Location Details
        </h1>
        <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
          Confirm whether the appointment will take place at your property or in our showroom, then
          share the project details our team should review in advance.
        </p>
      </div>

      <div className="mt-8 rounded-[24px] border border-[#495867] bg-[#0d1218] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
        <div className="mb-6 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[#9ec2cd]" strokeWidth={2.2} />
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#dce5ea]">
            Location
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 text-[#d4dde2]">
            <input
              type="radio"
              value="client-site"
              {...form.register("locationType")}
              className="mt-1 h-4 w-4 accent-[#6f8fa4]"
            />
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.14em] text-[#f6fbfc]">
                Your Location
              </span>
              <span className="mt-2 block text-sm leading-6 text-[#aeb9c2]">
                Atlas can meet at the project site for consultations, renovation reviews, deck
                discussions, and equipment assessments.
              </span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 text-[#d4dde2]">
            <input
              type="radio"
              value="showroom"
              {...form.register("locationType")}
              className="mt-1 h-4 w-4 accent-[#6f8fa4]"
            />
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.14em] text-[#f6fbfc]">
                Showroom
              </span>
              <span className="mt-2 block text-sm leading-6 text-[#aeb9c2]">
                Meet with the Atlas Pool Solutions team at our showroom in Pico Rivera to review
                finishes, ideas, and project priorities.
              </span>
            </span>
          </label>
        </div>

        {locationType === "client-site" ? (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field
              label="Address *"
              error={form.formState.errors.addressLine1?.message}
              input={<Input {...form.register("addressLine1")} placeholder="Street address" />}
            />
            <Field
              label="Address Line 2"
              error={form.formState.errors.addressLine2?.message}
              input={<Input {...form.register("addressLine2")} placeholder="Apartment, suite, etc." />}
            />
            <Field
              label="City *"
              error={form.formState.errors.city?.message}
              input={<Input {...form.register("city")} placeholder="City" />}
            />
            <Field
              label="State *"
              error={form.formState.errors.state?.message}
              input={<Input {...form.register("state")} placeholder="State" />}
            />
            <Field
              label="Postal Code *"
              error={form.formState.errors.postalCode?.message}
              input={<Input {...form.register("postalCode")} placeholder="ZIP / postal code" />}
            />
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4 text-base leading-7 text-[#d4dde2]">
            Your appointment will be scheduled at the Atlas Pool Solutions showroom.
          </div>
        )}

        <div className="mt-6">
          <Field
            label="Project Details *"
            error={form.formState.errors.projectDetails?.message}
            input={
              <textarea
                {...form.register("projectDetails")}
                rows={5}
                placeholder="Tell us about the pool, spa, deck, water features, equipment, property type, and any details our team should review before the appointment."
                className="w-full rounded-2xl border border-[#425261] bg-[#0a1015] px-4 py-3 text-base text-[#f2f7f9] outline-none transition placeholder:text-[#738190] focus:border-[#6f8fa4]"
              />
            }
          />
        </div>

        {submitError ? <p className="mt-6 text-sm font-semibold text-[#f28b93]">{submitError}</p> : null}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-white/5 px-7 py-3 text-sm font-black uppercase tracking-wide text-[#e4edf1] transition hover:bg-white/10 sm:w-auto"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={isPending}
          className="inline-flex w-full items-center justify-center rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isPending ? "Submitting..." : "Submit Booking"}
        </button>
      </div>
    </div>
  );
}

function SuccessStep({
  form,
  onClose,
  successNote,
}: {
  form: ReturnType<typeof useForm<BookingFormValues>>;
  onClose: () => void;
  successNote: string | null;
}) {
  const values = form.getValues();

  return (
    <div className="max-w-3xl">
      <div className="inline-flex rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
        <CheckCircle2 className="h-7 w-7" strokeWidth={2.2} />
      </div>
      <h1 className="mt-5 text-3xl font-black uppercase leading-[0.95] text-[#f6fbfc] sm:text-4xl lg:text-5xl">
        Booking Submitted
      </h1>
      <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
        Your request for <span className="font-black text-[#f6fbfc]">{values.serviceTitle}</span>{" "}
        on {format(parseISO(values.appointmentDate), "MMMM d, yyyy")} at {values.appointmentTime} has
        been received successfully.
      </p>
      {successNote ? <p className="mt-4 text-sm leading-6 text-[#9ec2cd]">{successNote}</p> : null}

      <div className="mt-8 rounded-[24px] border border-[#495867] bg-[#0d1218] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-6">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9ec2cd]">
          Next Step
        </p>
        <p className="mt-3 text-base leading-7 text-[#d4dde2]">
          Atlas Pool Solutions will review the information provided and follow up using {values.email}{" "}
          or {values.phone}. For urgent inquiries, please call {siteContact.phone}.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex w-full items-center justify-center rounded-full border border-[#f06a74] bg-gradient-to-b from-[#ef4b57] to-[#c92d3a] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_14px_rgba(230,57,70,0.4)] transition hover:brightness-105 sm:w-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function TimeSlotGroup({
  onSelect,
  selectedSlot,
  slots,
  title,
}: {
  onSelect: (slot: string) => void;
  selectedSlot: string;
  slots: readonly string[];
  title: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-black text-[#f6fbfc] sm:text-2xl">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              className={[
                "rounded-2xl border px-3 py-3 text-center text-sm font-medium transition sm:px-4 sm:py-4 sm:text-xl",
                isSelected
                  ? "border-[#6f8fa4] bg-[#6f8fa4] text-white"
                  : "border-[#496073] bg-transparent text-[#f4f8fa] hover:border-[#6f8fa4] hover:bg-[#6f8fa4]/10",
              ].join(" ")}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  error,
  input,
  label,
}: {
  error?: string;
  input: ReactNode;
  label: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black uppercase tracking-[0.14em] text-[#dce5ea]">
        {label}
      </span>
      {input}
      {error ? <span className="mt-2 block text-sm font-semibold text-[#f28b93]">{error}</span> : null}
    </label>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-[#425261] bg-[#0a1015] px-4 py-3 text-base text-[#f2f7f9] outline-none transition placeholder:text-[#738190] focus:border-[#6f8fa4]"
    />
  );
}
