"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const VIEWPORT = { once: true, margin: "-100px" } as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const EXPLORE_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Follow Our Work", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
  { label: "Call Us", href: "tel:0416786933" },
];

const HOURS = [
  { day: "Mon", hours: "9am – 5pm" },
  { day: "Tue", hours: "9am – 6pm" },
  { day: "Wed", hours: "9am – 6pm" },
  { day: "Thu", hours: "9am – 8pm" },
  { day: "Fri", hours: "9am – 9pm" },
  { day: "Sat", hours: "9am – 6pm" },
  { day: "Sun", hours: "10am – 5:30pm" },
];

const HEADING_CLASS =
  "mb-5 text-xs font-medium uppercase tracking-widest text-accent";
const LINK_CLASS =
  "text-sm text-foreground/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-sm";

export default function Footer() {
  return (
    <motion.footer
      {...fadeUp}
      className="w-full border-t border-[#1F1F1F] bg-[#050505] pt-20 pb-10 lg:pt-24 lg:pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-[#1F1F1F] pb-12 mb-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Skyline Barber"
              width={64}
              height={64}
              className="mb-6 h-16 w-16 object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
              Tailored haircuts, beard grooming, and modern men&apos;s grooming
              in the heart of Werribee. Walk-ins welcome.
            </p>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Explore</h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={LINK_CLASS}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden
                />
                <p className="text-sm text-foreground/80">
                  35 Watton Street, Werribee VIC 3030
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden
                />
                <a href="tel:0416786933" className={LINK_CLASS}>
                  0416 786 933
                </a>
              </div>
              <div className="flex items-start gap-3">
                <SiInstagram
                  className="mt-0.5 shrink-0 text-accent"
                  size={16}
                  aria-hidden
                />
                <a
                  href="https://www.instagram.com/skyline_barber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  @skyline_barber
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              {HOURS.map(({ day, hours }) => (
                <li key={day} className="flex justify-start gap-3 py-1 md:justify-between">
                  <span className="text-foreground/70">{day}</span>
                  <span className="font-medium text-foreground">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-foreground opacity-50">
            © 2026 Skyline Barber Cut &amp; Shave. All rights reserved.
          </p>
          <p className="text-xs text-foreground opacity-50">
            Designed and built by{" "}
            <span className="text-accent transition-opacity hover:opacity-100">
              Starfinch Media
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
