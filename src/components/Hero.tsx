"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";

const HEIGHT = "min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)]";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section className={`relative w-full overflow-hidden ${HEIGHT}`}>
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/hero-mobile.jpg')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/85 to-black/95 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/85 lg:to-black/65" />

      <div
        className={`relative z-10 mx-auto flex max-w-7xl items-center px-6 lg:px-12 ${HEIGHT}`}
      >
        <div className="max-w-2xl py-20 lg:py-32">
          <motion.p
            {...fadeUp(0)}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Welcome to Skyline Barbers Werribee
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)" }}
            className="mt-4 text-5xl font-extrabold leading-none text-foreground md:text-6xl lg:text-7xl"
          >
            Precision modern grooming.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-lg text-foreground/90 lg:text-xl"
          >
            Tailored haircuts, beard grooming, and modern men&apos;s grooming
            in the heart of Werribee. Walk-ins welcome.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:0416786933"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-[#dcae15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call 0416 786 933
            </a>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md border-2 border-foreground bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View services
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex items-center gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4"
                  fill="#F5C518"
                  stroke="#F5C518"
                />
              ))}
            </div>
            <p className="text-sm text-foreground/80">
              4.9 from 502+ Google reviews
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
