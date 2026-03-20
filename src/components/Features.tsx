"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Layers,
  Target,
  Crown,
  Smartphone,
  Map,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Recommendations",
    description:
      "Arrive at a store and get a notification telling you which card to pull out — and why.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Layers,
    title: "Multi-Factor Scoring",
    description:
      "Considers base rates, category bonuses, merchant offers, rotating bonuses, and loyalty tiers.",
    color: "text-dining",
    bg: "bg-dining/10",
  },
  {
    icon: Target,
    title: "Rewards Goals",
    description:
      "Track progress toward earning 50k miles, reaching hotel Gold status, or saving for a trip.",
    color: "text-travel",
    bg: "bg-travel/10",
  },
  {
    icon: Crown,
    title: "Loyalty Tier Tracking",
    description:
      "Knows your Marriott Platinum, Delta Gold, Hilton Diamond — and factors tier perks into every recommendation.",
    color: "text-dining",
    bg: "bg-dining/10",
  },
  {
    icon: Map,
    title: "Merchant Discovery",
    description:
      "Explore nearby merchants on a map and see which card is best before you walk in.",
    color: "text-grocery",
    bg: "bg-grocery/10",
  },
  {
    icon: Smartphone,
    title: "Lock Screen Widget",
    description:
      "See your current recommendation without even opening the app. Glance and go.",
    color: "text-airline",
    bg: "bg-airline/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Never leave rewards on the table
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Steward combines location awareness, card intelligence, and your
            loyalty data to surface the perfect card at every purchase.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="relative rounded-2xl border border-foreground/5 p-px"
              variants={itemVariants}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative bg-background rounded-2xl p-6 h-full">
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
