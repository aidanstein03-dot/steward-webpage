"use client";

import { type SVGProps } from "react";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";

function createImageLogo(src: string, alt: string) {
  function ImageLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" {...props}>
        <image
          href={src}
          x="10"
          y="5"
          width="180"
          height="70"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    );
  }
  ImageLogo.displayName = `ImageLogo_${alt}`;
  return ImageLogo;
}

const issuerLogos = [
  { name: "Chase", id: 1, img: createImageLogo("/logos/chase.png", "Chase") },
  { name: "Amex", id: 2, img: createImageLogo("/logos/amex.png", "Amex") },
  { name: "Citi", id: 3, img: createImageLogo("/logos/citi.png", "Citi") },
  { name: "Capital One", id: 4, img: createImageLogo("/logos/capital-one.png", "CapitalOne") },
  { name: "Bank of America", id: 5, img: createImageLogo("/logos/bofa.png", "BofA") },
  { name: "Discover", id: 6, img: createImageLogo("/logos/discover.png", "Discover") },
  { name: "Wells Fargo", id: 7, img: createImageLogo("/logos/wells-fargo.png", "WellsFargo") },
  { name: "US Bank", id: 8, img: createImageLogo("/logos/us-bank.svg", "USBank") },
];

export default function CardCoverage() {
  return (
    <section id="cards" className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            100+ credit cards supported
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Every major issuer. Every bonus category. Every rotating offer.
            Steward keeps up so you don&apos;t have to.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LogoCarousel columnCount={4} logos={issuerLogos} />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: "100+", label: "Cards" },
            { value: "8", label: "Issuers" },
            { value: "50+", label: "Bonus categories" },
            { value: "20+", label: "Loyalty programs" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-foreground-secondary mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
