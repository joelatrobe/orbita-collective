"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const clients = [
  { name: "UNICEF", src: "/clients/unicef.png", width: 1280, height: 309 },
  { name: "Curzon", src: "/clients/curzon.png", width: 2500, height: 429 },
  { name: "4 Armed Health", src: "/clients/4armed.png", width: 2000, height: 389 },
  { name: "RELAX", src: "/clients/relax.png", width: 2500, height: 680 },
];

const doubledClients = [...clients, ...clients, ...clients];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      const currentSpeed = hovered ? 0.1 : 0.5;
      posRef.current -= currentSpeed;

      const singleWidth = track.scrollWidth / 3;
      if (Math.abs(posRef.current) >= singleWidth) {
        posRef.current += singleWidth;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [hovered]);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="text-center text-muted-light text-xs font-medium tracking-widest uppercase mb-10"
      >
        Trusted by
      </motion.p>

      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <div
          ref={trackRef}
          className="flex items-center gap-16 whitespace-nowrap will-change-transform"
        >
          {doubledClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="shrink-0 flex items-center justify-center h-14"
            >
              <Image
                src={client.src}
                /* Only the first pass is announced; the repeats are decorative. */
                alt={i < clients.length ? `${client.name} logo` : ""}
                aria-hidden={i >= clients.length}
                width={client.width}
                height={client.height}
                sizes="200px"
                loading="eager"
                className="h-10 md:h-12 w-auto object-contain"
                style={{
                  filter: "brightness(0)",
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
