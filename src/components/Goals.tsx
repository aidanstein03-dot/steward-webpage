"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, DollarSign, Crown } from "lucide-react";
import dynamic from "next/dynamic";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const CanvasRevealEffect = dynamic(
  () => import("@/components/ui/canvas-reveal-effect").then((m) => m.CanvasRevealEffect),
  { ssr: false }
);

const goals = [
  {
    icon: Plane,
    title: "50,000 United Miles",
    progress: 72,
    detail: "36,000 / 50,000 earned",
    color: "bg-airline",
    track: "bg-airline/20",
  },
  {
    icon: Hotel,
    title: "Marriott Gold Status",
    progress: 85,
    detail: "34 / 40 qualifying nights",
    color: "bg-dining",
    track: "bg-dining/20",
  },
  {
    icon: DollarSign,
    title: "$500 Cash Back",
    progress: 48,
    detail: "$240 / $500 earned",
    color: "bg-grocery",
    track: "bg-grocery/20",
  },
  {
    icon: Crown,
    title: "Hilton Diamond",
    progress: 60,
    detail: "36 / 60 qualifying nights",
    color: "bg-travel",
    track: "bg-travel/20",
  },
];

export default function Goals() {
  return (
    <section id="goals" className="relative px-6 py-24 overflow-hidden">
      {/* Blue dot matrix background */}
      <div className="absolute inset-0 pointer-events-none">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent"
          colors={[
            [0, 122, 255],
            [0, 122, 255],
          ]}
          dotSize={4}
          opacities={[0.15, 0.15, 0.2, 0.2, 0.25, 0.25, 0.3, 0.3, 0.35, 0.4]}
          showGradient={false}
        />
      </div>

      {/* Radial fade so dots don't overwhelm content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--background)_20%,_transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Copy */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Set goals. Track progress.
              <br />
              <span className="text-travel">Get rewarded.</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-md mx-auto lg:mx-0 mb-6">
              Whether you&apos;re saving for a trip, chasing elite status, or
              maximizing cash back — Steward keeps you on track and adjusts
              recommendations to hit your targets.
            </p>
            <ul className="text-foreground-secondary space-y-3 max-w-md mx-auto lg:mx-0">
              {[
                "Points & miles accumulation goals",
                "Hotel & airline loyalty status tracking",
                "Cash back savings targets",
                "Trip planning with card-optimized bookings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Goal cards */}
          <motion.div
            className="flex-1 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.title}
                  className="relative rounded-2xl border border-foreground/5 p-px"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className="relative bg-surface rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-lg ${goal.color}/15 flex items-center justify-center`}
                      >
                        <goal.icon className={`w-4.5 h-4.5 ${goal.color.replace("bg-", "text-")}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{goal.title}</p>
                        <p className="text-xs text-foreground-secondary">
                          {goal.detail}
                        </p>
                      </div>
                      <span className="text-sm font-bold">{goal.progress}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${goal.track}`}>
                      <motion.div
                        className={`h-2 rounded-full ${goal.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
