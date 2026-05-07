"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { SiInstagram } from "react-icons/si";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
];

const PHONE_HREF = "tel:0416786933";
const PHONE_DISPLAY = "Call 0416 786 933";
const IG_URL = "https://www.instagram.com/skyline_barber/";

const navLinkClass =
  "text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm";

const ctaClass =
  "inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-[#dcae15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const iconButtonClass =
  "rounded-sm p-2 text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#1F1F1F] bg-background">
        <div className="grid h-16 grid-cols-3 items-center px-6 lg:h-20 lg:px-12">
          <div className="flex justify-start">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className={`-ml-2 lg:hidden ${iconButtonClass}`}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={navLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              aria-label="Skyline Barber Cut & Shave — Home"
              className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <Image
                src="/logo.png"
                alt="Skyline Barber Cut & Shave"
                width={56}
                height={56}
                priority
                className="h-12 w-12 object-contain lg:h-14 lg:w-14"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Skyline Barber on Instagram"
              className="mr-4 hidden items-center justify-center rounded-sm p-1 text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
            >
              <SiInstagram size={24} aria-hidden />
            </a>
            <a href={PHONE_HREF} className={`${ctaClass} px-4 py-2.5 lg:px-6 lg:py-3`}>
              <Phone className="h-4 w-4 lg:hidden" aria-hidden />
              <span className="lg:hidden">Call</span>
              <span className="hidden lg:inline">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex h-16 items-center justify-end px-6">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className={`-mr-2 ${iconButtonClass}`}
                autoFocus
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="px-6 pt-8">
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-2xl font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-6">
                <a
                  href={PHONE_HREF}
                  onClick={() => setOpen(false)}
                  className={`${ctaClass} w-full justify-center`}
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 self-start rounded-sm text-base font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <SiInstagram size={20} className="text-accent" aria-hidden />
                  Follow Us on Instagram
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
