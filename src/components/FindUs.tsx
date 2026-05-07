"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const VIEWPORT = { once: true, margin: "-100px" } as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const slideIn = (from: "left" | "right") => ({
  initial: { opacity: 0, x: from === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.7, ease: "easeOut" as const },
});

const HOURS = [
  { day: "Monday", hours: "9am – 5pm" },
  { day: "Tuesday", hours: "9am – 6pm" },
  { day: "Wednesday", hours: "9am – 6pm" },
  { day: "Thursday", hours: "9am – 8pm" },
  { day: "Friday", hours: "9am – 9pm" },
  { day: "Saturday", hours: "9am – 6pm" },
  { day: "Sunday", hours: "10am – 5:30pm" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.0!2d144.6628!3d-37.9018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzUgV2F0dG9uIFN0LCBXZXJyaWJlZSBWSUMgMzAzMA!5e0!3m2!1sen!2sau!4v1700000000000";

export default function FindUs() {
  return (
    <section id="find-us" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
            Find us
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Drop in. Walk-ins welcome.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            35 Watton Street, Werribee. Open seven days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          <motion.div
            {...slideIn("left")}
            className="rounded-lg border border-[#262626] bg-[#161616] p-8 lg:p-10"
          >
            <div className="space-y-6">
              <InfoBlock icon={MapPin} label="Address">
                <span className="text-base leading-relaxed text-foreground">
                  35 Watton Street
                  <br />
                  Werribee VIC 3030
                </span>
              </InfoBlock>

              <InfoBlock icon={Phone} label="Call">
                <a
                  href="tel:0416786933"
                  className="text-base leading-relaxed text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#161616] rounded-sm"
                >
                  0416 786 933
                </a>
              </InfoBlock>

              <InfoBlock icon={Clock} label="Hours">
                <ul className="space-y-1.5 text-sm">
                  {HOURS.map(({ day, hours }) => (
                    <li
                      key={day}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-foreground/70">{day}</span>
                      <span className="font-medium text-foreground">
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            </div>

            <a
              href="tel:0416786933"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-[#dcae15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[#161616]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call to confirm
            </a>
          </motion.div>

          <motion.div
            {...slideIn("right")}
            className="min-h-[350px] overflow-hidden rounded-lg border border-[#262626] lg:min-h-[500px]"
          >
            <iframe
              src={MAP_EMBED_URL}
              title="Skyline Barbers location on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type InfoBlockProps = {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
};

function InfoBlock({ icon: Icon, label, children }: InfoBlockProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10">
        <Icon className="h-7 w-7 text-accent" aria-hidden />
      </div>
      <div className="flex-1 pt-1">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
