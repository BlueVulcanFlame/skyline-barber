"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/magicui/grid-pattern";

const VIEWPORT = { once: true, margin: "-100px" } as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0F0F0F] py-24 lg:py-32"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className="absolute inset-0 h-full w-full mask-[radial-gradient(ellipse_at_center,white,transparent_75%)] fill-white/20 stroke-white/20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            {...slideInLeft}
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#262626]"
          >
            <Image
              src="/about.jpg"
              alt="Inside Skyline Barber Werribee"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <motion.p
              {...fadeUp(0)}
              className="mb-6 text-sm font-medium uppercase tracking-widest text-accent"
            >
              What we offer
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="mb-8 text-3xl font-bold leading-tight text-foreground lg:text-4xl xl:text-5xl"
            >
              Style, precision, and modern grooming in the heart of Werribee.
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="mb-6 text-base leading-relaxed text-foreground/80 lg:text-lg"
            >
              At Skyline Barbers, we specialise in tailored haircuts, beard
              grooming, and a wide range of men&apos;s grooming services and
              kids&apos; haircuts — all delivered in a relaxed and welcoming
              atmosphere.
            </motion.p>

            <motion.p
              {...fadeUp(0.3)}
              className="mb-8 text-base leading-relaxed text-foreground/80 lg:text-lg"
            >
              Whether you&apos;re after a classic look or the latest trend, our
              skilled barbers ensure every client leaves looking sharp and
              confident. Walk-ins welcome.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="h-1 w-24 rounded-full bg-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
