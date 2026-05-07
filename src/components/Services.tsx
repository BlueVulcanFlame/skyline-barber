"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { GiBeard, GiHairStrands, GiScissors } from "react-icons/gi";

const VIEWPORT = { once: true, margin: "-100px" } as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

type Featured = {
  icon: IconType;
  name: string;
  price: string;
  description: string;
};

const FEATURED: Featured[] = [
  {
    icon: GiScissors,
    name: "Men's Haircut",
    price: "$30",
    description: "A clean, tailored cut for everyday confidence.",
  },
  {
    icon: GiHairStrands,
    name: "Skin Fade",
    price: "$40",
    description: "Sharp lines, modern fades, executed with precision.",
  },
  {
    icon: GiBeard,
    name: "Full Beard",
    price: "$25",
    description: "Trimmed, shaped, and finished for a polished look.",
  },
];

const COLUMN_ONE = [
  { name: "Men's Haircut", price: "$30" },
  { name: "Kids Haircut", price: "$25" },
  { name: "Skin Fade", price: "$40" },
  { name: "Zero Fade", price: "$35" },
  { name: "Buzz Cut", price: "$25" },
  { name: "Head Clean Shave", price: "$30" },
  { name: "Beard Line Up", price: "$15" },
];

const COLUMN_TWO = [
  { name: "Full Beard", price: "$25" },
  { name: "Facial", price: "$35" },
  { name: "Hair Wash", price: "$5" },
  { name: "Waxing", price: "$5" },
  { name: "Senior Haircut", price: "$25" },
  { name: "Colouring", price: "$35" },
  { name: "Eyebrow Threading", price: "$10" },
];

const PRICELIST = [...COLUMN_ONE, ...COLUMN_TWO];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
            Our services
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Cuts, shaves, and grooming for every style.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            From classic cuts to modern fades — see our full price list below.
            Walk-ins welcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                {...fadeUp(i * 0.1)}
                className="rounded-lg border border-[#262626] bg-[#161616] p-8 transition-all duration-300 hover:border-accent"
              >
                <Icon size={48} color="#F5C518" className="mb-6" aria-hidden />
                <h3 className="text-2xl font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-accent">
                  {service.price}
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.h3
          {...fadeUp(0)}
          className="mb-8 mt-24 text-center text-2xl font-bold text-foreground"
        >
          Full price list
        </motion.h3>

        <motion.ul
          {...fadeUp(0)}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-x-12 gap-y-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-7"
        >
          {PRICELIST.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between border-b border-[#262626] py-3"
            >
              <span className="text-base text-foreground">{item.name}</span>
              <span className="text-base font-bold text-accent">
                {item.price}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          {...fadeUp(0)}
          className="mt-12 text-center text-sm italic text-foreground/60"
        >
          Walk-ins welcome. Call 0416 786 933 to check wait times.
        </motion.p>
      </div>
    </section>
  );
}
