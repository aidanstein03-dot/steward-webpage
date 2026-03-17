"use client";

import { motion } from "framer-motion";

const issuers = [
  { name: "Chase", color: "#003087" },
  { name: "Amex", color: "#006FCF" },
  { name: "Citi", color: "#003B70" },
  { name: "Capital One", color: "#004977" },
  { name: "Bank of America", color: "#E31837" },
  { name: "Discover", color: "#FF6000" },
  { name: "Wells Fargo", color: "#D71E28" },
  { name: "US Bank", color: "#0C2074" },
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
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {issuers.map((issuer) => (
            <div
              key={issuer.name}
              className="bg-background rounded-xl px-6 py-4 border border-foreground/5 flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: issuer.color }}
              />
              <span className="font-medium text-sm">{issuer.name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto text-center"
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
