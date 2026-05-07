"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { GridPattern } from "@/components/magicui/grid-pattern";

const VIEWPORT = { once: true, margin: "-100px" } as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const INSTAGRAM_URL = "https://www.instagram.com/skyline_barber/";
const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export default function Reviews() {
  return (
    <section
      id="reviews"
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
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
            Follow our work
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            See our latest cuts on Instagram.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            A look inside the chair. Fresh fades, beard trims, and the work
            that walks out the door every week.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3">
          {IMAGES.map((n, i) => (
            <motion.a
              key={n}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(i * 0.05)}
              className="group relative block aspect-square overflow-hidden rounded-md border-2 border-accent/40 transition-all duration-300 hover:scale-[1.02] hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={`/ig-${n}.jpg`}
                alt={`Skyline Barber Instagram post ${n}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
            </motion.a>
          ))}
        </div>

        <motion.div {...fadeUp(0.45)} className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md border-2 border-accent bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wide text-accent transition-all duration-300 hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <SiInstagram size={24} aria-hidden />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
